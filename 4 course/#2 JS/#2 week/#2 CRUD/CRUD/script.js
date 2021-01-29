function Add() {
    var tasks = document.getElementsByClassName("tasks")[0];
    if (document.getElementById("text").value.length != 0) {
        tasks.innerHTML += `<p name="a" class="task" onclick="color_(this)" >
        ${document.getElementById("text").value} </p> 
        <p name="a" onclick="Remove(this)" class="close">X</p>`;
        document.getElementById("text").value = "";
    }
}

function Remove(el) {
    var items = document.getElementsByName("a");

    for (var i = 0; i < items.length; i++) {
        if (items[i] == el) {
            items[i].remove();
            items[i - 1].remove();
            break;
        }
    }
}

function color_(el)
{
    if (el.style.color != "red") {
        el.style.color = "red";
        el.style.textDecoration = "underline";
    }
    else{
        el.style.color = "white";
        el.style.textDecoration = "none";
    }
}