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
        //this array holds the blanks and replaces them with successes 
    //this array holds the blanks and replaces them with successes 
    var blanks = [];
    var wrongLetters = [];
    var chosenWordLetters = [];
    var chosenWord = "";
    var finalWord = "";
    
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
        finalWord = "";
        // this will reset the array, the letters are taken out to avoid pressing the same letters multiple times
        letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


        //this will make it so the game can run again, game stops when true
        gameStatus = false;
        //initialized the game to start after it has been reset
        gameStart();
    }

    

        //this initiates the field for the game to start
    function gameStart() {
        //this needs to not trigger unless game is over or reset button is pressed
        var z = Math.floor(Math.random() * words.length);
        chosenWord = words[z];
        console.log(chosenWord);
        //this will make the letters into an array for later comparison
        chosenWordLetters = chosenWord.split('');

        guessCounter = 13;
        wrongLetters = [];
        blanks = [];
        // this will reset the array, the letters are taken out to avoid pressing the same letters multiple times
        letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
        //this will run through the length of the random word and populate blanks
        for (var x = 0; x < chosenWord.length; x++){
            blanks.push("_");
            $("#blank").text(blanks);
        }
        //changes the reset guesses back to starting value
        $("#guesses").text(guessCounter);
        //updates the wins/losses to current total
        $("#wins").text("Wins:" + wins);
        $("#losses").text("Losses:" + losses);

        $("#lettersUsed").text(wrongLetters);
    }
    function checkWord(){
        for (var a = 0; a < letters.length; a++){
            //this for loop runs through alphabet to check user enty to the allowed chars
            if (userGuess === letters[a] && guessCounter > 0){
                for (var i = 0; i < chosenWord.length; i++ ) {
                    var res = chosenWord.charAt(i);
                    if (userGuess === res){
                        blanks[i] = userGuess;
                        $("#blank").text(blanks);
                        console.log(guessCounter);
                    }
                    
                }
                
            } 
            
        }
    }
            //might need to add condition that chosenWord is not equal to the blanks
            
            
            // else if(userGuess != res){
            //     //push the letter to an array that will display the used letters
            //     wrongLetters.push(userGuess);
            //     $("#lettersUsed").text(wrongLetters);
            //     guessCounter -= 1;
            //     $("#guesses").text("Guesses left:" + guessCounter)
            //     break;
            // } 
                // } 
            // } 
    function winLose(){
        if (finalWord === chosenWord){
            console.log(wins);
            wins += 1;
            reset();
        }
        if(guessCounter === 0 || guessCounter < 0) {
            losses += 1;
            $("#losses").text("Losses: " + losses);
            reset();
            //need to make the game reset to right after the document ready function begins

        }
    }
    gameStart();
    //used to create the blank spots
        document.onkeyup = function(event)
        {
            userGuess = event.key;
            guessCounter -= 1;
            checkWord();
            $("#guesses").text(guessCounter);
            //debugger;
            finalWord = blanks.join();
            for(var i = 0; i < finalWord.length; i++){
                finalWord = finalWord.replace(",","");
            }
            winLose();
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
    
