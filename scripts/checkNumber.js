function checkNumber() {

    var number = document.getElementById("numberField").value;

    if (isNaN(number) || number.length < 1) {
        document.getElementById("checkNumberValue").innerHTML = "NaN";
        return;
    }
    var eqSign = "=";
    if (number > 0) { eqSign = ">"; }
    else if (number < 0) { eqSign = "<"; }
    document.getElementById("checkNumberValue").innerHTML = number + " " + eqSign + " 0";
    
    
}