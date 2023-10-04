function sayHello(name, callback) {
  const words = '안녕하세요 내 이름은' + name + '입니다';

  callback(words);
}
// callback1번과 처음 부분 콜백은 같다.
sayHello("인파", function(name) { //함수의 이름이 없는 익명 함수
  console.log(name)
})
// name을 인파로 해두었고, 1번과 다르게 function 이후 함수명을 지정을 안했다.
// 안한상황에서 console.log(name)을 지정했더니 첫번째 선언에서의 함수를 불러와 답을 선언했다.