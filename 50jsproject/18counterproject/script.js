const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const value = document.getElementById("value");
 let count = 0;
 btn1.addEventListener('click' , ()=>{
    let plus =  count++;
    value.innerHTML = `${plus}`
  })
 btn2.addEventListener('click' , ()=>{
     count = 0;
     value.innerHTML = `${count}`;
 }) ;
 btn3.addEventListener('click' , ()=>{
    count--;
    value.innerHTML = `${count--}`
 })