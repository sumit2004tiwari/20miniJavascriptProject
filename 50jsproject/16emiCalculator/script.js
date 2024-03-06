const loan = document.getElementById("loanAmount");
const intrest = document.getElementById("Intrest");
const months = document.getElementById("months");
const btn = document.getElementById("btn");
const final = document.getElementById("final");

// let loan = 10k
// let intrest = 10% 
// let time = 12
// (10/100)* 10000 



btn.addEventListener('click' , ()=>{

     const intrestValue = parseInt(intrest.value);
     const loanValue =parseInt(loan.value);
     const monthsValue = parseInt(months.value);
     let val = (loanValue*intrestValue)/monthsValue
     console.log(loanValue);
     console.log(intrestValue);
     console.log(monthsValue)
     
     final.innerHTML = `you need to pay ${val} per months`;
})