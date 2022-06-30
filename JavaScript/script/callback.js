let numbers = [20,10,9,8,7,6,5,4,3,2,1];
let sorfunc = function(a, b){
    // console.log(a, b);
    // if(a > b){
    //     return 1;
    // } else if (a < b){
    //     return -1;
    // } else {
    //     return 0;
    // }
    return a - b;
    // return b - a; -역순-
}
console.log(numbers.sort(sorfunc));     //sorfunc : 콜백함수
// numbers는 객체(배열), sort()는 메소드(js에서 기본적으로 제공하는 함수를 내장객체, 내장함수라고 함)
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20

