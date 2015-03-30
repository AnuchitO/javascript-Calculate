var Calculate = function(){
	return{
		execution :function (){
			var firstNumber = $("#in-first-number").val();
			var secondNumber = $("#in-second-number").val();
			var operator = Calculate.operation($("#operator").text().trim());

			var answer = Calculate.calculation(firstNumber,operator,secondNumber);
			
			Calculate.setValueAnswer(answer);
		},

		calculation : function (firstNumber,operator,secondNumber){
			var answer = eval(firstNumber+operator+secondNumber).toFixed(5);
			return answer=="Infinity"?"Not allow to divide by zero":answer;
		},

		setValueAnswer : function (answer){
			$("#answer").text(answer);
		},

		operation : function (opr){
			var operator = {
					Plus:"+",
					Minus:"-",
					Multiply:"*",
					Divide:"/"
			};
			return operator[opr];
		}

	}
	
}();
