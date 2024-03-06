const date = document.getElementById("dateTime");
const button = document.getElementById("btn");
const final = document.getElementById("final");

button.addEventListener('click' , () => {
    const dateValue = new Date(date.value); 
    const dob = dateValue.getFullYear();
    const now = new Date();
    const now_year = new Date(now.getFullYear());
    const age = now_year - dob;
   
      final.innerHTML = `your age is : ${age}`
})
