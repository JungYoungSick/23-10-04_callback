let add = 10; // 변수 add

function sum(x, y, callback) {
  callback(x +y);
}

sum(1,2, function(result) {
  console.log(result);
});

console.log(add);