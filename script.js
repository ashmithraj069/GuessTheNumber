let RandomNumber = parseInt(Math.round(Math.random()*100+1))
const submit = document.querySelector('#subt')
const UserInput = document.querySelector('#guessField')
const GuessSlot = document.querySelector('.guesses')
const RemainingGuesses = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')
const p  = document.createElement('p')

let PrevGuess = []
let numGuess =1;

let playGame=true
if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault()
       let Guess =  parseInt(UserInput.value)  
       validateGuess(Guess)
    })
}

function validateGuess(Guess){
    if (Guess==''||Guess<=0 || Guess>100||isNaN(Guess)) {
        alert("please enter a valid number ")
        UserInput.value=''
    }else{
        PrevGuess.push(Guess)
        if(numGuess==10){
            displayGuess(Guess)
            displayMessage(`you're guess'es has completed, the random number was${RandomNumber}`)
            endGame()           
        }
        else{
            displayGuess(Guess)
            CheckGuess(Guess)
        }
    }
}
function CheckGuess(Guess) {
    if (Guess === RandomNumber) {
        displayMessage("Yay!! you guessed the correct number")
        endGame();
    }
    else if (Guess < RandomNumber){
        displayMessage("Too Low ,  Try again")
    }
    else if (Guess > RandomNumber){
        displayMessage("Too high ,  Try again")
    }              
    numGuess ++
} 
function displayGuess(Guess){
    UserInput.value=''
    GuessSlot.innerHTML +=`${Guess}, `
    RemainingGuesses.innerHTML =`${10 - numGuess}`
}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    UserInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start again</h2>`
    StartOver.appendChild(p)
    playGame=false
    newGame()
    
}
function newGame(){
    const newButton =document.querySelector('#newGame')
        newButton.addEventListener('click',function(e){
        RandomNumber = parseInt(Math.round(Math.random()*100+1))
        PrevGuess=[]
        numGuess=1
        RemainingGuesses.innerHTML =`${10 - numGuess}`
        UserInput.removeAttribute('disabled')
        StartOver.removeChild(p)
        playGame=true
    })
} 
