console.log("from operator.js file");

// let sumVal=0;
// for (let count = 0; count <=100; count++) {
//     sumVal+=count;

// }
// console.log(sumVal);

let value = 88;
console.log(value);

// value=value+5;
value += 5;

console.log(value);
value = value + 1;
console.log(value);
value += 1;
console.log(value);
value++; // increment operator
console.log(value);
value--; // decrement operator
console.log(value);

// comparison  operator
//  == && ===

let val1 = 10;
let val2 = "10";

console.log(typeof val1);
console.log(typeof val2);
console.log(val1 == val2);
console.log(val1 === val2);

let studentName = "Dinesh";
let mark = 80;
let result = "";
if (mark >= 50) {
  result = "pass";
} else {
  result = "fail";
}
console.log(result);

const result1 = mark >= 50 ? "pass" : "fail";
console.log(result1);

// Dinesh have aggregated 50 mark and result is pass
console.log(
  studentName + " have aggregated " + mark + " mark and result : " + result
);
console.log(
  `${studentName} have aggregated ${mark} mark and result : ${
    mark >= 50 ? "pass" : "fail"
  }`
);

console.log(20 + 20);
console.log("20" + 20);
console.log(20 + "20");
console.log(20 + 20 + "20");
console.log(20 / "20");
console.log("20" / "20");
console.log("20" / 20);
console.log(20 * "20");

var pMark = 40;
var cMark = 50;
var mMark = 44;

var markArr = [40, 50, 44];
console.log(markArr[0]);
console.log(markArr[1]);
console.log(markArr[2]);
var detailsArr = [1, 23, 34, true, "diensh", [2, 4]];
console.log(detailsArr[0]);
console.log(detailsArr[1]);
console.log(detailsArr[2]);
console.log(detailsArr[3]);
console.log(detailsArr[4]);
console.log(detailsArr[5]);
console.log(detailsArr[5][0]);
console.log(detailsArr[5][1]);
detailsArr[6] = "Tausif";

console.log(detailsArr[6]);
detailsArr[7] = "Khan";
console.log(detailsArr[7]);

detailsArr.push("Khan 1");
detailsArr.push("Khan 2");
detailsArr.push("Khan 3");
console.log(detailsArr);
// var studentDetail={
//     name:
// }

var pMark = 40;
var cMark = 50;
var mMark = 44;

var markObj = {
  physics: 40,
  chem: 50,
  math: 44,
};
console.log(markObj.physics)
console.log(markObj.chem)
console.log(markObj.math)
// console.table(markObj)

