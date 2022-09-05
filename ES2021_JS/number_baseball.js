const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

function defeated () {
    const message = document.createTextNode(`패배, 정답은 ${answer.join('')}`);
    $logs.appendChild(message);
}

const numbers = [];    // [1,2,3,4,5,6,7,8,9]
for (let n = 0; n < 9; n += 1){
    numbers.push(n + 1);
}

const answer = [];
for (let n = 0; n < 4; n +=1){     // 네 번 반복
    const index = Math.floor(Math.random() * numbers.length);    // 0~8 정수
    answer.push(numbers[index]);
    numbers.splice(index, 1);
}
console.log(answer);

const tries = [];
function checkInput(input) {
    if (input.length !== 4) {   // 길이가 4가 아닌가
        return alert('4자리 숫자를 입력해 주세요.');
    }
    if (new Set(input).size !== 4) {    // 중복된 숫자가 있는가
        return alert('중복되지 않게 입력하세요.');
    }
    if (tries.includes(input)) {    // 이미 시도한 값은 아닌가, includes 값이 있나없나
        return alert('이미 시도한 값입니다.');
    }
    return true;
}   // 검사 코드

let out = 0;
$form.addEventListener('submit' , (event) => {
    event.preventDefault();     // 기본 동작 막기
    const value = $input.value;
    $input.value = '';
    if(!checkInput(value)) {
        return;
    }       // 문제 있음
    if (answer.join('') === value) {    // join: 배열을 문자열로 바꾸는 메서드, ''를 안써주면 ,(기본값)로 구분됨
        $logs.textContent = '홈런';
        return;
    }   // 문제 없음
    if (tries.length >= 9) {
        defeated();
        return;
    }

    // 스트라이크 볼 검사
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < answer.length; i++) {
        const index = value.indexOf(answer[i]); // indexOf 값이 있나없나, 어디에 들어있나
        if (index > -1) {   // 일치하는 숫자
            if (index === i) {  // 자릿수 같음
                strike += 1;
            } else {    // 숫자만 같음
                ball += 1;
            }
        }
    }
    if (strike === 0 && ball === 0) {
        out++;
        $logs.append(`${value}:아웃`, document.createElement('br'))
    } else {
        $logs.append(`${value}: ${strike} 스트라이크 ${ball} 볼`, document.createElement('br'));
    }

    if (out === 3) {
        defeated();
        return;
    }
    tries.push(value);
});