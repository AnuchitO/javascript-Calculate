describe('Calculate App', function(){
	describe('Operation', function(){
		it('should return + when the value is Plus', function(){
		  expect("+").toEqual(Calculate.operation("Plus"));
		});

		it('should return - when the value is Minus', function(){
		  expect("-").toEqual(Calculate.operation("Minus"));
		});

		it('should return * when the value is Multiply', function(){
		  expect("*").toEqual(Calculate.operation("Multiply"));
		});

		it('should return + when the value is Divide', function(){
		  expect("/").toEqual(Calculate.operation("Divide"));
		});

		it('should return Unknow when the value is Dog', function(){
		  expect("Unknow").toEqual(Calculate.operation("Dog"));
		});
	})

	describe('Concat Equation', function(){
		it('should return 5*3 when the value is 5,*,3', function(){
		  expect("5*3").toEqual(Calculate.concatEquation("5","*","3"));
		});

		it('should return 5-3 when the value is 5,-,3', function(){
		  expect("5-3").toEqual(Calculate.concatEquation("5","-","3"));
		});

		it('should return 5*3 when the value is 5,*,3', function(){
		  expect("5*3").toEqual(Calculate.concatEquation("5","*","3"));
		});

		it('should return 5/3 when the value is 5,/,3', function(){
		  expect("5/3").toEqual(Calculate.concatEquation("5","/","3"));
		});
	})


	describe('Calculation', function(){
		it('should return 5.00000 when the value is 3+2', function(){
		  var equation = "3+2";
		  expect("5.00000").toEqual(Calculate.calculation(equation));
		});

		it('should return 5.12345 when the value is 3+2.2', function(){
		  var equation = "3+2.12345";
		  expect("5.12345").toEqual(Calculate.calculation(equation));
		});

		it('should return -1.0000 when the value is -3+2', function(){
		  var equation = "-3+2";
		  expect("-1.00000").toEqual(Calculate.calculation(equation));
		});

		it('should return -4.0000 when the value is -2-2', function(){
		  var equation = "-2-2";
		  expect("-4.00000").toEqual(Calculate.calculation(equation));
		});

		it('should return 10.00000 when the value is 3*2', function(){
		  var equation = "10";
		  expect("10.00000").toEqual(Calculate.calculation(equation));
		});

		it('should return 1.5000 when the value is 3/2', function(){
		  var equation = "3/2";
		  expect("1.50000").toEqual(Calculate.calculation(equation));
		});

		it('should return Infinity when the value is 3/0', function(){
		  var equation = "3/0";
		  expect("Infinity").toEqual(Calculate.calculation(equation));
		});

	})

})
