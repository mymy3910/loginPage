//会員登録ページ登録ボタン押下で処理開始（入力値チェック～入力値保持）
document.getElementById("register").onclick = function(){
    //名前を取得
    const name = document.getElementById("name").value;
    //メールアドレスを取得
    const mail = document.getElementById("mail").value;
    //パスワードを取得
    const pass = document.getElementById("pass").value;
    //パスワード（再入力）を取得
    const rePass = document.getElementById("rePass").value;

    //入力チェック時のエラーメッセージ
    this.errorMessages = [];

    //未入力チェック（全体）
    let flag = 0; 
    if(name == ""){
        flag = 1;
    }
    if(mail == ""){
        flag = 1;
    }
    if(pass == ""){
        flag = 1;
    }
    if(rePass == ""){
        flag = 1;
    }

    if(flag == 1){
        this.errorMessages.push("未入力の項目があります。");
    }else{    
        //全角入力かのチェック(名前）
        if(!name.match(/^[^\x01-\x7E\xA1-\xDF]+$/)){
            this.errorMessages.push("名前は全角で入力してください。");
        }
        //半角英数のみで@が含まれているか（正規表現）のチェック（メール）
        if(!mail.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
            this.errorMessages.push("正しいメールアドレス（半角英数字で@を含む）を入力してください。");
        }
        //半角英数チェック（パスワード）
        if(!pass.match(/^[A-Za-z0-9]+$/)){
            this.errorMessages.push("パスワードは半角英数字で入力してください。");
        }
        //一致チェック（パスワード・パスワード（再））
        if(pass != rePass){
            this.errorMessages.push("パスワード欄とパスワード再入力欄には同じ値を入力してください。");
        }
    }

    //各エラーメッセージを表示、エラーがある場合はfalseを返しsubmitしない
    if (this.errorMessages.length != 0) { 
      alert(this.errorMessages.join('\n'));
      return false;
    }else{
      return true;
    }      
}


