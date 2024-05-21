window.onload = () => {
    // Do stuff when the DOM is loaded
}
let number;
function NewGame() {
    // Pick a new number for the game.
    
    number = Math.floor(Math.random()*1000);
    console.log("New Game!", number);
    document.getElementById("Response").innerText = "";
}

function CheckAnswer(guess) {
    guessDelta = number - Number(guess);
    let response;
    
    if (guessDelta === 0) {
        // Do something if the user guesses the correct number.
        response = "Ya ha ha! You found me!";
    } else {
        // Do something if the user does not guess correctly.
        response = guessDelta > 0 ? "Higher" : "Lower";
    }

    document.getElementById("Response").innerText = response;

}
