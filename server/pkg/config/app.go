package config

import (
	"fmt"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"os"
	"github.com/joho/godotenv"
	"log"
)

var (
	db *gorm.DB
)

func Connect() {

	err := godotenv.Load("/home/thomas/lighthouse/go/projects/catPark/.env")
  if err != nil {
    log.Fatal("Error loading .env file")
	}
	EnvHost := os.Getenv("Host")
	EnvPort := os.Getenv("Port")
	EnvUser := os.Getenv("User")
	EnvDBName := os.Getenv("DBName")
	EnvPassword := os.Getenv("Password")

	dbInfo := fmt.Sprintf("host=%s port=%s user=%s dbname=%s password=%s", EnvHost, EnvPort, EnvUser, EnvDBName, EnvPassword)
	fmt.Println(dbInfo)

	d, err := gorm.Open("postgres", dbInfo)
	if err != nil {
		panic(err)
	}
	db = d
	fmt.Println("Successfully connected!")
}

func GetDB() *gorm.DB {
	return db
}

