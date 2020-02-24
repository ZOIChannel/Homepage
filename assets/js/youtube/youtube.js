/*
<li class="log">
    <div class="log_date">2019/07/02</div><a class="log_text" href="https://youtu.be/IVll8MgvzEs">youtubeで世界統一 part1~3 ノーカット</a>
</li>
 */

$(function () {
    $.getJSON("/assets/json/youtube/youtube.json", function (youtube_json) {
        for (var i in youtube_json) {
            /*
            console.log(i);
            console.log(Object.keys(youtube_json).length);
            */
            /*
             var youtube_html = `
             <tr>
                 <th scope="row">
                 ${parseInt(i) + 1}
                 </th>
                 <td>
                 ${youtube_json[i].name}
                 </td>
                 <td>
                 ${youtube_json[i].version}
                 </td>
             </tr>
             `;
             */
            $(".youtube_4D6B28hb6w8").append(youtube_html_4D6B28hb6w8);
        }
    });
});

function Youtube_ID(id) {
    return html_text
}