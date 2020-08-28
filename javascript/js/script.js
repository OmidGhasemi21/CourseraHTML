function square (number) {
  return number * number;
}
console.log (square (2)); // output: 4

square (2);

var square2 = function (number){
  return number * number;
}
console.log (square2 (2)); // output: 4


(function(number){
  console.log (number * number);
})(2);