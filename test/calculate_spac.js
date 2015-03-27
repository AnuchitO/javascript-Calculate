var assert = require("assert");
var Calculate = require("../actions/calculate.js");
describe('Calculate App', function(){
	describe('Operation', function(){
		it('should return + when the value is Plus', function(){
		  assert.equal("+",Calculate.operation("Plus"));
		});

		it('should return - when the value is Minus', function(){
		  assert.equal("-",Calculate.operation("Minus"));
		});

		it('should return * when the value is Multiply', function(){
		  assert.equal("*",Calculate.operation("Multiply"));
		});

		it('should return + when the value is Divide', function(){
		  assert.equal("/",Calculate.operation("Divide"));
		});

		it('should return Unknow when the value is Dog', function(){
		  assert.equal("Unknow",Calculate.operation("Dog"));
		});
	})

	describe('Concat Equation', function(){
		it('should return 5*3 when the value is 5,*,3', function(){
		  assert.equal("5*3",Calculate.concatEquation("5","*","3"));
		});

		it('should return 5-3 when the value is 5,-,3', function(){
		  assert.equal("5-3",Calculate.concatEquation("5","-","3"));
		});

		it('should return 5*3 when the value is 5,*,3', function(){
		  assert.equal("5*3",Calculate.concatEquation("5","*","3"));
		});

		it('should return 5/3 when the value is 5,/,3', function(){
		  assert.equal("5/3",Calculate.concatEquation("5","/","3"));
		});
	})


	describe('Calculation', function(){
		it('should return 5.00000 when the value is 3+2', function(){
		  var equation = "3+2";
		  assert.equal("5.00000",Calculate.calculation(equation));
		});

		it('should return 5.12345 when the value is 3+2.2', function(){
		  var equation = "3+2.12345";
		  assert.equal("5.12345",Calculate.calculation(equation));
		});

		it('should return -1.0000 when the value is -3+2', function(){
		  var equation = "-3+2";
		  assert.equal("-1.00000",Calculate.calculation(equation));
		});


		it('should return -4.0000 when the value is -2-2', function(){
		  var equation = "-2-2";
		  assert.equal("-4.00000",Calculate.calculation(equation));
		});

		it('should return 10.00000 when the value is 3*2', function(){
		  var equation = "10";
		  assert.equal("10.00000",Calculate.calculation(equation));
		});

		it('should return 1.5000 when the value is 3/2', function(){
		  var equation = "3/2";
		  assert.equal("1.50000",Calculate.calculation(equation));
		});

		it('should return Infinity when the value is 3/0', function(){
		  var equation = "3/0";
		  assert.equal("Infinity",Calculate.calculation(equation));
		});

	})

})
