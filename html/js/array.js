var subjectArr = ["HTML", "CSS", "JS"];
console.log(subjectArr);
subjectArr[subjectArr.length] = "ReactJS";
console.log(subjectArr);
subjectArr.push("Nodejs", "MongoDB");
console.log(subjectArr);
subjectArr.pop();
console.log(subjectArr);
subjectArr.shift();
console.log("shift: ", subjectArr);
subjectArr.unshift("HTML", "Bootstrap");
subjectArr.unshift("HTML", "Bootstrap");
subjectArr.unshift("HTML", "Bootstrap");
console.log(subjectArr);

// const indexVal=subjectArr.indexOf('HTML');
// console.log(indexVal);
const indexVal = subjectArr.indexOf("HTML", 1);
console.log(indexVal);
const lastIndexVal = subjectArr.lastIndexOf("HTML");
console.log(lastIndexVal);
const indexVal1 = subjectArr.indexOf("ExpressJS");
console.log(indexVal1);

var subjectArr1 = ["HTML", "CSS", "JS"];
var subjectArr2 = ["MongoDB", "ExpressJS", "nodejs"];

// const mergedSubjectArr=subjectArr1.concat(subjectArr2);
const mergedSubjectArr = [].concat(subjectArr1, subjectArr2);
console.log(mergedSubjectArr);

const mergedSubjectArrUsingSpread = [...subjectArr1, ...subjectArr2];
console.log(mergedSubjectArrUsingSpread);

mergedSubjectArrUsingSpread.splice(3, 1, "Mongo DB", "React");
console.log(mergedSubjectArrUsingSpread);
mergedSubjectArrUsingSpread.splice(3, 1);
console.log(mergedSubjectArrUsingSpread);
mergedSubjectArrUsingSpread.splice(0, 0, "mongodb");
console.log(mergedSubjectArrUsingSpread);
const slicedArr = mergedSubjectArrUsingSpread.slice(0, 3);
console.log(slicedArr);

const mappedArr = mergedSubjectArrUsingSpread.map((course, index) => {
  return {
    // id: 'COURSE00'+(index+1),
    id: `COURSE00${index + 1}`,
    name: course,
  };
});
console.log(mappedArr);
console.log(mergedSubjectArrUsingSpread);
const filteringVal = "JS";
const filteredSubjectArr = mergedSubjectArrUsingSpread.filter((subject) => {
  //   return subject.indexOf(filteringVal) != -1
  //   return subject.toLowerCase().indexOf(filteringVal.toLowerCase()) != -1
  const regEx = new RegExp(`${filteringVal}`, "i");
  return subject.match(regEx);
});
console.log(filteredSubjectArr);

const FormattedFilteredSubjectArr = mergedSubjectArrUsingSpread
  .filter((subject) => {
    const regEx = new RegExp(`${filteringVal}`, "i");
    return subject.match(regEx);
  })
  .map((course, index) => {
    return {
      id: `COURSE00${index + 1}`,
      name: course,
    };
  });
console.log(FormattedFilteredSubjectArr);

// nestedArr=[1, 2, [3, 4], [5, 6], [[7, 8]], [[[9, 10]]]];
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(nestedArr.flat(4));
