var serverIp = "mc.hypixel.net";
var result1 = null;
var result2 = null;
var result3 = null;

var serverPing = new XMLHttpRequest();
serverPing.open("GET", "https://api.minetools.eu/ping/" + serverIp);
serverPing.onload = function() {
    console.log("responseText:__________" + this.responseText);
    data = JSON.parse(this.responseText);
    console.log("data:__________" + data);
    console.log("XHR送信成功!!");
    data.description = data.description.replace(/§0/g, "");
    data.description = data.description.replace(/§1/g, "");
    data.description = data.description.replace(/§2/g, "");
    data.description = data.description.replace(/§3/g, "");
    data.description = data.description.replace(/§4/g, "");
    data.description = data.description.replace(/§5/g, "");
    data.description = data.description.replace(/§6/g, "");
    data.description = data.description.replace(/§7/g, "");
    data.description = data.description.replace(/§8/g, "");
    data.description = data.description.replace(/§9/g, "");
    data.description = data.description.replace(/§a/g, "");
    data.description = data.description.replace(/§b/g, "");
    data.description = data.description.replace(/§c/g, "");
    data.description = data.description.replace(/§d/g, "");
    data.description = data.description.replace(/§e/g, "");
    data.description = data.description.replace(/§f/g, "");
    data.description = data.description.replace(/§l/g, "");
    console.log("§削除成功!!");
    getPing_1(data);
    getPing_2(data);
    getPing_3(data);
}

serverPing.send(null);

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

window.onload = function() {
    result1 = document.getElementById("server_line_1-1");
    result2 = document.getElementById("server_line_1-2");
    result3 = document.getElementById("server_line_1-3");
}