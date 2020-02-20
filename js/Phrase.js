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
            console.log(this.phrase)
            this.splitPhrase = this.phrase.split("")
            console.log(this.splitPhrase)
            this.matches = []
        }
        // this method creates an  icon on the screen for each letter of the active phrsase and sets the appropraite class 
    addPhraseToDisplay() {
        console.log(this.phrase)
        
        // making sure only active phrase is being compared to input
        let pastLetters=document.getElementsByClassName("letter")
        for(i=0;i<pastLetters.length;i++){
            pastLetters[i].classList.remove("letter")
        }
        while(lettersArray[0]){lettersArray.pop}
        while(lettersInDom[0]){lettersInDom.pop}


            let splitPhrase = this.phrase.split("")
            for (let i = 0; i < splitPhrase.length; i++) {
                let currentPhraseLi = document.createElement("li")
                if (splitPhrase[i] === " ") {
                    currentPhraseLi.className = "space"
                    currentPhraseLi.innerText = splitPhrase[i]
                    phraseUl.appendChild(currentPhraseLi)

                } else {
                    currentPhraseLi.classList.add("hide", "letter", splitPhrase[i])
                    currentPhraseLi.innerText = splitPhrase[i]
                    phraseUl.appendChild(currentPhraseLi)
                    console.log(phraseUl)
                    

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
        for (i = 0; i < this.matches.length; i++) {
            this.matches[i].classList.remove("hide")
            this.matches[i].classList.add("show")
        }
    }

}