$(function () {
    $.getJSON("/assets/json/youtube/Logistics/Logistics.json", function (logistics_json) {
        for (var i in logistics_json) {
            /*
            console.log(i);
            console.log(Object.keys(logistics_json).length);
            */
            var logistics_html = `
            <tr>
                <th scope="row">
                ${parseInt(i) + 1}
                </th>
                <td>
                ${logistics_json[i].name}
                </td>
                <td>
                ${logistics_json[i].version}
                </td>
            </tr>
            `;
            $("#logistics").append(logistics_html);
        }
    });
});
