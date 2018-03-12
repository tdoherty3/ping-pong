$(document).ready(function() {
$("form#ping-pong").submit(function(event) {
  event.preventDefault();
var number = parseInt($("input#number").val());
console.log(number)
var array = [ ];
console.log(array)


for (var i = 1; i <= number; i++) {
  array.push(" " + i);
};

$("#result").text(array);
  });
});


// Attempts at getting the array into an ordered list, in js:

// array.push(<ol> " " + i </ol>);

// array += ("<ol>"  + array + "</ol>");

// or in html

// $("#result").text("<ol>"array"</ol>");

// $("#result").text(<ol>array</ol>);




// Attempts at for loops:

//for (var i = 1; i <= number; i++) {
//  if (i % 3 === 0){
//  array.push(" " + "ping");
//  } else if (i % 5 === 0){
//    array.push(" " + "pong");
//  } else if (i % 3 === 0 && i % 5 === 0);
//    array.push(" " + "pingpong");
//  } else
//    array.push(" " + i);
//  };


//for (var i = 1; i <= number; i++) {
  //if (i !% 3 === 0 && i !% 5 === 0){
    //array.push(" " + i);
  //} else if (i % 3 === 0){
    //array.push(" " + "ping");
  //} else if (i % 5 === 0){
    //array.push(" " + "pong");
  //} else if (i % 3 === 0 && i % 5 === 0);
  //array.push(" " + "pingpong");
//};
