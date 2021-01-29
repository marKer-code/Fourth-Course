let imgs = ["../Media/first.jpg",
    "../Media/second.jpg",
    "../Media/third.jpg",
    "../Media/fourth.jpg",
    "../Media/fifth.jpg"];
var i = 0;
function click1() {
    var t = document.getElementById("img1");
    if (i + 1 > imgs.length - 1)
        i = 0;
    else i++;
    t.src = imgs[i];
}
function click2() {
    var t = document.getElementById("img1");
    if (i - 1 < 0)
        i = imgs.length - 1;
    else i--;
    t.src = imgs[i];
}