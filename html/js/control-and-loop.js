let numberVal=89889983;
// let result=numberVal%2==0?'even':'odd';
// let result='odd';

// if(numberVal%2==0){
//     result='even';
// }
// console.log(result);
let result='';

if(numberVal%2==0){
    result='even';
}else{
    result='odd';
}
console.log(result);


const gender='F';
if(gender=='M'){
    console.log('Male');
}else if(gender=='F'){
    console.log('Female')
}else{
    console.log('other')
}

const currentDate= new Date();
console.log(currentDate);
const dayValue=currentDate.getDay();
// const dayArr=['SUN','MON','TUE','WED','THR','FRI','SAT'];
// console.log(dayArr[dayValue]);

switch (dayValue) {
    case 0:
        console.log('SUN');  
        break;
    case 1:
        console.log('MON');  
        break;
    case 2:
        console.log('TUE');  
        break;
    case 3:
        console.log('WED');  
        break;
    case 4:
        console.log('THR');  
        break;
    case 5:
        console.log('FRI');  
        break;
    case 6:
        console.log('SAT');  
        break;
}