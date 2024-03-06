 const inputValue = document.getElementById("input");
 const optput = document.getElementById("value");
  
 inputValue.addEventListener('input', (e)=>{
    console.log(e.target.value);
    let key = e.target.value;
    let optput = parseInt(key * 2.2);
    document.getElementById("value").innerHTML = optput;
 })
 