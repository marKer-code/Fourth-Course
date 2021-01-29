var a;
const year = 2020;
const p = 3.14;
const eur = 0.89;
var res

a = prompt("enter your name");
alert("HI," + a);

a = prompt("enter your birthday");
alert(year - a);
a = prompt("enter side squre");
alert(a * a);

a = prompt("enter your birthday");
alert(year - a);

var age = year - a;
if (age >= 0 && age <= 2)
    alert("child");
else if (age >= 12 && age < 18)
    alert("teen");
else if (age >= 18 && age < 60)
    alert("Adult");
else if (age >= 60)
    alert("retiree");

a = prompt("0-9");
switch (parseInt(a)) {
    case 1: alert("!"); break;
    case 2: alert("@"); break;
    case 3: alert("#"); break;
    case 4: alert("$"); break;
    case 5: alert("%"); break;
    case 6: alert("^"); break;
    case 7: alert("*"); break;
    case 8: alert("("); break;
    case 9: alert(")"); break;
}

a = prompt("enter year");
a % 400 == 0 || a % 4 == 0 && a % 100 != 0 ? alert("true") : alert("false");

a = prompt("enter number");
var b = prompt("enter second number");
