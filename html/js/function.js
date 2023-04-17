console.log("from function js file");

// function logFn() {
//   console.log("I am inside name Log function");
// }
// const logFn = function () {
//   console.log("I am inside name Log function");
// };
// const logFn = () => {
//   console.log("I am inside name Log function");
// };
const logFn = () => console.log("I am inside name Log function");
logFn();

// function nameLog(name) {
//   console.log("My name : " + name.toUpperCase());
// }
// const nameLog = function (name) {
//   console.log("My name : " + name.toUpperCase());
// };
const nameLog = (name) => console.log("My name : " + name.toUpperCase());
nameLog("santosh");

// function showFullName(fname, lname) {
//   // console.log("My name : " + fname + ' '+lname);
//   // console.log('inside showfullNameFunction')
//   return `My name ${fname} ${lname}`;
// }
// const showFullName = function (fname, lname) {
//   // console.log("My name : " + fname + ' '+lname);
//   console.log('inside showfullNameFunction')
//   return `My name ${fname} ${lname}`;
// };
// const showFullName =  (fname, lname)=> {
//   // console.log("My name : " + fname + ' '+lname);
//   console.log('inside showfullNameFunction')
//   return `My name ${fname} ${lname}`;
// };
const showFullName = (fname, lname) => `My name ${fname} ${lname}`;

// showFullName('dinesh','gopal');
let fullName = showFullName("dinesh", "Gopal");
console.log(fullName);

// var name1 = "Dinesh";
// nameLog(name1);
// var name2 = "Gopal";
// nameLog(name2);

// function add(num1, num2) {
//   return num1 + num2;
// }

// var result=add(13322,32433);
// console.log(result);
// var result=add(3433,78678);
// console.log(result);

// self invoking function
// (function () {
//   console.log("I am inside anonymous function");
// })();
// (function (name) {
//   console.log("I am inside anonymous function " + name);
// })("Ramesh");
((name) => {
  console.log("I am inside anonymous function " + name);
})("Ramesh");
