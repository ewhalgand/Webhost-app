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

	userRoutes := router.Group("/api")
	{
		userRoutes.GET("/user", handler.GetUser)
		userRoutes.POST("/register", handler.RegisterUsers)
		userRoutes.POST("/login", handler.LoginUsers)
	}
}
