var counter = function(number){
  var array = [ ]
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0){
      array.push(" " + "pingpong");
    } else if (i % 5 === 0){
      array.push(" " + "pong");
    } else if (i % 3 === 0){
      array.push(" " + "ping");
    } else
      array.push(" " + i);
    }
  };
  return array;
};


$(document).ready(function() {
$("form#ping-pong").submit(function(event) {
  event.preventDefault();
  var number = parseInt($("input#number").val());
  var userOutput = counter(number)
  console.log(number)

    for (var i = 0; i < userOutput.length; i++){
      $("#result").append("<li>" + userOutput[i]) + "</li>");
    }
  });
});
