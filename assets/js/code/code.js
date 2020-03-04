
function file_load(path) {

    fetch(path).then(r => { return r.text() }).then(t => {
        // "t"にimport.jsのファイル内容が格納されているので
        // eval(t); //その内容を実行する
        console.log(t);
        return t;
    });

    /*
    $(function () {
        $.ajax({
            url: path,
            type: 'POST'
        })
            // Ajaxリクエストが成功した時発動
            .done((data) => {
                console.log("done");
                console.log(data)
                return data;
            })
            // Ajaxリクエストが失敗した時発動
            .fail((data) => {
                console.log("fail");
            })
            // Ajaxリクエストが成功・失敗どちらでも発動
            .always((data) => {
                console.log("finish ajax")
            });
    });
    */

}



function html_formatter(code) {
    code = code.replace(/</g, '_lt');
    code = code.replace(/>/g, '_gt');
    code = code.replace(/"/g, '_quot');
    code = code.replace(/  /g, '');

    code = code.replace(/\r?\n/g, '');
    code = code.replace(/ /g, '_nbsp');

    return code
}

function code_html(id) {
    // var HTML = document.getElementById(id).innerHTML;
    var code = "";
    console.log(code);
    // code = file_load(path);
    code = document.getElementById(id).innerHTML;
    console.log(code);
    code = html_formatter(code);
    console.log(code);

    code = code.replace(/_lt\//g, '</span><span class="code-gray">&lt;/</span><span class="code-blue"><!--1-->');
    console.log(code);
    code = code.replace(/_lt/g, '</span><span class="code-gray">&lt;</span><span class="code-blue"><!--2-->');
    console.log(code);
    code = code.replace(/_gt/g, '</span><span class="code-gray">&gt;</span><span><!--3-->');
    console.log(code);
    code = code.replace(/=_quot/g, '</span>=<span class="code-orange">&quot;<!--4-->');
    console.log(code);
    code = code.replace(/_nbsp/g, '&nbsp;<span class="code-water"><!--5-->');
    console.log(code);
    code = code.replace(/=_quot/g, '</span><span>=</span><span class="code-orange">&quot;');
    code = code.replace(/_quot/g, '&quot;</span>');

    code = code.replace(/_br/g, '</span><br><span class="line">');
    code = code.replace(/_tab/g, '&nbsp;&nbsp;');
    code = '<span class="line"><span>' + code + '</span></span>';
    console.log(code);

    // document.getElementById(id).innerHTML = code;
    // $(id).html(code); // end
    document.getElementById(id).innerHTML = code;
    console.log(code);


}
function code_css(id, path) { }
function code_js(id, path) { }