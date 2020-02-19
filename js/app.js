/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
startBttn = document.getElementById("btn__reset")
keyBttns = document.getElementsByClassName("key")
let startedGame = false


//  this methods resets the game once the start button is clicked and it also instantiates a new game object
startBttn.addEventListener("click", () => {
    
    document.getElementById("phraseUl").innerHTML=""
    document.getElementById("docbody").style.backgroundColor= ""
    
    for (i = 0; i < keyBttns.length; i++) {
        keyBttns[i].disabled = false
        keyBttns[i].className = "key"
    }
    let heartState = document.getElementsByClassName("tries")
    for (i = 0; i < heartState.length; i++) {
        heartState[i].firstElementChild.src = "images/liveHeart.png"
    }

    const game = new Game()
    game.startGame()
 
    startedGame = true
    for (i = 0; i < keyBttns.length; i++) {
        keyBttns[i].addEventListener("click", game.handleInteraction.bind(game))
    }
    // keyboard event
    if (startedGame) {
        document.addEventListener("keyup", game.keyboardEventHandler.bind(game))
    }

})