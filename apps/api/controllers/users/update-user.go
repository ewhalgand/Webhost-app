package users

import (
	"fmt"
	"net/http"
	"path/filepath"
	"time"
	"webhost-api/model"

	"github.com/gin-gonic/gin"
)

func (h *UsersHandler) UpdateUser(ctx *gin.Context) {
	userRaw, _ := ctx.Get("user")

	user := userRaw.(model.Users)

	firstname := ctx.PostForm("firstname")
	lastname := ctx.PostForm("lastname")

	file, err := ctx.FormFile("avatar")
	if err == nil {
		ext := filepath.Ext(file.Filename)
		if ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".webp" {
			ctx.JSON(http.StatusBadRequest, gin.H{
				"error": "Format d'image non supporté",
			})
			return
		}

		fileName := fmt.Sprintf("avatar_%d_%d%s", user.ID, time.Now().Unix(), ext)
		filepath := filepath.Join("uploads", "avatars", fileName)

		if err := ctx.SaveUploadedFile(file, filepath); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": "Erreur lors de l'enregistrement de l'image",
			})
			return
		}

		user.Img_url = "/" + filepath
	}

	if firstname != "" {
		user.Firstname = firstname
	}

	if lastname != "" {
		user.Lastname = lastname
	}

	if err := h.DB.Save(&user).Error; err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": "Échec de la mise a jour du profil",
		})
	}

	ctx.JSON(http.StatusOK, gin.H{
		"message": "Profile mis à jour avec succès !",
	})
}
