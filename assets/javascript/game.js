"use strict";
$(document).ready(function() {
    var randomTargetNumber;
    var randomNumberSkull1;
    var randomNumberSkull2;
    var randomNumberSkull3;
    var randomNumberSkull4;
    // var startingScore = 0;
    var totalScore = 0;
    var resetScore = 0;
    var startingWins = 0;
    var startingLosses = 0;
    var wins = 0;
    var losses = 0;

    function reset() {
        randomTargetNumber = Math.floor(Math.random() * (102) + 19);
        randomNumberSkull1 = Math.floor(Math.random() * (11) + 1);
        randomNumberSkull2 = Math.floor(Math.random() * (11) + 1);
        randomNumberSkull3 = Math.floor(Math.random() * (11) + 1);
        randomNumberSkull4 = Math.floor(Math.random() * (11) + 1);
        $("#targetScore").html(randomTargetNumber);
        $("#playerScore").html(resetScore);
        totalScore = 0;

    }

function winOrLose () {
 $("#playerScore").html(totalScore);

        if (totalScore == randomTargetNumber) {
            wins = wins + 1;
            $("#winsBox").html(wins);

            alert("You win!");
            reset();
        } else if (totalScore > randomTargetNumber) {
            losses = losses + 1;
            $("#lossesBox").html(losses);

            alert("You lose!");
            reset();
        }

}
    //There will be four crystals displayed as buttons on the page.


    //The player will be shown a random number at the start of the game.
    $("#randomNumberButton").on("click", function() {
        randomTargetNumber = Math.floor(Math.random() * (102) + 19);
        randomNumberSkull1 = Math.floor(Math.random() * (11) + 1);
        randomNumberSkull2 = Math.floor(Math.random() * (11) + 1);
        randomNumberSkull3 = Math.floor(Math.random() * (11) + 1);
        randomNumberSkull4 = Math.floor(Math.random() * (11) + 1);

        $("#targetScore").html(randomTargetNumber);
        totalScore = 0;
        //  startingWins = 0;
        wins = 0;
        $("#winsBox").html(wins);

        //startingLosses = 0;
        losses = 0;
        $("#lossesBox").html(losses);

        $("#playerScore").html(totalScore);
    })


    //When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
    //Your game will hide this amount until the player clicks a crystal.

    // That amount of points must stay the same throught a given game.

    //When they do click one, update the player's score counter.



    $("#sugarSkull1").on("click", function() {
        totalScore = totalScore + randomNumberSkull1;
    winOrLose();
    })

    $("#sugarSkull2").on("click", function() {
        totalScore = totalScore + randomNumberSkull2;
       winOrLose();
    })

    $("#sugarSkull3").on("click", function() {
        totalScore = totalScore + randomNumberSkull3;
       winOrLose();
    })

    $("#sugarSkull4").on("click", function() {
        totalScore = totalScore + randomNumberSkull4;
        winOrLose();

    })

})


//The game restarts whenever the player wins or loses.
//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



//Option 1 Game design notes
//
//The random number shown at the start of the game should be between 19 - 120.
//Each crystal should have a random hidden value between 1 - 12.
