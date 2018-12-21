$(document).ready(function () {

    $("#container").hide();
    $("#startButton").show();
    $("#results").hide();

    // clock ======================================================

    var seconds = 30;
    var intervalId;

    function runTime() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        seconds--;
        $("#clock").text(seconds + " seconds left");
        if (seconds === 0) {

            stop();
            $("#container").hide();
            $("#submit-button").hide();
            submit();
            $("#clock").hide();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    // start ======================================================

    $("#startButton").on("click", function () {
        $("#startButton").hide();
        $("#container").show();
        answers();
        runTime();
    })

    // Trivia ======================================================

    var correct = 0;

    function answers() {

        var q1 = document.forms["questions"]["q1"].value;
        var q2 = document.forms["questions"]["q2"].value;
        var q3 = document.forms["questions"]["q3"].value;
        var q4 = document.forms["questions"]["q4"].value;
        var q5 = document.forms["questions"]["q5"].value;

        var answers = ["c", "d", "a", "b", "c"]

        if (q1 == answers[0]) {
            correct++;
        }
        if (q2 == answers[1]) {
            correct++;
        }
        if ( q3 == answers[2]){
        correct++;
        }
        if ( q4 == answers[3]){
        correct++;
        }
        if ( q5 == answers[4]){
        correct++;
        }
    }

    //  ======================================================

    $("#submit-button").on("click", submit);

    function submit() {
        $("#container").hide();
        $("#submit-button").hide();
        $("#results").show();
        answers();
        results();
        stop();
    }

    // ======================================================

    function results() {
        $("#results").append("You answered correctly " + correct + " questions out of 5.");

    }
    // ======================================================

    $("#resetButton").on("click", function () {
        location.reload();
    })

    // ======================================================
});