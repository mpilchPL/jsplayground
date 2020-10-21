var polishLetters = true;
var wordsArrayPolish = new Array("jabłko", "lodówka", "energia");
var wordsArrayEnglish = new Array("apple", "fridge");
var defaultWord = "Click start to draw word";
var currentWord = "";
var gameRunning = false;


$(".letterButton").click(function (e) { 
    if ($(this).hasClass('miss')) return;
    if ($(this).hasClass('bingo')) return;
    if (!gameRunning) return;

    if (letterExist($(this).html())) {
        $(this).addClass('bingo');
        
    } else {
        $(this).addClass('miss');
    }
    
    
});


    // LANGUAGE CHANGING BUTTON
$("#langBtn").click(function (e) {
    cleanLetterTileColours();

    if (polishLetters) {
        $(".polish").hide();
        changeFlag("greatbritain.png");
    }
    else {
       $(".polish").show(); 
       changeFlag("poland.png");
    } 
    polishLetters = !polishLetters;
});


    // START / STOP BUTTON
$("#startBtn").click(function (e) {
    cleanLetterTileColours();
    gameRunning = !gameRunning;

    if (!gameRunning) {                             // game was just stopped
        $("#startBtn").html("Sart");   
        $("#wordBar").html(defaultWord);
        return;
    }

    else $("#startBtn").html("Stop");                // game just started
    
    $("#langBtn").addClass('disabled');
    if (polishLetters) {
        currentWord = wordsArrayPolish.getRandom();
    }
        
    else {
        currentWord = wordsArrayEnglish.getRandom();
    }
    $("#wordBar").html(currentWord);
        
});


function cleanLetterTileColours() { 
    // removes any miss & bingo classes in letter tiles
    $(".letterButton").removeClass('bingo');
    $(".letterButton").removeClass('miss');
}

function changeFlag (nation) { 
    $("#flagIcon").attr("src", "img/flags/" + nation);
}

function letterExist(letter) {
    if (currentWord.length > 0) {
        var chars = currentWord.getCharsIndexes(letter);
        return (chars.length > 0) ? true : false;
    }
}