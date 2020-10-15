function writeNumbersInRange() {
    // get range

    var fromNumber = document.getElementById("fromNumber").value;
    var toNumber = document.getElementById("toNumber").value;


    var result = "";

    if (Number(fromNumber) <= Number(toNumber)) {
        for (i = fromNumber; Number(i) <= Number(toNumber); i++) {
            result += i + " ";
        }
    } else {
        for (i = fromNumber; Number(i) >= Number(toNumber); i--) {
            result += i + " ";
        }
    }
    
    

    document.getElementById("writeNumbersInRangeResult").innerHTML = result;
}

function clearWriteNumbersInRange() {
    document.getElementById("writeNumbersInRangeResult").innerHTML = "";
    
}