//ログインページのログインボタン押下で処理開始
document.getElementById("login").onclick = function(){
    //会員登録で入力された値の取得
    const gotmail = document.getElementById("gotmail").value;
    const gotpass = document.getElementById("gotpass").value; 

    //ログインページで入力された値の取得
    const mail = document.getElementById("mail").value;
    const pass = document.getElementById("pass").value; 

    //入力チェック時のエラーメッセージ
    this.errorMessages = [];

    //未入力チェック
    let flag = 0; 
    if(mail == ""){
        flag = 1;
    }
    if(pass == ""){
        flag = 1;
    }

    if(flag == 1){
        this.errorMessages.push("未入力の項目があります。");
    }else{
        //取得したメールアドレスと入力されたメールアドレスが一致しているか
        if(gotmail != mail){
            this.errorMessages.push("入力したメールアドレスが間違っています。");
        }
        //取得したパスワードと入力されたパスワードが一致しているか
        if(gotpass != pass){
            this.errorMessages.push("入力したパスワードが間違っています。");
        }
    }

    //エラーメッセージを表示、エラーがなければログイン成功メッセージのみを表示
    if (this.errorMessages.length != 0) { 
        alert(this.errorMessages.join('\n'));
    }else{
        alert("ログインに成功しました！");
    }   

}

