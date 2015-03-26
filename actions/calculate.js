var Cal = {};
Cal.init = function init(){
	var firstNumber = $("#in-first-number").val();
	var secondNumber = $("#in-second-number").val();
	var operator = Cal.operation($("#operator").text().trim());

	var equation = Cal.concatEqua(firstNumber,operator,secondNumber);
	var answer = Cal.calculation(equation);

	Cal.setValueAnswer(answer);
}

Cal.concatEqua = function concatEqua(firstNumber,operator,secondNumber){
	return firstNumber+operator+secondNumber;
}

Cal.calculation = function calculation(equation){
	return eval(equation).toFixed(5);
}

Cal.setValueAnswer = function setValueAnswer(answer){
	if(answer == "Infinity"){
		var msg = "Not allow to divide by zero";
		$("#answer").text(msg);
		return;
	}	
	
	$("#answer").text(answer);
}

Cal.operation = function operation(opr){
	var operator = "";
	switch(opr) {
	    case "Plus":
	        operator = "+";
	        break;
	    case "Minus":
	        operator = "-";
	        break;
	    case "Multiply":
	        operator = "*";
	        break;
	    case "Divide":
	        operator = "/";
	        break;
	}

	return operator;        
}


// module.exports = Cal;