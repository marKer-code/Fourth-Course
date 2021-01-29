function Add() {
    var name_ = document.getElementById("Name");
    var surname_ = document.getElementById("Surname");
    var calendar_ = document.getElementById("calend");
    var f_ = document.getElementById("f");
    var m_ = document.getElementById("m");
    var phone_ = document.getElementById("Phone");

    var n = document.getElementById("n");
    var s = document.getElementById("s");
    var g = document.getElementById("g");
    var c = document.getElementById("c");
    var p = document.getElementById("p");

    n.innerText ="";
    s.innerText ="";
    g.innerText ="";

    var error = false;

    if (name_ == null || name_.value.length == 0) {
        n.innerText = "Empty name";
        error = true;
    }
    else if (name_.value.search("^[a-zA-Z]+$") == -1) {
        n.innerText = "Wrong symbol";
        error = true;
    }
    else n.innerText = "";

    if (surname_ == null || surname_.value.length == 0) {
        s.innerText = "Empty surname";
        error = true;
    }
    else if (surname_.value.search("^[a-zA-Z]+$") == -1) {
        s.innerText = "Wrong symbol";
        error = true;
    }
    else s.innerText = "";

    if (calendar_ == null || calendar_.value.length == 0) {
        c.innerText = "Empty date";
        error = true;
    }
    else c.innerText="";

    if (!f_.checked && !m_.checked) {
        g.innerText = "Unselected gender";
        error = true;
    }
    else g.innerText = "";

    if (phone_ == null || phone_.value.length == 0) {
        p.innerText = "Empty phone number";
        error = true;
    }
    else if (phone_.value.search("^[0-9]+$") == -1) {
        p.innerText = "Wrong symbol";
        error = true;
    }
    else p.innerText="";

    error == false ? alert("Forwarding") : alert("Correct the mistakes");
}