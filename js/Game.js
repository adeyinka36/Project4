class Game {
    constructor() {
            this.missed = 0
            this.phrases = [
                new Phrase('Believe in yourself'),
                new Phrase('Do not quit'),
                new Phrase('Change the world by being yourself'),
                new Phrase('We are all in this together'),
                new Phrase('Die with memories not dreams'),
                new Phrase('The world is yours')
            ]
            this.activePhrases = null
        }
        // this method initializes a game and makes the overlay invisible
    startGame() {
        let overlay = document.getElementById("overlay");

        overlay.style.visibility = "hidden"
        this.activePhrases = this.getRandomPhrase();
        this.activePhrases.addPhraseToDisplay();

    };
    // this method gets a random phrase
    getRandomPhrase() {
        let ranNum = Math.floor(Math.random() * this.phrases.length);
        let selected = this.phrases[ranNum]

        return selected


    };
    //    this method handles the inputs and controls the game flow
    handleInteraction(e) {
        let body = document.getElementById("docbody")
        e.target.disabled = true
        e.target.style.transform = "rotate(360deg)"
        
        if (this.activePhrases.checkLetter(e)) {
            body.style.backgroundColor = "green"
            e.target.classList.add("chosen")
            this.activePhrases.showMatchedLetter(e)
            if (this.checkForWin(e)) {
                this.gameOver()
            }
        } else {
            e.target.classList.add("wrong")
            body.style.backgroundColor = "red"
            this.removeLife()

        }
        
    };
    keyboardEventHandler(e) {
        let buttons = document.getElementsByClassName("key");
        for (i = 0; i < buttons.length; i++) {
            if (event.key === buttons[i].innerText) {
                buttons[i].click();
            }
        }

    };
    // This method removes a liveheart for each wrong guess
    removeLife() {
        if (this.missed < 4) {
            let heartState = document.getElementsByClassName("tries");
            heartState[this.missed].firstElementChild.src = "images/lostHeart.png"
            this.missed++
        } else {
            this.gameOver()
        }
    };
    // this method checks for a win
    checkForWin(e) {
        console.log("checking")
        let lettersInDom = document.getElementsByClassName("letter")
        let shown = document.getElementsByClassName("show")
        if (shown.length == lettersInDom.length) {
            return true
        } else {
            return false
        }
    };
    //  This method clears the screen , restores values to default and ends the game
    gameOver() {
        let buttons = document.getElementsByClassName("key")
        let message = document.getElementById("game-over-message")
        if (this.checkForWin()) {
            for(i=0;i<buttons.length;i++){
                buttons[i].className="key"
                buttons[i].style=""
            }

            this.missed = 0

            overlay.style.visibility = "visible"
            overlay.className = "win"
            message.innerText = "You  Win!"
        } else if (this.missed >= 4) {
            for(i=0;i<buttons.length;i++){
                buttons[i].className="key"
                buttons[i].style=""
            }
            
            this.missed = 0
            overlay.style.visibility = "visible"
            overlay.className = "lose"
            message.innerText = "You lose!"

        };
    };
};