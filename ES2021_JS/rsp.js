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

const scoreTable = {
    rock : 0,
    scissors: 1,
    paper : -1,
};

let clickable = true;
let score = 0;
const clickButton = () => {
    if (clickable) {
        clearInterval(intervalId);
        clickable = false;
        // 점수 계산 및 화면 표시
        const myChoice = event.target.textContent === '바위'
        ? 'rock'
        : event.target.textContent === '가위'
            ? 'scissors'
            : 'paper';  
        const myScore = scoreTable[myChoice];
        const computerScore = scoreTable[computerChoice];
        const diff = myScore - computerScore;

        let message;
        if (diff === 2 || diff === -1) {    // ||(또는)은 [2, -1](배열).includes(diff)로 바꿀 수 있음
            score += 1;
            message = '승리';
        } else if (diff === -2 || diff === 1) {
            score -= 1;
            message = '패배';
        } else {
            message = '무승부';
        }
        $score.textContent = `${message} 총: ${score}점`;

        setTimeout(() => {  // setTimeout은 삭제 X > 버그 발생
            clearInterval(intervalId);
            intervalId = setInterval(changeComputerHand, 50);
        }, 1000);
    } 
};

$rock.addEventListener('click', clickButton);
$scissors.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);