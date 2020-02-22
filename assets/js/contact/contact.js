function ContactMeSubmit() {

    var ZOIsNameInput = document.getElementById("ZOIsNameInput").value;
    var ZOIsEmailInput = document.getElementById("ZOIsEmailInput").value;
    var ZOIsTextValue = document.getElementById("ZOIsTextValue").value;

    var to = "zoi@zoizoi.net";
    var subject = `zoizoi.netへのコメント(${ZOIsNameInput}より)`;
    var message = `${ZOIsTextValue}\n\n返信先:${ZOIsEmailInput}`;
    var headers = "From: user@zoizoi.net";
    /*
    console.log(to);
    console.log(subject);
    console.log(message);
    console.log(headers);
    */
    console.log(ZOIsNameInput);
    console.log(ZOIsEmailInput);
    console.log(ZOIsTextValue);
    if (ZOIsNameInput != "" && ZOIsEmailInput != "" && ZOIsTextValue != "") {
        console.log("ok.");
        $.post(
                'http://zoichannel.php.xdomain.jp/mail.php',
                `to=${to}&subject=${subject}&message=${message}&headers=${headers}`
            )
            .done(function(data) {
                // console.log(data.form);
                alert("送信が完了しました。");
            })
    } else {
        event.preventDefault();
        alert("入力していない欄があります。");
    }
}