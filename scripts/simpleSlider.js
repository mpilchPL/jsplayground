
var path = "img/slides/";
var slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];
var fadeTime = 500;     // amount of miliseconds that fade effect takes
var visibleTime = 7000;  // amount od miliseconds for each slide will be visible
var slide = 0;          // holds current slide id, used in slides[]
var timerHandle;        // for resetting setTimeout fun

function changeSlide(forward = true) {

    // order of slides logic, forward is false only when user 
    // clicked "previous" button
    if (forward) {slide++;}
    else {slide--;}

        
    if (slide > (slides.length - 1)) slide = 0; // jumping from last slide to 1st
    if (slide < 0) slide = slides.length - 1;   // and from 1st to last if going backwards

    // TODO tide this up.  html tag for image  
    var image = "<img src=\"" +  path + slides[slide] + 
    ".png\" class=\"img-fluid\" alt=\"default\">";

    // after completion of fading out previous slide
    // the next is placed in tags and faded in
    $("#slider1").fadeOut(fadeTime, function() {
        $("#slider1").html(image);
        $("#slider1").fadeIn(fadeTime);
    });
    

    timerHandle = window.setTimeout("changeSlide()", visibleTime);
}

$("#previousSlide").click(function (e) { 
    window.clearTimeout(timerHandle);
    changeSlide(false);
});


$("#nextSlide").click(function (e) { 
    window.clearTimeout(timerHandle);
    changeSlide(true);
});



