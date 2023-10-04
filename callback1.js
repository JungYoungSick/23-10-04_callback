function sayHello(name, callback) {
  const words = '안녕하세요 내 이름은' + name + '입니다';

  callback(words);
}
// 콜백함수 name이란 매개변수를 사용하여 값이 나올 수 있도록 작업
sayHello("인파", function printing(name) {
  console.log(name);
})
// 위 함수대로 sayHello를 사용하여 name에 인파란 단어를 호출하게 만들었다.
