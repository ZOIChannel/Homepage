function ContactMeSubmit() {

    var ZOIsNameInput = document.getElementById("ZOIsNameInput").value;
    var ZOIsEmailInput = document.getElementById("ZOIsEmailInput").value;
    var ZOIsTextValue = document.getElementById("ZOIsTextValue").value;

    var to = "zoi@zoizoi.net";
    var subject = `コメント(zoizoi.net, "${document.getElementById("ZOIsNameInput").value}"より)`;
    var message = `${document.getElementById("ZOIsTextValue").value}\n\n返信先:${document.getElementById("ZOIsEmailInput").value}`;
    var headers = "From: user@zoizoi.net";
    /*
    console.log(to);
    console.log(subject);
    console.log(message);
    console.log(headers);
    */
    if (to && subject && message && headers) {
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
        console.log("out.");
        document.getElementById("ZOIsNameInput").value = ZOIsNameInput;
        document.getElementById("ZOIsEmailInput").value = ZOIsEmailInput;
        document.getElementById("ZOIsTextValue").value = ZOIsTextValue;
        alert("入力していない欄があります。");
    }
}