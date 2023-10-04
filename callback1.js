function sayHello(name, callback) {
  const words = '안녕하세요 내 이름은' + name + '입니다';

  callback(words);
}

sayHello("인파", function printing(name) {
  console.log(name);
})