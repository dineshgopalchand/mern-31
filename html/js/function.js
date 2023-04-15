console.log("from function js file");

// var name1 = "Dinesh";
// console.log("My name is " + name1);
// var name2 = "Gopal";
// console.log("My name is " + name2);

function log() {
  console.log("I am inside name Log function");
}
log();

function nameLog(name) {
  console.log("My name : " + name.toUpperCase());
}

var name1 = "Dinesh";
nameLog(name1);
var name2 = "Gopal";
nameLog(name2);

function add(num1, num2) {
  return num1 + num2;
}


var result=add(13322,32433);
console.log(result);
var result=add(3433,78678);
console.log(result);