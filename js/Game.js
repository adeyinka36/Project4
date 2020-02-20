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
                new Phrase('Believe in yourself'),
                new Phrase('Do not quit'),
                new Phrase('Change the world by being yourself'),
                new Phrase('We are all in this together'),
                new Phrase('Die with memories not dreams'),
                new Phrase('The world is yours')
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
            let ranNum = Math.floor(Math.random() * this.phrases.length)
            let selected = this.phrases[ranNum]
            
            return selected


        }
        
        // this method removes a life for each wrong guess and updates record of lives left
    removeLife() {
        if(this.missed<=4){
                let  heartState = document.getElementsByClassName("tries")
                    heartState[this.missed].firstElementChild.src = "images/lostHeart.png"
                    this.missed++
            } 
            else{
                
                this.gameOver()
                
            }
        }
        // this method checks calls the necessary methods after each guess and disables the button clicked
    handleInteraction(e) {
        e.preventDefault()
        if(e.target.className!=="chosen" && e.target.className!=="wrong"){
            let  phraseToSplit = this.activePhrases.phrase.toString().split("")
            
            
            if (e.target.className == "key") {
                e.target.disabled = true
                e.target.style.transform = "rotate(360deg)"
            }

            if (!checkArray.includes(e.target.innerText)) {
                
                e.target.classList.add("wrong")
                body.style.backgroundColor = "red"
                this.removeLife()
                this.gameOver()
            } 
            else if(checkArray.includes(e.target.innerText)){
                
                body.style.backgroundColor = "green"
                e.target.classList.add("chosen")
                this.activePhrases.showMatchedLetter(e)
            
                this.gameOver()
        

            }

        }
        
        }
        // this method convert a keybard event into an onscreen keyboard click
    keyboardEventHandler(e) {
        e.preventDefault()
        if(e.target.className!=="chosen"&&e.target.className!=="wrong"){
        let buttons = document.getElementsByClassName("key")
        for (i = 0; i < buttons.length; i++) {
            if (event.key === buttons[i].innerText) {
                buttons[i].click()
            }
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
            return true

        } else {
            return false
        }
    }
  gameOver() {
    if(this.checkForWin()){
        for (i = 0; i < keyBttns.length; i++) {
            keyBttns[i].style = ""
        }
        overlay.style.visibility="visible"
        overlay.className = "win"
        message.innerText = "You  Win!"


    }
    else if(this.missed>=5){
        this.missed=0
        for (i = 0; i < keyBttns.length; i++) {
            keyBttns[i].style = ""
        }
        overlay.style.visibility = "visible"
        overlay.className = "lose"
        message.innerText = "You lose!"
    
    

    }
}
}