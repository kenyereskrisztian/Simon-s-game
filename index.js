var start = false;
var acceptingInput = false;
var chain = [];
var userChain = [];
var sounds = ["green.mp3", "red.mp3", "yellow.mp3", "blue.mp3"];

function playButton(color) {
    var button = $("#" + color);
    button.css({opacity: 0.5});
    setTimeout(function() {
        button.css({opacity: 1});
    }, 300);
    new Audio(`sounds/${color}.mp3`).play();
}

function playSequence() {
    acceptingInput = false;
    chain.forEach(function(color, index) {
        setTimeout(function() {
            playButton(color);
        }, index * 600);
    });
    setTimeout(function() {
        acceptingInput = true;
    }, chain.length * 600);
}

function addNextColor() {
    var randomNumber = Math.floor(Math.random() * sounds.length);
    chain.push(sounds[randomNumber].replace(".mp3", ""));
    playSequence();
}

function gameOver() {
    new Audio("sounds/wrong.mp3").play();
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 200);
    start = false;
    acceptingInput = false;
    chain = [];
    userChain = [];
}

$("body").keydown(function() {
    if (!start) {
        start = true;
        userChain = [];
        chain = [];
        $("#level-title").text("Level 1");
        addNextColor();
    }
});

$(".btn").click(function(e) {
    if (!start || !acceptingInput) {
        return;
    }

    var color = e.currentTarget.id;
    userChain.push(color);
    playButton(color);

    var position = userChain.length - 1;
    if (userChain[position] !== chain[position]) {
        gameOver();
        return;
    }

    if (userChain.length === chain.length) {
        acceptingInput = false;
        userChain = [];
        $("#level-title").text("Level " + (chain.length + 1));
        setTimeout(addNextColor, 800);
    }
});