let calculator = {
  num1: 0,
  num2: 0,
  read: function(){
    calculator.num1 = +prompt(`Give me a number`)
    calculator.num2 = +prompt(`Give me a second number`)
    return
  },
  sum: function(){
  return calculator.num1 + calculator.num2
  },
  mul: function(){
    return calculator.num1 * calculator.num2
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
