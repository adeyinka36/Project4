/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
// Here i store some important elements in variables for easy access
const overlay = document.getElementById("overlay")
const message = document.getElementById("game-over-message")
const body = document.getElementById("docbody")
keyBttns = document.getElementsByClassName("key")


class Game {
    constructor() {
            this.missed = 0
            this.phrases = [
                new Phrase('Never regret anything that made you smile'),
                new Phrase('Do not quit'),
                new Phrase('Change the world by being yourself'),
                new Phrase('We are all in this together'),
                new Phrase('Die with memories not dreams'),
                new Phrase('Every moment is a fresh begining')
            ]
            this.activePhrases = null
        }
        // this method starts a game and uses a phrase from my phrase list to instantiate a Phrase object
    startGame() {
            overlay.style.visibility = "hidden"
            this.activePhrases = this.getRandomPhrase()
            this.activePhrases.addPhraseToDisplay()
        }
        // this method returns a random phrase
    getRandomPhrase() {
            console.log("yes")
            let ranNum = Math.floor(Math.random() * this.phrases.length)
            let selected = this.phrases[ranNum]
            console.log(selected)
            return selected


        }
        // this method removes a life for each wrong guess and updates record of lives left
    removeLife() {
            console.log("yaii")
            if (this.missed < 5) {
                let heartState = document.getElementsByClassName("tries")
                for (i = 0; i <= this.missed; i++) {
                    heartState[i].firstElementChild.src = "images/lostHeart.png"
                }
                this.missed += 1
            } else {
                this.looseGameOver()
            }
        }
        // this method checks calls the necessary methods after each guess and disables the button clicked
    handleInteraction(e) {
            console.log(e)
            let phraseToSplit = this.activePhrases.phrase.toString().split("")
            if (e.target.className == "key") {
                e.target.disabled = true
                e.target.style.transform = "rotate(360deg)"
            }

            if (!phraseToSplit.includes(e.target.innerText)) {
                e.target.classList.add("wrong")
                body.style.backgroundColor = "red"
                this.removeLife()
                this.checkForWin()

            } else {
                body.style.backgroundColor = "green"
                e.target.classList.add("chosen")
                this.activePhrases.showMatchedLetter(e)
                this.checkForWin()

            }


        }
        // this method convert a keybard event into an onscreen keyboard click
    keyboardEventHandler(e) {
        console.log("i am handling it")
        let buttons = document.getElementsByClassName("key")
        for (i = 0; i < buttons.length; i++) {
            if (event.key === buttons[i].innerText) {
                buttons[i].click()
            }
        }
    }

    // this method checks for a win
    checkForWin() {
        let phraseToSplit = this.activePhrases.phrase.toString().split("")
        let letters = []
        let revealed = document.getElementsByClassName("show")
        for (i = 0; i < phraseToSplit.length; i++) {
            if (phraseToSplit[i] != " ") {
                letters.push(phraseToSplit[i])

            }
        }
        if (letters.length == revealed.length) {
            this.winGameOver()

        } else {
            return false
        }
    }
    winGameOver() {
        for (i = 0; i < keyBttns.length; i++) {
            keyBttns[i].style = ""
        }
        overlay.style.display = "none"
        overlay.className = "win"
        message.innerText = "You  Win!"


    }
    looseGameOver() {
        for (i = 0; i < keyBttns.length; i++) {
            keyBttns[i].style = ""
        }
        overlay.style.visibility = "visible"
        overlay.className = "lose"
        message.innerText = "You lose!"

    }
}