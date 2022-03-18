//会員登録ページ登録ボタン押下で処理開始（入力値チェック～入力値保持）
const register = document.getElementById("register");
register.addEventListener('click' , function(event) {
    //入力値取得{
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const pass = document.getElementById("pass").value;
    const rePass = document.getElementById("rePass").value;

    //入力チェック時のエラーメッセージ
    this.errorMessages = [];  

    //未入力チェック（全体）
    if(name == ""|| 
       mail == ""||
       pass == ""||
       rePass == ""){
        this.errorMessages.push("未入力の項目があります。"); 
    }
    //全角入力チェック(名前）
    if(!name.match(/^[^\x01-\x7E\uFF61-\uFF9F]+$/)){
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
    //各エラーメッセージを表示、エラーがある場合はfalseを返しsubmitしない
    if (this.errorMessages.length != 0) { 
        alert(this.errorMessages.join('\n'));
        /*イベントキャンセル(後続のブラウザのイベントをここで終了させる)
        Qiita用にこのページだけで簡潔させる
        event.preventDefault();*/
    }else{
        alert("登録されました。");
    }

},false);

 //パスワード表示切替処理
 const checkbox = document.getElementById("checkbox");
 checkbox.addEventListener(`change`, function(){
   //入力欄取得
   const passCheck =  document.getElementById("pass");
   const rePassCheck = document.getElementById("rePass");
   //チェックボックスの状態で表示切替
   if(checkbox.checked){
       passCheck.setAttribute('type', 'text');
       rePassCheck.setAttribute('type', 'text');
    } else {
       passCheck.setAttribute('type', 'password');
       rePassCheck.setAttribute('type', 'password');
    }

  }, false);