//javascript
(function() {
    //Fields
    var title   = document.getElementsByClassName("page-header container")[0].innerHTML;
    var intro   = document.getElementsByClassName("field field-name-field-entradilla field-type-text-long field-label-hidden")[0].innerHTML;
    var content = document.getElementsByClassName("field field-name-body field-type-text-with-summary field-label-hidden")[0].innerHTML;

    var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action","http://www.wildiney.com/testes/converttodoc.php");
        document.body.appendChild(form);
    
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
})();
