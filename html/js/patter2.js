// pattern 2
//     *
//    ***
//   *****
//  *******
// *********
totalLineNum=10;
for(lineCount=1;lineCount<=totalLineNum;lineCount++){
    // loop for spacing
    let lineValue='';
    for(let spaceCount=1;spaceCount<=totalLineNum-lineCount;spaceCount++){
        lineValue+=' ';
    }

    // loop for *(star)
    for(let starCount=1;starCount<=2*lineCount -1;starCount++){
        lineValue+='*';
    }
    console.log(lineValue);
}
