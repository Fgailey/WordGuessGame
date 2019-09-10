var words = [
    "atlanta",
    "baltimore", 
    "chicago", 
    "denver",
    "athens",
    "auburn",
]
        
        //var newP = document.createElement("p");
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        //counters
        var guessCounter = 13;
        var wins = 0;
        var losses = 0;
        //this array holds the blanks and replaces them with successes 
        var blanks = [];
        var wrongLetters = [];
        var chosenWordLetters = [];
        
            //used to reset the game after it has run an initial time
            function reset() {
            //randomize word selected by the computer
            //in random word create a for loop that makes an underlined spot for each letter in word

            //this needs to not trigger unless game is over or reset button is pressed
            var z = Math.floor(Math.random() * words.length);
            var chosenWord = words[z];
            console.log(chosenWord);
            //this will make the letters into an array for later comparison
            chosenWordLetters = chosenWord.split('');

            guessCounter = 13;
            wrongLetters = [];
            blanks = [];
            letters = [];
            //this will make it so the game can run again, game stops when true
            gameStatus = false;
            }

            //this initiates the field for the game to start
            



        //used to create the blank spots
        document.onkeyup = function(event){
            var userGuess = event.key;
            
            //only runs if space bar is hit and blank array is empty
            if (userGuess === " " && blanks[0] === ""){
            for (var x = 0; x < chosenWord.length; x++){
                blanks.push("_");
            }
            $("#blank").text(blanks);
            //console.log(blanks);
            }
            //console.log(userGuess);
            debugger;
            for (var a = 0; a < letters.length; a++){
            //if (userGuess === "a" ||userGuess === "b" ||userGuess === "c" ||userGuess === "d" ||userGuess === "e" ||userGuess === "f" ||userGuess === "g" ||userGuess === "a" ||userGuess === "a" ||userGuess === "a" ||userGuess === "a" ||userGuess === "a" ||userGuess === "a" ||userGuess === "a" ||userGuess === "h" ||userGuess === "i" ||userGuess === "j" ||userGuess === "k" ||userGuess === "l" ||userGuess === "m" ||userGuess === "n" ||userGuess === "o" ||userGuess === "p" ||userGuess === "q" ||userGuess === "r" ||userGuess === "s" ||userGuess === "t" ||userGuess === "u" ||userGuess === "v" ||userGuess === "w" ||userGuess === "x" ||userGuess === "y" ||userGuess === "z"){
                //this for loop runs through alphabet to check user enty to the allowed chars
                if (userGuess != " " && userGuess === letters[a] && guessCounter > 0){
                    console.log(letters[a]);
                    for (var i = 0; i < chosenWord.length; i++ ) {
                        var res = chosenWord.charAt(i);
                        if (userGuess === res){
                            blanks[i] = userGuess;
                            $("#blank").text(blanks);
                            console.log(chosenWord);
                            guessCounter -= 1;
                            $("#guesses").text("Guesses left:" + guessCounter)
                            console.log(guessCounter)
                            wrongLetters.push(userGuess);
                            $("#lettersUsed").text(wrongLetters);
                            break;
                        }
                        else if(userGuess != res){
                            //push the letter to an array that will display the used letters
                            wrongLetters.push(userGuess);
                            $("#lettersUsed").text(wrongLetters);
                            guessCounter =- 1;
                            $("#guesses").text("Guesses left:" + guessCounter)
                        } 
                        //this removes the guessed index from the array, whether correct or wrong so it cant be used again
                        letters.splice(a)
                        console.log(letters)
                    }
                    
                } 
                //might need to add condition that chosenWord is not equal to the blanks
                else if(guessCounter === 0) {
                    losses =+ 1;
                    $("#losses").text("Losses: " + losses);

                    //need to make the game reset to right after the document ready function begins

                }
            }
        }
        

        //Create a key press function to run only when the apha keys are used
        
    //record key pressed by player
    //compare key pressed to random word

    //replace the letter in the empty word slot with the correct letter
    //var correctLet = document.getElementById("chosenWord")
    //if match then show letter in word, else 
        //identify letter in word that matches by using a for loop
        //for each letter in word compare that with key pressed, use if statement
        //if match stop and assign that letter to the blanks, else move to next
        //once for loop is complete add letter to letters guessed and lower turns counter


    // function loop(looper){
    //     for (var i = 0; i < looper.length; i++ ) {
    //         if (userGuess = looper.charAt[i]){
    //             correctLet[i] = event.key;
    //         }
    //         else {
    //             //push the letter to an array that will display the used letters
    //         }
    //     }
    // }
    // $(".crystal-image").on("click", function() {

    //     counter += 10;
    
    //     alert("Your new score is: " + counter);
    
    //   });
    
