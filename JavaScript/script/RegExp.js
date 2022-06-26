var pattern = /(\w+)\s(\w+)/;

var str = "coding everybody";

var result = str.replace(pattern,"$2, $1");
// $2 : 2번째 그룹, $1 : 1번째 그룹
// 두번째 그룹 + , +/s(띄어쓰기) + 첫번째 그룹

console.log(result);