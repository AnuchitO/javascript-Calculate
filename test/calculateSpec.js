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

	})

	describe('Calculation', function(){
		it('should return 5.00000 when the value is 3+2', function(){
		  expect("5.00000").toEqual(Calculate.calculation("3","+","2"));
		})	;

		it('should return 5.20000 when the value is 3+2.2', function(){
		  expect("5.20000").toEqual(Calculate.calculation("3","+","2.2"));
		});

		it('should return -1.0000 when the value is -3+2', function(){
		  expect("-1.00000").toEqual(Calculate.calculation("-3","+","2"));
		});

		it('should return -4.0000 when the value is -2-2', function(){
		  expect("-4.00000").toEqual(Calculate.calculation("-2","-","2"));
		});

		it('should return 6.00000 when the value is 3*2', function(){
		  expect("6.00000").toEqual(Calculate.calculation("3","*","2"));
		});

		it('should return 1.5000 when the value is 3/2', function(){
		  expect("1.50000").toEqual(Calculate.calculation("3","/","2"));
		});

		it('should return \"Not allow to divide by zero\" when the value is 3/0', function(){
		  expect("Not allow to divide by zero").toEqual(Calculate.calculation("3","/","0"));
		});

	})

})
