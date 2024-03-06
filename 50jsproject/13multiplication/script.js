const question = document.getElementById("que");
const answer = document.getElementById("num");
const button = document.getElementById("button");
const val = document.getElementById("print");

let a = Math.floor(Math.random()* 10);
console.log(a);
let b = Math.floor(Math.random()*100);
console.log(b)
question.innerHTML = `${a} * ${b}`;

 button.addEventListener( 'click' , () => {
    const final =  a*b;
    let count = 0;
    // return final;
    const userValue = answer.value;
    if (parseInt(userValue) === final) {
       console.log("its same")
       val.innerHTML = ` yes you are right`
       count++;
       console.log(count);

    }
    else{
      console.log("not same bro !");
    }
 })