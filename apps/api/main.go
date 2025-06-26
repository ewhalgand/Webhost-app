package main

import (
	"fmt"
	"log"
	"webhost-api/config"
	"webhost-api/controllers/users"
	"webhost-api/db"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	configEnv, err := config.LoadConfig()
	if err != nil {
		panic("Failed to load config")
	}

	r := gin.Default()
	r.Use(cors.New(config.CorsConfig()))

	r.Static("/uploads", "./uploads")

	dbHandler := db.InitDB(configEnv.DB_URL)

	users.UserRoute(r, dbHandler)

	err = r.Run(":" + configEnv.PORT)
	if err != nil {
		log.Fatalln("Failed to run server")
	}

	fmt.Printf("Server runing on PORT: %s\n", configEnv.PORT)
}
