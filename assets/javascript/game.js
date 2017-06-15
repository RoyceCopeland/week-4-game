"use strict";
$(document).ready(function() {
        var randomTargetNumber;
        var randomNumberSkull1;
        var randomNumberSkull2;
        var randomNumberSkull3;
        var randomNumberSkull4;


        //There will be four crystals displayed as buttons on the page.


        //The player will be shown a random number at the start of the game.
        $("#randomNumberButton").on("click", function() {
            var randomTargetNumber = Math.floor(Math.random() * (102) + 19);
            console.log(randomTargetNumber);

            $("#targetScore").html(randomTargetNumber);

        })


        //When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
        // That amount of points must stay the same throught a given game.

        $("#sugarSkull1").on("click", function() {
            var randomNumberSkull1 = Math.floor(Math.random() * (11) + 1);
            console.log(randomNumberSkull1);




        })

        $("#sugarSkull2").on("click", function() {
            var randomNumberSkull2 = Math.floor(Math.random() * (11) + 1);
            console.log(randomNumberSkull2);


        })

        $("#sugarSkull3").on("click", function() {
            var randomNumberSkull3 = Math.floor(Math.random() * (11) + 1);
            console.log(randomNumberSkull3);


        })

        $("#sugarSkull4").on("click", function() {
                var randomNumberSkull4 = Math.floor(Math.random() * (11) + 1);
                console.log(randomNumberSkull4);


            })
            //Your game will hide this amount until the player clicks a crystal.


    })
    //When they do click one, update the player's score counter.



//The player wins if their total score matches the random number from the beginning of the game.



//The player loses if their score goes above the random number.



//The game restarts whenever the player wins or loses.



//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.



//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



//Option 1 Game design notes
//
//The random number shown at the start of the game should be between 19 - 120.
//Each crystal should have a random hidden value between 1 - 12.
