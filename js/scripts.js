$(document).ready(function() {
$("form#ping-pong").submit(function(event) {
  event.preventDefault();
var number = parseInt($("input#number").val());
console.log(number)
var array = [ ];
console.log(array)

for (var i = 1; i <= number; i++) {
  array.push(i);
};

$("#result").text(array);
  });
});
