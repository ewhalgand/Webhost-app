package users

import (
	"net/http"
	"webhost-api/model"

	"github.com/gin-gonic/gin"
)

func (h *UsersHandler) GetUser(ctx *gin.Context) {
	userRaw, exists := ctx.Get("user")

	if !exists || userRaw == nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"user": nil,
		})
	}

	user, ok := userRaw.(model.Users)

	if !ok {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"error": "user type assertion failed",
		})
	}

	ctx.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}
