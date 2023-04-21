let numberVal = 89889983;
// let result=numberVal%2==0?'even':'odd';
// let result='odd';

// if(numberVal%2==0){
//     result='even';
// }
// console.log(result);
let result = "";

if (numberVal % 2 == 0) {
  result = "even";
} else {
  result = "odd";
}
console.log(result);

const gender = "F";
if (gender == "M") {
  console.log("Male");
} else if (gender == "F") {
  console.log("Female");
} else {
  console.log("other");
}

const currentDate = new Date();
console.log(currentDate);
const dayValue = currentDate.getDay();
// const dayArr=['SUN','MON','TUE','WED','THR','FRI','SAT'];
// console.log(dayArr[dayValue]);

switch (dayValue) {
  case 0:
    console.log("SUN");
    break;
  case 1:
    console.log("MON");
    break;
  case 2:
    console.log("TUE");
    break;
  case 3:
    console.log("WED");
    break;
  case 4:
    console.log("THR");
    break;
  case 5:
    console.log("FRI");
    break;
  case 6:
    console.log("SAT");
    break;
}

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// start=1;
// num=num+1;
// end=5;
// num<=end;
// num=num+1;

// while
// var num=6;
// var sum=0;
// while(num<=5){
//     console.log(num);
//     sum+=num;
//     num+=1;
// }
// console.log(sum);

// do while
// var num=1;
// var sum=0;
// do{
//     console.log(num);
//     sum+=num;
//     num+=1;
// } while(num<=5)
// console.log(sum);
// for
// for(init;condtion;update/increment/decrement)
// var sum=0;
// for(let num=0;num<=5; num+=1){
//     console.log('for loop',num);
//     sum+=num;
// }
// console.log(sum);

// forof-> array
// forin ->object

// fibonacci series
// 0,1,1,2,3,5,8,13,21

let num1 = 0,
  num2 = 1;
let fiboSeries = [];
for (let count = 0; count <= 10; count++) {
  // console.log(num1);
  fiboSeries.push(num1);
  let sum = num1 + num2;
  num1 = num2;
  num2 = sum;
}
// console.log(fiboSeries);
// const incrementedFiboSeries=fiboSeries.map(num=>num+1);
// const incrementedFiboSeries = fiboSeries.map((num, index) =>
//   index % 2 == 0 ? num + 2 : num + 3
// );
// console.log(incrementedFiboSeries);


// [].foreach
// const doubleFiboNum=[];
// fiboSeries.forEach(item=>{
//     // console.log(item);
//     // console.log(item*2);
//     doubleFiboNum.push(item*2);
// })
// console.log(doubleFiboNum);

for (const fiboNum of fiboSeries) {
    console.log(fiboNum);
}
for (const fiboNumIndex in fiboSeries) {
    console.log(fiboNumIndex);
    console.log(fiboSeries[fiboNumIndex]);
}


// Assignment
// check a number is prime or not
// get top 50 prime number
// get addition of top 30 prime number


