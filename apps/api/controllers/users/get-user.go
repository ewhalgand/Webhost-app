package users

import (
	"net/http"
	"webhost-api/model"

	"github.com/gin-gonic/gin"
)

func (h *UsersHandler) GetUser(ctx *gin.Context) {
	userRaw, _ := ctx.Get("user")

	user := userRaw.(model.Users)

	ctx.JSON(http.StatusOK, gin.H{
		"user": user,
	})
}
