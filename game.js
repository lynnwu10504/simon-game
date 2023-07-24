buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = [];

function nextSequence() {
    var randomNumber = Math.round(Math.random() * 3);
    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence()];
gamePattern.push(randomChosenColour);

$("#randomChosenColour").fadeOut(100).fadeIn(100);

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'sounds/green.mp3');
$('#randomChosenColour').click(function() {
    audioElement.play();
    });