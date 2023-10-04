function sayHello(name, callback) {
  const words = '안녕하세요 내 이름은' + name + '입니다';

  callback(words);
}
// callback1번과 처음 부분 콜백은 같다.
sayHello("인파", function(name) { //함수의 이름이 없는 익명 함수
  console.log(name)
})