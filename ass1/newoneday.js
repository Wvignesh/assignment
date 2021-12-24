  
var person = {
  fname: "Nick",
  lname: "Jonas",   // forin  loop
  age: 26
}; 
for (let x in person) {
  console.log(x + ": "+ person[x])
}


var numbers = [ 10, 20, 30, 40, 50] 
for (var i=0; i < numbers.length; i++) {    // for loop
   console.log(numbers[i])                
}


var names = ["jerry", "tom", "pluto", "micky", "mini"];
names.forEach(function1);
function function1(currentValue, index) {                      // foreach loop
   console.log("Index in array is: "+index + " ::  Value is: "+currentValue);
}


const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {     // for of loop
  text += x;
}
console.log (cars);
  


