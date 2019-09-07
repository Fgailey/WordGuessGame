var words = [
    "atlanta",
    "baltimore", 
    "chicago", 
    "denver",
    "athens",
    "auburn",
]

        var newP = document.createElement("p");

//Start function with button such as spacebar

    //randomize word selected by the computer
        //in random word create a for loop that makes an underlined spot for each letter in word
        //this needs to not trigger unless game is over or reset button is pressed
        var random = Math.floor(Math.random() * words.length)

        for (var x = 0; x < random.length; x++){
            
        }

    //record key pressed by player
        var userGuess = event.key;
    //compare key pressed to random word

    //replace the letter in the empty word slot with the correct letter
    var correctLet = document.getElementById("chosenWord")
    //if match then show letter in word, else 
        //identify letter in word that matches by using a for loop
        //for each letter in word compare that with key pressed, use if statement
        //if match stop and assign that letter to the blanks, else move to next
        //once for loop is complete add letter to letters guessed and lower turns counter
    function loop(looper){
        for (var i = 0; i < looper.length; i++ ) {
            if (userGuess = looper.charAt[i]){
                correctLet = event.key;
            }
            else {
                //push the letter to an array that will display the used letters
            }
        }
    }


var alpha = []
