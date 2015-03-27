var Calculate = {};
Calculate.init = function init(){
	var firstNumber = $("#in-first-number").val();
	var secondNumber = $("#in-second-number").val();
	var operator = Calculate.operation($("#operator").text().trim());

	var equation = Calculate.concatEqua(firstNumber,operator,secondNumber);
	var answer = Calculate.calculation(equation);
	
	if(answer == "Infinity"){
		answer = "Not allow to divide by zero";
	}	
	
	Calculate.setValueAnswer(answer);
}

Calculate.concatEqua = function concatEqua(firstNumber,operator,secondNumber){
	return firstNumber+operator+secondNumber;
}

Calculate.calculation = function calculation(equation){
	return eval(equation).toFixed(5);
}

Calculate.setValueAnswer = function setValueAnswer(answer){
	$("#answer").text(answer);
}

Calculate.operation = function operation(opr){
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

// module.exports = Calculate;