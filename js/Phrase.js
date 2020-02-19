/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
// here i store the necesary elements in variables
const phraseUl = document.getElementById("phraseUl")
const lettersInDom = document.getElementsByClassName("letter")
const lettersArray = Array.from(lettersInDom)



class Phrase {
    constructor(phrase) {
            this.phrase = phrase.toString().toLowerCase()
            this.splitPhrase = this.phrase.split("")
            this.matches = []
        }
        // this method creates an  icon on the screen for each letter of the active phrsase and sets the appropraite class 
    addPhraseToDisplay() {
            var splitPhrase = this.phrase.split("")
            for (var i = 0; i < splitPhrase.length; i++) {
                let currentPhraseLi = document.createElement("li")
                if (splitPhrase[i] === " ") {
                    currentPhraseLi.className = "space"
                    currentPhraseLi.innerText = splitPhrase[i]
                    phraseUl.appendChild(currentPhraseLi)

                } else {
                    currentPhraseLi.classList.add("hide", "letter", splitPhrase[i])
                    currentPhraseLi.innerText = splitPhrase[i]
                    phraseUl.appendChild(currentPhraseLi)

                }

            }
        }
        // this method checks if the letter selected is a match with any of the hidden ones from the active phrase
    checkLetter(e) {
            for (i = 0; i < lettersInDom.length; i++) {
                if (lettersInDom[i].innerText == e.target.innerText) {
                    this.matches.push(lettersInDom[i])
                }
            }

        }
        // this method reveals the letter/letters from the active phrase when there is a match
    showMatchedLetter(e) {
        this.checkLetter(e)
        console.log(typeof lettersArray)
        console.log(e.target.innerText)
        for (i = 0; i < this.matches.length; i++) {
            this.matches[i].classList.remove("hide")
            this.matches[i].classList.add("show")
        }
    }

}