var fNum = 0, sNum = 0;
fNum = parseInt(prompt("Enter first number"));
sNum = parseInt(prompt("Enter second number"));
first(fNum, sNum);
function first(fNum, sNum) {
    if (fNum < sNum)
        alert("-1");
    else if (fNum > sNum)
        alert("1");
    else
        alert("0");
}

fNum = 0;
fNum = parseInt(prompt("Enter number"));
var factorial = 1;
second(fNum);
function second(fNum) {
    for (var i = 1; i <= fNum; i++)
        factorial *= i; 5
    alert(factorial);
}

var fNum = 0, sNum = 0, tNum = 0;
fNum = prompt("Enter first number");
sNum = prompt("Enter second number");
tNum = prompt("Enter third number");
var res = "";
third(fNum, sNum, tNum);
function third(fNum) {
    res += fNum;
    res += sNum;
    res += tNum;
    alert(res);
}

var a = 0, b = 0;
a = parseInt(prompt("Enter first side"));
b = parseInt(prompt("Enter second side"));
fourth(a, b);
function fourth(a, b) {
    if (b == null)
        alert(a * a);
    else if (a == null)
        alert(b * b);
    else
        alert(a * b);
}

fNum = 0;
fNum = parseInt(prompt("Enter number"));
fifth(fNum);
function fifth(fNum) {
    if (fNum <= 1)
        alert("false");
    else {
        res = 0;
        for (var i = 1; i < fNum; i++)
            if (fNum % 1 == 0)
                res += i;
        if (res == fNum)
            alert("true");
        else
            alert("false");
    }
}

fNum = 0;
sNum = 0;
res = 0;
fNum = parseInt(prompt("Enter min"));
sNum = parseInt(prompt("Enter max"));
sixth(fNum, sNum);
function sixth(fNum, sNum) {
    for (var i = fNum; i < sNum; i++) {
        for (var j = 1; j < i; j++)
            if (i % j == 0)
                res += j;
        if (res == i)
            alert(i);
        res = 0;
    }
}

fNum = 0;
sNum = 0;
tNum = 0;
fNum = parseInt(prompt("Enter hour"));
sNum = parseInt(prompt("Enter minutes"));
tNum = parseInt(prompt("Enter seconds"));
res = "";
seventh(fNum, sNum, tNum);
function seventh(h, m, s) {
    var o;
    if (s >= 60) {
        o = s / 60;
        s = s % 60;
        String.valueOf(o)[length - 2] >= 5 ?
            m += Math.round(o) - 1 :
            m += Math.round(o);
    }
    if (m >= 60) {
        o = m / 60;
        m = m % 60;
        String.valueOf(o)[length - 2] >= 5 ?
            h += Math.round(o) - 1 :
            h += Math.round(o);
    }
    alert(h + ":" + m + ":" + s);
}