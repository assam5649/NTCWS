package main

import (
	"encoding/json"
	"net/http"
)

type Data struct {
	Message string `json:"message"`
}

func main() {
	http.HandleFunc("/api/data", func(w http.ResponseWriter, r *http.Request) {
		// バックエンドでのデータ処理
		data := Data{Message: "Hello from Go backend!"}

		// JSON形式でデータをフロントエンドに送信
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(data)
	})

	// サーバーを起動
	http.ListenAndServe(":3000", nil)
}
