const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const btn = document.getElementById("btn");
const final = document.getElementById("final");
const sumit = document.getElementById("sumit");

btn.addEventListener('click' , ()=>{
    let billAmount  = parseInt(bill.value);
     console.log(billAmount);
    let tipAmount = parseInt(tip.value);
      console.log(tipAmount);
      const val = (tipAmount/100)*billAmount;
      const apple  = val+ billAmount
      sumit.innerHTML = `the total amount is ${apple}`
})
