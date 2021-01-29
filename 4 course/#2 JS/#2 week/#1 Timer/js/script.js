var modal = document.getElementById("myModal");

function open1() {
    modal.style.display = "block";
}

function close1() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var color = 1;
function next() {
    switch (color) {
        case 1: {
            color++;
            document.getElementById("red").style.backgroundColor = 'gainsboro';
            document.getElementById("yellow").style.backgroundColor = 'yellow';
            break;
        }
        case 2: {
            color++;
            document.getElementById("yellow").style.backgroundColor = 'gainsboro';
            document.getElementById("green").style.backgroundColor = 'green';
            break;
        }
        case 3: {
            color = 1;
            document.getElementById("green").style.backgroundColor = 'gainsboro';
            document.getElementById("red").style.backgroundColor = 'red';
            break;
        }
    }
}

function cl2(elem) {
    document.getElementById("f").style.backgroundColor = 'white';
    document.getElementById("s").style.backgroundColor = 'white';
    document.getElementById("t").style.backgroundColor = 'white';
    document.getElementById("q").style.backgroundColor = 'white';
    elem.style.backgroundColor = "yellow";
}