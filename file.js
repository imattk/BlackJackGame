
let dealerCards = []
let cards = []
let sum = 0
let dealSum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let dealer = document.getElementById("dealer-el")
let dealerSum = document.getElementById("dealerSum-el")

function getRandomCard(){
    return Math.floor((Math.random() * 9) + 2)
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    let dealerFirst = getRandomCard()
    let dealerSecond = getRandomCard()
    
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    dealerCards = [dealerFirst, dealerSecond]
    dealSum = dealerFirst + dealerSecond
    renderGame()
}

function renderGame() {
   let dealCard = getRandomCard()
   
    dealer.textContent = "Dealers Cards: " + dealerCards
    if(dealSum <= 15){
        dealSum += dealCard
        dealerCards.push(dealCard)
        dealer.textContent = "Dealers Cards: " + dealerCards
        dealerSum.textContent = "Dealer Sum: " + dealSum
        if (dealCard > 21){
        dealer.textContent = "Dealer Bust! "
        }
    }
    cardsEl.textContent ="Cards: " + cards;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        
        hasBlackJack = true;
        
    } else {
        message = "You Bust!";
        isAlive = false;
    }
    messageEl.textContent = message;
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
    reloadtButton.addEventListener("click", reload, false);
}
function stay(){
    if (dealSum <= sum){
        message = "You Win!"
    }else if(dealSum > sum && dealSum <= 21 ){
        message = "Dealer Wins..."
    }else if (dealSum === sum){
        message = "PUSH - Nobody Wis"
    }else if (dealSum > 21){
        message = "You Win!"
    }
    messageEl.textContent = message;
}
