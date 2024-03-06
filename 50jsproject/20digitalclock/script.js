const value = document.getElementById("value");
 let hours;
 let minutes;
 let second;

setInterval(() => {
    let d = new Date();
     hours = d.getHours();
     minutes = d.getMinutes();
     second = d.getSeconds();
     value.innerHTML = `${hours} : ${minutes} : ${second}`;
    
}, 1000);
