export default function searchTableHTML(inputx, tablexx) {
    console.error(input);
    console.error(tablexx);
    var input, filter, found, table, tr, td, i, j;
    //input = document.getElementById("myInput");
    input = inputx;
    filter = input.toUpperCase();
    table = document.getElementById(tablexx);
    for (i = 0; i < tr.length; i++) {
        tr = table.getElementsByTagName("tr");
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
};