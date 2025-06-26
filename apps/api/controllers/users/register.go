package users

import (
	"net/http"
	"webhost-api/model"

	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

func (h *UsersHandler) RegisterUsers(ctx *gin.Context) {
	var data map[string]string

	if err := ctx.BindJSON(&data); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid json",
		})
		return
	}

	password, err := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": "Erreur lors du hash du mot de passe",
		})
		return
	}

	user := model.Users{
		Firstname: data["firstname"],
		Lastname:  data["lastname"],
		Email:     data["email"],
		Password:  password,
		Role:      data["role"],
	}

	if err := h.DB.Create(&user).Error; err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{
			"error": "Erreur lors de la creation du compte ou compte déjà existant",
		})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{
		"message": "Inscription réussi !",
	})
}
