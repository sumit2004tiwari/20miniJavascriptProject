const user = document.getElementById("user");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const restart = document.getElementById("reset");
const dmin = parseInt(user.innerHTML);
console.log(dmin);
 let minute = 25;
 let second = 0;
 let timerId;

 start.addEventListener('click' , ()=> {
    start.disabled = true;
    timerId = setInterval(() => {
        if(second==0){
            second =59;
            minute--;
        }else{
            second--;
        }
        user.innerHTML = `${minute} : ${second}`;
        
    }, 1000);
 })
  pause.addEventListener('click' , () =>{

     clearInterval(timerId);
     start.disabled = false;
     

  })
 restart.addEventListener('click' , () => {
    minute =25;
    second = 00;
    user.innerHTML = `${minute} : 00}`
 })