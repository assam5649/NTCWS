document.addEventListener("DOMContentLoaded", function() {
    // ここにJavaScriptコードを記述します
    var element = document.querySelector(".btn.bgleft");
    if (element) {
        element.addEventListener("click", function() {
            // HTTPリクエストを送信する処理
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:8080/", true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // console.log(xhr.responseText); // レスポンスをログに出力
                    alert(xhr.responseText);
                }
            };
            xhr.send();
        });
    } else {
        console.error("Element with selector '.btn.bgleft' not found.");
    }
});