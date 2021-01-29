var i = 0;
var colors = ["red", "orange", "green"];
function click1() {
    var body = document.getElementsByTagName("body")[0];
    i < 3 ? i++ : i = 0;
    body.style.backgroundColor = colors[i];
}