 const inputField = document.getElementById("password");
 const outputField = document.getElementById("output");
 
  inputField.addEventListener('input' , function(){
 const inputValue = inputField.value;
 console.log(inputValue);

 if (inputValue.length < 8) {
    outputField.innerText = 'password are too short';
    outputField.style.color = "red";
 } else {
 
       if (inputValue.search(/[a-z]/) == -1 ) {
          outputField.innerText = "password has missing lowercase";
          outputField.style.color = 'red';
    
       }else if(inputValue.search(/[A-Z]/) == -1){
          outputField.innerText = " password is missing Uppercasae";
          outputField.style.color = 'red';

       } else if(inputValue.search(/[0-9]/) == -1){
          outputField.innerText = "pasword has missing number";
          outputField.style.color = 'red'

       } else if(inputValue.search(/[`\~\!\@\#\$\%\^\&\*\(\_\+\=\-\[\'\;\"\:\{\}]/) == -1){
          outputField.innerText = "password are missing special character";
          outputField.style.color = "red"
       }
         
       else{
          outputField.innerText = "Password are very strong ";
          outputField.style.color = 'green';
      }
 }
  })