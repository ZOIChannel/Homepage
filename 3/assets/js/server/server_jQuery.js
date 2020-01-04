const serverIp = "mc.hypixel.net";
const serverNumber = "1";
var result1 = null;
var result2 = null;
var result3 = null;


$(function() {
    result1 = document.getElementById("server_line_" + serverNumber + "-1");
    result2 = document.getElementById("server_line_" + serverNumber + "-2");
    result3 = document.getElementById("server_line_" + serverNumber + "-3");
    $.getJSON(
        "https://api.minetools.eu/ping/" + serverIp,
        null,
        function(data, status) {
            var description = data.description.split('§');
            for (var i = 0; i < description.length; i++) {
                if (description[i].slice(0, 1) == "0") {
                    description[i] = "<span style='color:#000000;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "1") {
                    description[i] = "<span style='color:#0000AA;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "2") {
                    description[i] = "<span style='color:#00AA00;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "3") {
                    description[i] = "<span style='color:#00AAAA;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "4") {
                    description[i] = "<span style='color:#AA0000;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "5") {
                    description[i] = "<span style='color:#AA00AA;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "6") {
                    description[i] = "<span style='color:#FFAA00;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "7") {
                    description[i] = "<span style='color:#AAAAAA;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "8") {
                    description[i] = "<span style='color:#555555;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "9") {
                    description[i] = "<span style='color:#5555FF;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "a") {
                    description[i] = "<span style='color:#55FF55;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "b") {
                    description[i] = "<span style='color:#55FFFF;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "c") {
                    description[i] = "<span style='color:#FF5555;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "d") {
                    description[i] = "<span style='color:#FF55FF;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "e") {
                    description[i] = "<span style='color:#FFFF55;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "f") {
                    description[i] = "<span style='color:#FFFFFF;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "l") {
                    description[i] = "<span style='font-weight:bolder;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "m") {
                    description[i] = "<span style='text-decoration: line-through;>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "n") {
                    description[i] = "<span style='text-decoration: underline;>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "o") {
                    description[i] = "<span style='font-style: italic;'>" + description[i].slice(1)
                } else if (description[i].slice(0, 1) == "r") {
                    description[i] = "<span style='color:#aaaaaa; font-style: none;'>" + description[i].slice(1)
                }
            }
            console.log("§変換成功!!");
            for (var i = 0; i < description.length; i++) {
                description.push("</span>")
            }
            console.log("</span>成功!!")
            data.description = description.join("");
            console.log("data.description結合成功!!");
            getPing_1(data);
            getPing_2(data);
            getPing_3(data);
        }
    )
});

function getPing_1(data) {
    var line1 = "";
    if (data.error == null) {
        line1 = data.players.online + "/" + data.players.max;
        if (data.latency < 150) {
            line1 += '<img class="radio" src="/assets/images/server/ok_5.png" align="right">'
        } else if (data.latency < 300) {
            line1 += '<img class="radio" src="/assets/images/server/ok_4.png" align="right">'
        } else if (data.latency < 450) {
            line1 += '<img class="radio" src="/assets/images/server/ok_3.png" align="right">'
        } else if (data.latency < 600) {
            line1 += '<img class="radio" src="/assets/images/server/ok_2.png" align="right">'
        } else if (data.latency < 750) {
            line1 += '<img class="radio" src="/assets/images/server/ok_1.png" align="right">'
        }
    } else {
        line1 += '<img class="radio" src="/assets/images/server/ng.png" align="right">'
    }
    result1.innerHTML = line1;
}

function getPing_2(data) {
    var line2 = "";
    if (data.error == null) {
        line2 = '<span>' + data.description + '</span>';
    } else {
        line2 = data.error;
    }
    result2.innerHTML = line2;
}

function getPing_3(data) {
    var line3 = "";
    if (data.error == null) {
        line3 = "version:" + data.version.name;
    }
    result3.innerHTML = line3;
}