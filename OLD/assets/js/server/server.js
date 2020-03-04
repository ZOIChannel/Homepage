/*
var serverIp = "mc.hypixel.net";
var serverNumber = "1";
var result1 = null;
var result2 = null;
var result3 = null;
var resultImg = null;
*/


$(function () {
    ServerMain("mc.hypixel.net", "1");
    ServerMain("pvp.land", "2");
    ServerMain("ghostly.live", "3");
});




function ServerMain(serverIp, serverNumber) {
    var result1 = document.getElementById("server_line_" + serverNumber + "-1");
    var result2 = document.getElementById("server_line_" + serverNumber + "-2");
    var result3 = document.getElementById("server_line_" + serverNumber + "-3");
    var resultImg = document.getElementById("server_favicon_" + serverNumber);
    $.getJSON(
        "https://api.minetools.eu/ping/" + serverIp,
        null,
        function (data, status) {
            if (data.description) {
                console.log("yes");
                var description = data.description.split('§');
                var LENGTH = description.length;
                for (var i = 0; i < LENGTH; i++) {
                    if (description[i].slice(0, 1) == "0") {
                        description[i] = "<span style='color:#000000;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "1") {
                        description[i] = "<span style='color:#0000AA;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "2") {
                        description[i] = "<span style='color:#00AA00;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "3") {
                        description[i] = "<span style='color:#00AAAA;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "4") {
                        description[i] = "<span style='color:#AA0000;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "5") {
                        description[i] = "<span style='color:#AA00AA;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "6") {
                        description[i] = "<span style='color:#FFAA00;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "7") {
                        description[i] = "<span style='color:#AAAAAA;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "8") {
                        description[i] = "<span style='color:#555555;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "9") {
                        description[i] = "<span style='color:#5555FF;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "a") {
                        description[i] = "<span style='color:#55FF55;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "b") {
                        description[i] = "<span style='color:#55FFFF;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "c") {
                        description[i] = "<span style='color:#FF5555;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "d") {
                        description[i] = "<span style='color:#FF55FF;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "e") {
                        description[i] = "<span style='color:#FFFF55;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "f") {
                        description[i] = "<span style='color:#FFFFFF;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "l") {
                        description[i] = "<span style='font-weight:bolder;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "m") {
                        description[i] = "<span style='text-decoration: line-through;>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "n") {
                        description[i] = "<span style='text-decoration: underline;>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "o") {
                        description[i] = "<span style='font-style: italic;'>" + description[i].slice(1);
                    } else if (description[i].slice(0, 1) == "r") {
                        description[i] = "<span style='color:#aaaaaa; font-style: none;'>" + description[i].slice(1);
                    }
                }
                console.log("§変換成功!!");
                data.description = description.join("");
                console.log("data.description結合成功!!");
                for (var i = 0; i < LENGTH; i++) {
                    description = description + "</span>";
                }
                console.log("</span>成功!!");
                getPing_1(data, result1);
                getPing_2(data, result2);
                getPing_3(data, result3);
                getPing_img(data, resultImg, serverIp, serverNumber);
            } else {
                getPing_1(data, result1);
                getPing_2(data, result2);
                getPing_3(data, result3);
                getPing_img(data, resultImg, serverIp, serverNumber);
            }
        }
    )
}



function getPing_1(data, result1) {
    var line1 = "";
    if (data.error == null) {
        line1 = data.players.online + "/" + data.players.max;
        if (data.latency < 150) {
            line1 += '<img class="server_radio" src="/assets/img/server/ok_5.png" align="right">'
        } else if (data.latency < 300) {
            line1 += '<img class="server_radio" src="/assets/img/server/ok_4.png" align="right">'
        } else if (data.latency < 450) {
            line1 += '<img class="server_radio" src="/assets/img/server/ok_3.png" align="right">'
        } else if (data.latency < 600) {
            line1 += '<img class="server_radio" src="/assets/img/server/ok_2.png" align="right">'
        } else if (data.latency < 750) {
            line1 += '<img class="server_radio" src="/assets/img/server/ok_1.png" align="right">'
        }
    } else {
        line1 += '<img class="radio" src="/assets/img/server/ng.png" align="right">'
    }
    result1.innerHTML = line1;
}

function getPing_2(data, result2) {
    var line2 = "";
    if (data.error == null) {
        line2 = '<span class="server_line_2_span">' + data.description + '</span>';
    } else {
        line2 = `<span style='color:#AA0000;'>${data.error}</span>`;
    }
    result2.innerHTML = line2;
}

function getPing_3(data, result3) {
    var line3 = "";
    if (data.error == null) {
        line3 = "VERSION : " + data.version.name;
    } else {
        line3 = "<span style='color:#300000;'>!!!ERROR!!!</span>";
    }
    result3.innerHTML = line3;
}

function getPing_img(data, resultImg, serverIp, serverNumber) {
    var lineImg = `<img class="server_favicon_img" id="server_favicon_img_${serverNumber}" src="/assets/img/server/defult.png">`;
    if (data.error == null) {
        lineImg = `<img class="server_favicon_img" id="server_favicon_img_${serverNumber}" src="https://api.minetools.eu/favicon/${serverIp}">`;
    }
    resultImg.innerHTML = lineImg;
}