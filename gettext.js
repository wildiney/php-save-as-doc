//javascript
(function() {
    //Fields
    var url     = window.location.href;
    var path    = url.split("/");
    var host    = path[2];

    if(host=="172.22.205.23:9000"){
        var title   = document.getElementsByClassName("page-header container")[0].innerHTML;
        var intro   = document.getElementsByClassName("field field-name-field-entradilla field-type-text-long field-label-hidden")[0].innerHTML;
        var content = document.getElementsByClassName("field field-name-body field-type-text-with-summary field-label-hidden")[0].innerHTML;

        var form = document.createElement("form");
            form.setAttribute("method", "post");
            form.setAttribute("action","http://indra.slicedpixel.com/saveas/converttodoc.php");
            document.body.appendChild(form);
        
        var urlField = document.createElement("input");
            urlField.setAttribute("type", "hidden");
            urlField.setAttribute("name", "url");
            urlField.setAttribute("value", url);
            form.appendChild(urlField);

        var titleField = document.createElement("input");
            titleField.setAttribute("type", "hidden");
            titleField.setAttribute("name", "title");
            titleField.setAttribute("value", title);
            form.appendChild(titleField);

        var introField = document.createElement("input");
            introField.setAttribute("type", "hidden");
            introField.setAttribute("name", "intro");
            introField.setAttribute("value", intro);
            form.appendChild(introField);

        var contentField = document.createElement("input");
            contentField.setAttribute("type", "hidden");
            contentField.setAttribute("name", "content");
            contentField.setAttribute("value", content);
            form.appendChild(contentField);

            form.submit();
    } else if (host=="www.indracompany.com"){
        admMode = confirm("Deseja tentar o modo administrativo?");
        if(admMode){
            path[0] = "http:/";
            path[2] = "172.22.205.23:9000";
            for (var i=0; i< path.length; i++){
                urlRedir = path.join("/");
            }
            window.location.href = urlRedir;
        }
    } else {
        alert("Este site não é compatível com as funções desta ferramenta.")
    }
})();