// let add = 10; // 변수 add

// function sum(x, y, callback) {
//   callback(x +y);
// }
// //콜백함수 호출
// sum(1,2, function(result) {
//   console.log(result);
// });
// //함수 안 작성한 콜백의 x=1, y=2이기에 결과값은 3이 나온다.
// console.log(add);
// //let 변수 선언이 10인 것이 밖으로 빠져있기 때문에 콘솔 선언을 밖에 선언한 것으로 값이 나온다.

let add = 10; // 변수 add

function sum(x, y, callback) {
  callback(x +y);
}
//콜백함수 호출
sum(1,2, function add(result) {
  //함수명 add 추가.
  console.log(result);
  //함수명을 지정하지 않아도 값을 뱉어낸다.
});
//함수 안 작성한 콜백의 x=1, y=2이기에 결과값은 3이 나온다.
console.log(add);
//let 변수 선언이 10인 것이 밖으로 빠져있기 때문에 콘솔 선언을 밖에 선언한 것으로 값이 나온다.