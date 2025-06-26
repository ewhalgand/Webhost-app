package users

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func Logout(ctx *gin.Context) {
	http.SetCookie(ctx.Writer, &http.Cookie{
		Name:     "webhost-token",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HttpOnly: true,
		Secure:   false,
	})

	ctx.JSON(http.StatusOK, gin.H{
		"message": "Déconnexion réussi !",
	})
}
