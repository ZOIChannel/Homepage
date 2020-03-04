function ContactMeSubmit() {

    var ZOIsNameInput = document.getElementById("ZOIsNameInput").value;
    var ZOIsEmailInput = document.getElementById("ZOIsEmailInput").value;
    var ZOIsTextValue = document.getElementById("ZOIsTextValue").value;
    var Notification = document.getElementById("Notification")

    var to = "zoi@zoizoi.net";
    var subject = `zoizoi.netへのコメント(${ZOIsNameInput}より)`;
    var message = `${ZOIsTextValue}\n\n返信先:${ZOIsEmailInput}`;
    var headers = "From: user@zoizoi.net";
    if (ZOIsNameInput != "" && ZOIsEmailInput != "" && ZOIsTextValue != "") {
        $.post(
            'http://zoichannel.php.xdomain.jp/mail.php',
            `to=${to}&subject=${subject}&message=${message}&headers=${headers}`
        )
            .done(function (data) {
                Notification.innerHTML = `
                <div class="alert alert-success" role="alert">
                    <strong>いいね!</strong> 送信が完了しました。
                </div>
                `
            })
    } else {
        event.preventDefault();

        Notification.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <strong>おや!</strong> 入力していない欄があるようです。
        </div>
        `
    }
}