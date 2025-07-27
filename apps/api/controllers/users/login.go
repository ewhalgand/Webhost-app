package users

import (
	"net/http"
	"strconv"
	"time"
	"webhost-api/config"
	"webhost-api/model"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

func (h *UsersHandler) LoginUsers(ctx *gin.Context) {
	configEnv, err := config.LoadConfig()
	if err != nil {
		panic("Failed to load config")
	}

	var data map[string]string

	if err := ctx.BindJSON(&data); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid json",
		})
		return
	}

	var user model.Users

	h.DB.Where("email = ?", data["email"]).First(&user)

	if user.ID == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{
			"error": "Utilisateur introuvable",
		})
		return
	}

	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": "Mot de passe incorect",
		})
		return
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.RegisteredClaims{
		Issuer:    strconv.Itoa(int(user.ID)),
		ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
		IssuedAt:  jwt.NewNumericDate(time.Now()),
	})

	token, err := claims.SignedString([]byte(configEnv.JWT_SECRET))
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": "Impossible de me connecter au serveur",
		})
		return
	}

	cookie := setAuthCookie(token)
	http.SetCookie(ctx.Writer, cookie)

	ctx.JSON(http.StatusOK, gin.H{
		"message": "Connexion réussi !",
	})
}

func setAuthCookie(token string) *http.Cookie {
	return &http.Cookie{
		Name:     "webhost-token",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HttpOnly: true,
		Secure:   false,
		SameSite: http.SameSiteLaxMode,
	}
}
