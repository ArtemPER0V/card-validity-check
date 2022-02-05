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

function input_fixed () {
    string = document.getElementById("input-card-number").value;
    evens = 0;
    odds = 0;
    transformed_string = string.split(sep).join('');
    console.log(transformed_string)
    for(let i = 1; i < transformed_string.length + 1; i++) {
        if(i % 2 == 1) {
            odds += parseInt(transformed_string[i - 1])
        }
        else {
            if(parseInt(transformed_string[i - 1]) * 2 > 9) {
                evens += parseInt(transformed_string[i - 1]) * 2 - 9;
            }
            else {
                evens += parseInt(transformed_string[i - 1]) * 2;
            }
        }
    }

    if((evens + odds) == 0 && parseInt(transformed_string) != 0) {
        document.getElementById("wrapper").classList.remove("background-green");
        document.getElementById("wrapper").classList.remove("background-red");
        document.getElementById("window__help").innerText = "Введите номер карты";
        document.getElementById("window__smiley").innerText = ":|";
        
    }
    else if((evens + odds) % 10 == 0) {
        document.getElementById("wrapper").classList.remove("background-red");
        document.getElementById("wrapper").classList.add("background-green");
        
        document.getElementById("window__help").innerText = "Ваша карта валидная";
        document.getElementById("window__smiley").innerText = ":)";
    }
    else {
        document.getElementById("wrapper").classList.remove("background-green");
        document.getElementById("wrapper").classList.add("background-red");
        document.getElementById("window__help").innerText = "Ваша карта невалидная";
        document.getElementById("window__smiley").innerText = ":o";
    }
}

