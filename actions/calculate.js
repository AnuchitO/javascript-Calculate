var Calculate = function(){
	return{
		execution :function (){
			var firstNumber = $("#in-first-number").val();
			var secondNumber = $("#in-second-number").val();
			var operator = Calculate.operation($("#operator").text().trim());

			var equation = Calculate.concatEquation(firstNumber,operator,secondNumber);
			var answer = Calculate.calculation(equation);

			if(answer == "Infinity"){
				answer = "Not allow to divide by zero";
			}	

			Calculate.setValueAnswer(answer);
		},

		concatEquation : function (firstNumber,operator,secondNumber){
			return firstNumber+operator+secondNumber;
		},

		calculation : function (equation){
			return eval(equation).toFixed(5);
		},

		setValueAnswer : function (answer){
			$("#answer").text(answer);
		},

		operation : function (opr){
			switch(opr) {
				case "Plus":
				return "+";
				case "Minus":
				return "-";
				case "Multiply":
				return "*";
				case "Divide":
				return "/";
				default:
				return "Unknow";
			}

		}

	}
	
}();
