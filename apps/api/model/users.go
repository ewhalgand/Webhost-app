package model

import "time"

type Users struct {
	ID         int64     `gorm:"primaryKey" json:"id"`
	Firstname  string    `gorm:"not null" json:"firstname"`
	Lastname   string    `gorm:"not null" json:"lastname"`
	Email      string    `gorm:"unique" json:"email"`
	Password   []byte    `gorm:"not null" json:"-"`
	Img_url    string    `gorm:"null" json:"img_url"`
	Created_At time.Time `gorm:"autoCreateTime" json:"created_at"`
	Updated_At time.Time `gorm:"autoUpdateTime" json:"updated_at"`
	Role       string    `gorm:"null" json:"role"`
}
