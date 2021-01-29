var l;
onload = function () {
    fetch('http://hangman-api.herokuapp.com/hangman', {
        method: "POST"
    })
        .then(response => response.json())
        .then(json => {
            localStorage.setItem("token", json.token);
            l = json.hangman;
            document.getElementById("res").innerText = l
        })
        .catch(err => console.log(err));
}
var count = 1;
function check(elem) {
    var token = localStorage.getItem("token");
    var letter = elem.value;
    elem.style.visibility = "hidden";
    fetch('http://hangman-api.herokuapp.com/hangman?token=' + token + "&letter=" + letter, {
        method: "PUT"
    })
        .then(response => response.json())
        .then(json => {
            var word = document.getElementById("res").innerText;
            var result = "";
            if (json.correct) {
                for (var i = 0; i < json.hangman.length; i++)
                    if (json.hangman[i] != "_" && word[i] == "_")
                        result += json.hangman[i];
                    else result += word[i];
                document.getElementById("res").innerText = result;
                if (result.search('_') == -1) alert("U won! ;)");
            }
            else {
                count++;
                document.getElementsByTagName("img")[0].src = "Media/" + count + ".png";
                if (count == 8){
                    alert("U lose! ;(");
                    count--;
                } 
            }
        })
        .catch(error => console.log(error));

}
function Q(elem){
    elem.style.visibility = "visible";
}
