/*
let 점수1차 = Number( prompt("1차점수"));
let 점수2차 = Number( prompt("2차점수"));
let 총점 = 점수1차 + 점수2차;
let result = 총점 >=150 ? "합격" : "불합격";
console.log(`결과 ${result}`);
document.write(`<h3> ${result} </h3>`);



let 이름 = prompt("이름 :");
let result2 = 이름 == "유재석" ? `${이름}방장` : `${이름}`;
console.log(`${result2}`)
document.write( `<ol><li> ${result2} </li><ol>`);
*/

console.log(10+3);
console.log(10-3);
console.log(parseInt(10/3));
console.log(10%3);
console.log("점수:" + 10);

let 국어 = prompt("국어:")
let 영어 = prompt("영어:")
let 수학 = prompt("수학:")
let 총점 = Number(국어) + Number(영어) + Number(수학)
let 평균 = 총점 /3;
console.log(`총점 : ${총점}`, `평균 : ${평균}`)


let 국어1 = prompt("국어1")
let 영어1 = prompt("영어1")
let 수학1 = prompt("수학1")
let 총점1 = Number(국어1) + Number(영어1) + Number(수학1)
let 평균1 = 총점1 / 3;
console.log(`총점 : ${총점1}`, `평균: ${평균1}`);

let 반지름 = prompt("반지름:")
let 원넓이 = 반지름 * 반지름 * 3.14;
console.log(`원넓이 : ${원넓이}`)