let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 9)
};

function getAdsoluteDistance (num1, num2) {
    return Math.abs(num1 - num2)
};


function compareGuesses (numH, numC, numT) {
    if (numH < 0 || numH > 9) {
        alert('Input needs to be a number from 0 to 9!');
    } else if (getAdsoluteDistance(numH, numT) < getAdsoluteDistance(numC, numT) ||
    getAdsoluteDistance(numH, numT) === getAdsoluteDistance(numC, numT)) {
        return true; 
    } else if (getAdsoluteDistance(numC, numT) < getAdsoluteDistance(numH, numT)) {
        return false;
    }
};


const updateScore = result => {
    if (result === 'human') {
        humanScore++;
    } else if (result === 'computer') {
        computerScore++;
    }
};

function advanceRound () {
    currentRoundNumber++;
}
