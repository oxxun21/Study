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

let intervalId =  setInterval(changeComputerHand, 50);

let clickable = true;
const clickButton = () => {
    if (clickable) {
        clearInterval(intervalId);
        clickable = false;
        // 점수 계산 및 화면 표시
        setTimeout(() => {  // setTimeout은 삭제 X > 버그 발생
            clearInterval(intervalId);
            intervalId = setInterval(changeComputerHand, 50);
        }, 1000);
    } 
};

$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);