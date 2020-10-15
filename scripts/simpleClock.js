
function updateTime() {
    var date = new Date();

    // getting calendar date
    var day = date.getDate();
    if (day < 10) { day = "0" + day; }
    
    var month = date.getMonth() + 1;  // months from 0 to 11
    if (month < 10) { month = "0" + month; }
    
    var year = date.getFullYear();
    
    // getting hour
    var hour = date.getHours();
    
    var minutes = date.getMinutes();
    if (minutes < 10) { minutes = "0" + minutes; }
    var seconds = date.getSeconds();
    if (seconds < 10) { seconds = "0" + seconds; }
    
    
    var dateSeparator = ".";
    var timeSeparator = ":";
    document.getElementById("simpleClock").innerHTML = 
    day + dateSeparator + month + dateSeparator + year +
    " | " + hour + timeSeparator + minutes + timeSeparator + seconds;

    setTimeout("updateTime()", 1000);
}


