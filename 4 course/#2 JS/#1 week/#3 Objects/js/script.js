var car = {
    manufacturer: "Ford",
    model: 354,
    year: 2012,
    averageSpeed: 140
};
f(car);
function f(car) {
    for (let key in car)
        alert(key + " > " + car[key]);
}
q(car.averageSpeed, 5000);
function q(speed, dist) {
    var res = dist / speed;
    res += Math.round(res / 4);
    alert(Math.round(res));
}

var fr1 = {
    numerator: 5,
    denominator: 2
};
var fr2 = {
    numerator: 4,
    denominator: 7
};
w(fr1, fr2);
function w() {
    Addition();

    Remainder();

    Product(fr2, false);

    var newFr2 = {
        numerator: fr2.denominator,
        denominator: fr2.numerator
    };
    var res = Product(newFr2, true);
    alert(fr1.numerator + "/" + fr1.denominator + " / " +
            fr2.numerator + "/" + fr2.denominator + " = "
            + res.numerator + "/" + res.denominator);

}
function Addition() {
    if (fr1.denominator == fr2.denominator)
        var res = {
            numerator: fraction.numerator + fraction.numerator,
            denominator: fraction.denominator
        };
    else {
        var t = fr1.denominator * fr2.denominator;
        var res = {
            numerator: fr1.numerator * (t / fr1.denominator) +
                fr2.numerator * (t / fr2.denominator),
            denominator: t
        };
    }
    alert(fr1.numerator + "/" + fr1.denominator + " + " +
        fr2.numerator + "/" + fr2.denominator + " = "
        + res.numerator + "/" + res.denominator);
}
function Remainder() {
    if (fr1.denominator == fr2.denominator)
        var res = {
            numerator: fr1.numerator - fr2.numerator,
            denominator: fr1.denominator
        };
    else {
        var t = fr1.denominator * fr2.denominator;
        var res = {
            numerator: fr1.numerator * (t / fr1.denominator) -
                fr2.numerator * (t / fr2.denominator),
            denominator: t
        };
    }
    alert(fr1.numerator + "/" + fr1.denominator + " - " +
        fr2.numerator + "/" + fr2.denominator + " = "
        + res.numerator + "/" + res.denominator);
}
function Product(fr_2, res_) {
    var res = {
        numerator: fr1.numerator * fr_2.numerator,
        denominator: fr1.denominator * fr_2.denominator
    };
    if (!res_)
        alert(fr1.numerator + "/" + fr1.denominator + " * " +
            fr2.numerator + "/" + fr2.denominator + " = "
            + res.numerator + "/" + res.denominator);
    else return res;
}