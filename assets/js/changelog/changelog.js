$(function () {
    $.getJSON("/assets/json/ChangeLog/changelog.json", function (changelog_json) {
        for (var i in changelog_json) {
            console.log(i);
            console.log(Object.keys(changelog_json).length);
            var changelog_html = `
            <li class="log">
                <div class="log_date align-self-center">${changelog_json[Object.keys(changelog_json).length - i - 1].date}</div>
                <div class="log_text">${changelog_json[Object.keys(changelog_json).length - i - 1].content}</div>
            </li>
            `
            $("#changelog").append(changelog_html);
        }
    });
});
