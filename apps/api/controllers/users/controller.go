package users

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type UsersHandler struct {
	DB *gorm.DB
}

func UserRoute(router *gin.Engine, db *gorm.DB) {
	handler := &UsersHandler{
		DB: db,
	}

	publicUserRoutes := router.Group("/api")
	{
		publicUserRoutes.POST("/register", handler.RegisterUsers)
		publicUserRoutes.POST("/login", handler.LoginUsers)
		publicUserRoutes.POST("/logout", Logout)
	}

	privateUserRoutes := router.Group("/api")
	privateUserRoutes.Use(handler.AuthRequired)
	{
		privateUserRoutes.GET("/user", handler.GetUser)
		privateUserRoutes.PUT("/profile", handler.UpdateUser)
	}
}
