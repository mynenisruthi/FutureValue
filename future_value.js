var $ = function(id) {
    return document.getElementById(id);
};

var calculateFV = function(investmentAmount,interestRate,numberOfYears) {
    var futureValue = investmentAmount;
    for (var i = 1; i <= numberOfYears; i++ ) {
        futureValue += futureValue * interestRate / 100;
    }
    futureValue = futureValue.toFixed(2);
    return futureValue;
};

"use strict";

var processEntries = function(){

    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseInt($("years").value);

    var errorString = "";

    if (isNaN(investment) || investment <= 0 || investment > 100000) {
    	errorString = "Investment must be a number greater than zero and less than or equal to 100,000";
    	$("investment").focus();
    }else if (isNaN(rate) || rate <= 0 || rate > 15) {
    	errorString = "Rate must be a number greater than zero and less than or equal to 15";
    	$("rate").focus();
    }else if (isNaN(years) || years <= 0 || years > 50) {
    	errorString = "Years must be a number greater than zero and less than 50";
    	$("years").focus();
    }
    
    if (errorString == "") {
        $("future_value").value = calculateFV(investment,rate,years);
    }
    else {
    	alert(errorString);
    }

    $("future_value").value = calculateFV(investment,rate,years);
}

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("investment").focus();
};