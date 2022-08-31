const $computer = document.querySelector('#computer');
const $score = document.querySelector('#score');
const $rock = document.querySelector('#rock');
const $scissors = document.querySelector('#scissors');
const $paper = document.querySelector('#paper');

const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px';

const rspX = {
    scissors: '-0',  // 가위
    rock: '-220px',  // 바위
    paper: '-440px',  // 보
};

let computerChoice = 'scissors';
const changeComputerHand = () => {
    if (computerChoice === 'scissors') {  // 가위면
        computerChoice = 'rock'; 
    } else if (computerChoice === 'rock') {   // 바위면
        computerChoice = 'paper'; 
    } else {    // 보
        computerChoice = 'scissors';
    }
    $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
    $computer.style.backgroundSize = 'auto 200px';
}

setInterval(changeComputerHand, 50);