const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

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
    if (tries.includes(input)) {    // 이미 시도한 값은 아닌가
        return alert('이미 시도한 값입니다.');
    }
    return true;
}   // 검사 코드

$form.addEventListener('submit' , (event) => {
    event.preventDefault();     // 기본 동작 막기
    const value = $input.value;
    $input.value = '';
    if (checkInput(value)) {
        
    } else {
        // 에러
    }
});