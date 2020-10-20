var polishLetters = true;
var wordsArrayPolish = new Array("jabłko", "lodówka");
var wordsArrayEnglish = new Array("apple", "fridge");
var defaultWord = "Click start to draw word";
var currentWord = "";
var gameRunning = false;
//var currentGame = new Game();


$(".letterButton").click(function (e) { 
    if ($(this).hasClass('miss')) return;
    if ($(this).hasClass('bingo')) return;
    if (!gameRunning) return;


    $(this).toggleClass('miss');
    
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
        
    

    if (polishLetters)
        $("#wordBar").html(wordsArrayPolish.getRandom());
    else
        $("#wordBar").html(wordsArrayEnglish.getRandom());
});


function cleanLetterTileColours() { 
    // removes any miss & bingo classes in letter tiles
    $(".letterButton").removeClass('bingo');
    $(".letterButton").removeClass('miss');
 }

 function changeFlag (nation) { 
    $("#flagIcon").attr("src", "img/flags/" + nation);
  }

 class Game {

    constructor () {

    }
 }