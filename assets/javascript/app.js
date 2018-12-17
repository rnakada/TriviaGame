$(document).ready(function(){
// start button

function startGame() {
    $("#container").hide();
    $("#startButton").show(); 
};

$("#startButton").on("click", function() {
    $("#container").show();
    $("#startButton").hide();
    // $("#scoreRow").hide();
    $("#countDown").text("01:30");
    questionOne();
    reset();
    runTimer();
});

// timer

var time = 10;
var timeHolder;

function runTimer(){
    clearInterval(timeHolder);
    timeHolder = setInterval(clock, 1000);
};

function clock() {
    // console.log("clock");
    time--;

    var currentTime = timeConverter(time);

    $("#countDown").text(currentTime);
    if ( time === 0 ) {
        stop();
        // alert("Times Up!")
        // startGame();
    };
};

function stop() {
    clearInterval(timeHolder);
};

function reset() {
    time = 10;
    $("#countDown").text("00:10");
};

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    // console.log(minutes);
    // console.log(seconds);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0 ) {
        minutes = "00";
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
};

// Trivia Questions

function questionOne() {
    
    var question = "What is the highest pocket pair?";
    console.log(question);
    var answers = ["22", "AA", "JJ", "99"];
    console.log(answers);
    // var correctAnswer = answers[1];
    // console.log(correctAnswer);
    $("#questionRow").text(question);
    $("#choices").text(answers);

    $("#a").text(answers[3]);
    $("#b").text(answers[0]);
    $("#c").text(answers[1]);
    $("#d").text(answers[2]);

    $("#c").on("click", function(){
        alert("Correct");
        $("#wins").text("wins: " + wins++);
        
        questionTwo();
        reset();
        runTimer();
    });
    
    $("#a, #b, #d").on("click", function(){
        alert("wrong");
        $("#losses").text("losses: " + losses++);
        
        questionTwo();
        reset();
        runTimer();
    });
};

function questionTwo() {
    
    var question = "What is the Highest Rank Hand?";
    var answers = ["Flush", "Fullhouse", "Royal Flush", "StraightFlush"];

    $("#questionRow").text(question);
    $("#a").text(answers[2]);
    $("#b").text(answers[3]);
    $("#c").text(answers[0]);
    $("#d").text(answers[1]);

    $("#a").on("click", function(){
        alert("Correct");
        $("#wins").text("wins: " + wins++);
    });
    $("#b, #c, #d").on("click", function(){
        alert("wrong");
        $("#losses").text("losses: " + losses++);
    });
};

// score

var wins = 1;
var losses = 1;

// $("#wins").text("wins: " + wins);
// $("#losses").text("losses: " + losses);

startGame();
});