function click1(elem) {
    for (var i = 0; i < document.getElementsByClassName("q").length; i++)
        document.getElementsByClassName("q")[i].style.visibility = "hidden";
    switch (elem.id) {
        case 'w':
            document.getElementById("e").style.visibility = "visible";
            break;
        case 'r':
            document.getElementById("t").style.visibility = "visible";
            break;
        case 'y':
            document.getElementById("u").style.visibility = "visible";
            break;
        case 'i':
            document.getElementById("o").style.visibility = "visible";
            break;
    }
}