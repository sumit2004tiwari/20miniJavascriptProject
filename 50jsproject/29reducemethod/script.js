 let sum = document.getElementById("sum");
 let sub = document.getElementById("sub");
 let userInput = document.getElementById("userInput");
 let btn = document.getElementById("btn");

const arr = [1,2,3,4,5,6,7,8,9,10];


 
// from here we start to understand the concept of reeduce method 
// filter method is the method which intake a callback function in it . 
// and a callback function function has two parameter .
// as we see that we can create a array in the first line. now we implement our reduce method on that array.


// as we see that we paas to parameter in reduce method and it will give a single value output

let arr1=[];
 btn.addEventListener("click" , ()=>{
    let value = parseInt(userInput.value);
    arr1.push(value)
    console.log(arr1)

    const reduceMethod = arr1.reduce((cumm , val)=>{
        return cumm + val;
     },0);
     sum.innerHTML = `the sum of all element is : ${reduceMethod}`   

     const reduceMeth = arr1.reduce((cumm , val,)=>{
        return cumm -val;    
     },12000);

     sub.innerHTML = `the sub of all element is : ${reduceMeth}`
       
       
 })
