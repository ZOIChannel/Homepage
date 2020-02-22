function ContactMeSubmit() {
    console.log(`コメント(zoizoi.net, "${document.getElementById("ZOIsNameInput").value}"より)`);
    Email.send({
        Host: "smtp.gmail.com",
        Username: "zoichannel",
        Password: "tori2box",
        To: "zoi@zoizoi.net",
        From: "user@zoizoi.net",
        Subject: `コメント(zoizoi.net, "${document.getElementById("ZOIsNameInput").value}"より)`,
        Body: `${document.getElementById("ZOIsTextValue").value}\n----ここまで----\n返信先:${document.getElementById("ZOIsEmailInput").value}`
    }).then(
        message => alert(message)
    );
    console.log("Okay")
}