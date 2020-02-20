let startBttn = document.getElementById("btn__reset");


// //  this methods resets the game once the start button is clicked and it also instantiates a new game object
startBttn.addEventListener("click", () => {
    let startedGame;
    let keyBttns = document.getElementsByClassName("key");
    document.getElementById("phraseUl").innerHTML = ""
    document.getElementById("docbody").style.backgroundColor = ""

    
    // enabling buttons
    for (i = 0; i < keyBttns.length; i++) {
        keyBttns[i].disabled = false
        keyBttns[i].className = "key"
    };
    // restoring lives
    let heartState = document.getElementsByClassName("tries")
    for (i = 0; i < heartState.length; i++) {
        heartState[i].firstElementChild.src = "images/liveHeart.png"
    };
    //   starting  a new game and initializing event handlers
    const game = new Game()
    game.startGame()

    startedGame = true
    for (i = 0; i < keyBttns.length; i++) {
        keyBttns[i].addEventListener("click", game.handleInteraction.bind(game))
        
    };
    // keyboard event
    if (startedGame) {
        document.addEventListener("keyup", game.keyboardEventHandler.bind(game))
    };

});