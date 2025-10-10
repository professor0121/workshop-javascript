


// console.log(test2);

// var test2=function(){
//     console.log("hello")
// }


// const test1=()=>{
//     console.log("console")
// }
// test1();
// //output is undifine


//create a function taing an input as a sting and check the input string is a palindrom


const checkPlandrom=(str)=>{
    const cleanStr = str.toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(checkPlandrom("ada"));
