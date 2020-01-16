var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() { 
  $("form#add").submit(function(event) {
    event.preventDefault(); 

    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $("form#subtract").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#sub-1").val());
    var number2 = parseInt($("#sub-2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("form#multiplication").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#multi-1").val());
    var number2 = parseInt($("#multi-2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#divide-1").val());
    var number2 = parseInt($("#divide-2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
}); 