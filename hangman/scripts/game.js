const selectorID = {
    img: "#image",
    get imageDiv() { return this.img; },
    word: "#wordBar",
    get wordBarID() { return this.word; },
    startStopBtn: "#startBtn",
    get startBtnId() { return this.startStopBtn; },
    langBtn: "#langBtn",
    get langBtnId() { return this.langBtn; }
}

var polishLetters = true;
var wordsArrayPolish = new Array("jabłko", "lodówka", "energia");
var wordsArrayEnglish = new Array("apple", "fridge");
var defaultWord = "Click \'start\' to draw word";
var currentWord = "";
var currentWord_ENCRYPTED = "";
var encryptionSign = "_";
var gameRunning = false;
var currentImage = {
    prefix: "w",
    i: 0,
    fullName: "w0",
    get index() { return this.i; },
    get name() { return this.fullName},
    set index(newIndex) { 
        this.i = newIndex;
        this.fullName = this.prefix + newIndex;
        changeImage(this.fullName);
    }
};

$(document).ready(function () {
    changeImage(currentImage.name);
});

    // LETTERS BUTTONS 
$(".letterButton").click(function (e) { 
    if ($(this).hasClass('miss')) return;
    if ($(this).hasClass('bingo')) return;
    if (!gameRunning) return;

    if (letterExist($(this).html())) {
        // PLAYER PICKED CORRECT LETTER
        $(this).addClass('bingo');
        updateWord(currentWord.getCharsIndexes($(this).html()));
        if (isWordRevealed ($(selectorID.wordBarID).html())) { gameOver("win") } 
    } else {
        // PLAYER PICKED WRONG LETTER
        $(this).addClass('miss');
        currentImage.index++;
        if (currentImage.index >= 6) { gameOver("lose") } 
    }
});





    // LANGUAGE CHANGING BUTTON
$(selectorID.langBtnId).click(function (e) {
    if(gameRunning) return;
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
$(selectorID.startBtnId).click(function (e) {
    cleanLetterTileColours();
    gameRunning = !gameRunning;

    if (!gameRunning) {                             // game was just stopped
        stopGame();
        return;
    }
    else $(selectorID.startBtnId).html("Stop");                // game just started
    currentImage.index = 0;
    $(selectorID.langBtnId).addClass('disabled');
    if (polishLetters) { currentWord = wordsArrayPolish.getRandom(); } // DRAW RANDOM WORD FROM ARRAY
    else { currentWord = wordsArrayEnglish.getRandom(); }

    currentWord_ENCRYPTED = encrypt(currentWord);
    $(selectorID.wordBarID).html(currentWord_ENCRYPTED);   // DISPLAY ENCRYPTED WORD 
});



var cleanLetterTileColours = () => {        // removes any miss & bingo classes in letter tiles
    $(".letterButton").removeClass('bingo');
    $(".letterButton").removeClass('miss');
}

var changeFlag = (nation) => $("#flagIcon").attr("src", "img/flags/" + nation);

var letterExist = (letter) => {     //RETURNS TRUE WHEN GIVEN LETTER EXIST IN CURRNET WORD
    if (currentWord.length > 0) {
        var chars = currentWord.getCharsIndexes(letter);
        return (chars.length > 0) ? true : false;
    }
}

var changeImage = img => $(selectorID.imageDiv).html("<img src=\"img/" + img + ".png\" alt=\"\">");

var isWordRevealed = (word) => word.includes(encryptionSign) ? false : true;   // RETURNS TRUE WHEN GIVEN WORD DOESNT CONTAIN encryptionSign

var gameOver = (wl) => {
    if (wl == "win") {      //PLAYER WON
        $('audio#cheers')[0].play();
        cleanLetterTileColours();
        $(selectorID.wordBarID).html("CONGRATULATIONS. YOU WON");
        stopGame();
    } else {                //PLAYER LOST
        $('audio#boo')[0].play()
        cleanLetterTileColours();
        $(selectorID.wordBarID).html("GAME OVER. YOU LOST");
        stopGame();
    }
}

 var updateWord = (arr) => {            // REVEALS LETTERS IN ENCYPTED WORD ON GIVEN POSITIONS (ARG - ARRAY OF INDEXES)
    if (currentWord.length < 1) { 
        console.error("currentWord length < 1");
        return;
    }
    var encryptedWord = $(selectorID.wordBarID).html();
    for (i = 0; i < arr.length; i++) {
        encryptedWord = encryptedWord.replaceAt(arr[i], currentWord.charAt(arr[i]));
    }
    $(selectorID.wordBarID).html(encryptedWord);
 }

 var encrypt = (word) => {              // RETURNS CHAIN OF ENCRYPTION SIGNS OF LENGTH OF THE GIVEN WORD
    var encWord = "";
    for (i = 0; i < word.length; i++) {
        encWord += encryptionSign;
    }
    return encWord;
 }

 var stopGame = () => {
    $(selectorID.startBtnId).html("Sart");   
    $(selectorID.langBtnId).removeClass('disabled');
    gameRunning = false;
 }