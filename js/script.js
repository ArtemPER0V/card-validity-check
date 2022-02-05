sep = "-";
function input_changed () {
    string = document.getElementById("input-card-number").value;
    if(string.length == 20 || string.includes(" "))
    {
        document.getElementById("input-card-number").value = string.replace(/.$/, ""); /*Check over length and spaces*/
    }

    if(string.length == 5 || string.length == 10 || string.length == 15) 
    {
        document.getElementById("input-card-number").value = string.replace(/.$/, ""); /*remove sep when it's end string*/
    }

    if(string.length == 4 || string.length == 9 || string.length == 14) 
    {
        string = string + sep;
        document.getElementById("input-card-number").value = string; /*Add sep when we have 4 elements group*/
    }
}
