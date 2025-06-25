package config

import (
	"log"

	"github.com/spf13/viper"
)

type Config struct {
	DB_URL     string `mapstructure:"DB_URL"`
	PORT       string `mapstructure:"PORT"`
	JWT_SECRET string `mapstructure:"JWT_SECRET"`
}

func LoadConfig() (c *Config, err error) {
	viper.SetConfigFile(".env")

	viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		log.Fatal("Can't find the file .env : ", err)
	}

	err = viper.Unmarshal(&c)
	if err != nil {
		log.Fatal("Environment can't be loaded: ", err)
	}

	return
}
