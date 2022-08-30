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

const showBall = (number, $target) => {
    const $ball = document.createElement('div');
    $ball.className = 'ball';
    $ball.textContent = number;
    $target.appendChild($ball);
}

for (let i = 0; i < 6; i++){
    setTimeout(() => {
        showBall(winBalls[i], $result);
    }, (i + 1) * 1000);
}

setTimeout(() => {
    showBall(bonus, $bonus);
},7000);