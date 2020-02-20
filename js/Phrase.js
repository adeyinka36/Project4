class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toString().toLowerCase()
        this.splitPhrase = this.phrase.split("")
        this.matches = []
    };

    //this method creates an  icon on the screen for each letter of the active phrsase and sets the appropraite class 
    addPhraseToDisplay() {
        let splitPhrase = this.phrase.split("");
        for (let i = 0; i < splitPhrase.length; i++) {
            let currentPhraseLi = document.createElement("li");
            if (splitPhrase[i] === " ") {
                currentPhraseLi.className = "space"
                currentPhraseLi.innerText = splitPhrase[i]
                phraseUl.appendChild(currentPhraseLi);

            } else {
                currentPhraseLi.classList.add("hide", "letter", splitPhrase[i]);
                currentPhraseLi.innerText = splitPhrase[i]
                phraseUl.appendChild(currentPhraseLi);


            };
        };
    };
    // this method checks each letter input for a match
    checkLetter(e) {
        let lettersInDom = document.getElementsByClassName("letter")
        console.log(e.target.innerText)
        for (i = 0; i < lettersInDom.length; i++) {
            if (lettersInDom[i].innerText === e.target.innerText) {
                return true
            };
            // else{
            //     return false
            // }
        };

    };
    //This method reveals matched letters on the screen   
    showMatchedLetter(e) {
        let lettersToCheck = document.getElementsByClassName(e.target.innerText)
        for (i = 0; i < lettersToCheck.length; i++) {

            lettersToCheck[i].classList.remove("hide")
            lettersToCheck[i].classList.add("show")
        };
    };
};