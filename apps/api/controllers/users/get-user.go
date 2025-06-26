package users

import (
	"net/http"
	"webhost-api/config"
	"webhost-api/model"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func (h *UsersHandler) GetUser(ctx *gin.Context) {
	configEnv, err := config.LoadConfig()
	if err != nil {
		panic("Failed to load config")
	}

	cookie, err := ctx.Cookie("webhost-token")

	token, err := jwt.ParseWithClaims(cookie, &jwt.RegisteredClaims{}, func(t *jwt.Token) (interface{}, error) {
		return []byte(configEnv.JWT_SECRET), nil
	})
	if err != nil || !token.Valid {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"error": "Non authentifié",
		})
		return
	}

	claims := token.Claims.(*jwt.RegisteredClaims)

	var user model.Users

	h.DB.Where("id = ?", claims.Issuer).First(&user)

	ctx.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}
