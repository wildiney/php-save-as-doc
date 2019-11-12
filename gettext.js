//javascript
(function () {
    //Fields
    var url = window.location.href;
    var path = url.split("/");
    var host = path[2];

    var title = document.title;
    // var intro = document.getElementsByClassName("field field-name-body field-type-text-with-summary field-label-hidden")[0].innerHTML;
    var content = document.getElementsByTagName("body").innerHTML;

    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "http://slicedpixel.com/repo/saveas/converttodoc.php");
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

})();