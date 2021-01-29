function add() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var tb = document.getElementsByTagName("table")[0];
    if (tb.style.display != "table")
        tb.style.display = "table";
    tb.innerHTML += `<tr>
<td><input type = "checkbox" class = "check"/></td>
<td>${name}</td>
<td>${age}</td>
<td>${email}</td>
</tr>`;

    name = "";
    age = "";
    email = "";
}

function removeAll() {
    var rows = document.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
        rows[i].remove();
        i = 0;
    }
    var tbl = document.getElementsByTagName("table")[0];
    tbl.style.display = "none";
}

function selectAll() {
    var checkboxes = document.getElementsByClassName("check");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
}

function remove() {
    var rows = document.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var checkrows = document.getElementsByClassName("check")[0];
        if (checkrows.checked){
            rows[i].remove();
            i = 0;
        }
    }
}