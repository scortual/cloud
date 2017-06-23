/*
var _loc = location.href;

console.log("location = ",location);

if (_loc.indexOf("javascript") != -1) {
   _loc = encodeURIComponent(location.search);
   console.log("encode js");
}





console.log("_loc = ",_loc);

changeUrl("Scortual", _loc)

function changeUrl(title, url) {
    if (typeof(history.pushState) != "undefined") {
        var obj = {
            Title: title,
            Url: url
        };
        history.pushState(obj, obj.Title, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}
*/