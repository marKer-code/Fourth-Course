function click1(elem) {
    var text = document.getElementById("in1").value;
    document.getElementById("out1").value = text;
    document.getElementById("out1").style.fontFamily = elem.getElementsByTagName("p")[0].innerText
}
function click2(elem) {
    document.getElementById("out1").style.color = elem.getElementsByTagName("p")[0].innerText;
}