// 피셔 에이츠 셔플 알고리즘
const candiate = Array(45).fill().map((v, i) => i + 1);

const shuffle = [];
while (candiate.length > 0) {
    const random = Math.floor(Math.random() * candiate.length); // 무작위 인덱스 뽑기
    const spliceArray = candiate.splice(random ,1); // 뽑은 값은 배열에 들어 있음
    const value = spliceArray[0];   // 배열에 있는 값 꺼냄
    shuffle.push(value);    // shuffle 배열에 넣기
}
console.log(shuffle);

// for문으로 바꾸기
// for (let i = candiate.length; i > 0; i--){
//     const random = Math.floor(Math.random() * i);
//     const spliceArray = candiate.splice(random ,1);
//     const value = spliceArray[0];
//     shuffle.push(value);
// }
// console.log(shuffle);
// map, slice는 원본 변경 X

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
// 정렬 > sort는 원본 변경 O (a-b:오름차순, b-a:내림차순)
// slice를 중간에 넣어주면 원본은 변경하지 않고 "복사"해서 사용
const bonus = shuffle[6];
console.log(winBalls, bonus);

const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

function colorize(number, $tag) {
    if (number < 10) {
        $tag.style.backgroundColor = 'red';
        $tag.style.color = 'white';
    } else if (number < 20) {
        $tag.style.backgroundColor = 'orange';
    } else if (number < 30) {
        $tag.style.backgroundColor = 'yellow';
    } else if (number < 40) {
        $tag.style.backgroundColor = 'blue';
        $tag.style.color = 'white';
    } else {
        $tag.style.backgroundColor = 'green';
        $tag.style.color = 'white';
    }
}

const showBall = (number, $target) => {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    colorize(number, $ball);
    $ball.textContent = number;
    $target.appendChild($ball);
}

// var 함수 레벨 스코프 > 클로저(함수와 함수 바깥 변수의 관계) 사용해서 오류 해결
// for (var i = 0; i < winBalls.length; i++){
//     (function(j){
//         setTimeout(() => {
//             showBall(winBalls[j], $result);
//         }, (i + 1) * 1000);
//     })(i);  // 즉시 실행 함수로 호출
// }
// 함수 스코프 var와 비동기 함수가 만나면 클로저 문제 발생


// let 블록 레벨 스코프
for (let i = 0; i < winBalls.length; i++){
    setTimeout(() => {
        showBall(winBalls[i], $result);
    }, (i + 1) * 1000);
}

setTimeout(() => {
    showBall(bonus, $bonus);
},7000);