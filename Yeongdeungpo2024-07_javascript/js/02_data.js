// string
// let a = "사과";
// let b = 100;
// let name = "김진우";
// let email = `rlawlsdn1020@gmail.com`; // 템플릿 리터럴 /백틱

// let address = '인천';

// let realname = name;

// let nameData = `이름 ${name} 입니다, 안녕하세요. 제 이메일은 ${email}`;
// console.log(nameData);

// number
// let ago = 40;
// let birth = "1981";
// let sum = ago + birth;
// console.log(typeof sum);

// boolean
// let isShow = true;
// let isHide = false;
// console.log(typeof isShow);
// if (age === 40) {
//   console.log("40세입니다.");
// } else {
//   console.log("40세가 아닙니다.");
// }

// undefined
let undef;
console.log(undef);
let obj = {
  name: "김진우",
};
// console.log(obj.nickname);

// null
let empty = null;
// console.log(empty);
// setTimeout(() => {
//   let empty = 10;
//   console.log(empty);
// }, 1000);
empty = 10;
// console.log(empty);

// object 객체
let user = {
  //key:value;
  name: "김진우",
  birth: 1981,
  address: "인천",
};
// console.log(user.name);
const div = document.querySelector("div");
div.innerHTML = `생일이 ${user.birth}이신 ${user.name}님 안녕하세요`;

// array 배열
//let hobby = ["photo", "piano", "swim,", 619, true];
//console.log(hobby[0]);
//console.log(hobby.length);

// function 함수
// 함수명(); 함수 실행
//함수 정의

function result() {
  //함수식
  console.log("함수가 실행되었습니다.");
}
result();
result();
result();
result();
result();
result();
