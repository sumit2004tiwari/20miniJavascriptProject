const copy = document.getElementsByClassName("copy-btn")[0];
let lengthp = document.getElementById("length1");
const uppercasep = document.getElementById("upperwala");
const lowercasep = document.getElementById("lowerwala");
const numberp = document.getElementById("number");
const symbolp = document.getElementById("symbol");
let generatep = document.getElementById("create");
let passwordinput = document.getElementById("printpass")

console.log(generatep);
   


const uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseStr = 'abcdefghijklmnopqrstuvwxyz';
const numberStr = '012456789';
const symbolStr = '`~!@#$%^&*()_+=-]}{[;:"/?><,.';

let str = '';
let Password = '';

generatep.addEventListener('click' , () => {
    if(uppercasep.checked){
        str += uppercaseStr;
        
    }
     if(lowercasep.checked){
        str += lowercaseStr;
        
    }
     if(numberp.checked){
        str += numberStr;
    }
     if(symbolp.checked){
        str += symbolStr;
    }
    console.log( "str" , str);
    
    for(let i =0; i<lengthp.value ; i++){
         let index = Math.floor(Math.random() * str.length);
         Password += str[index];
    }
    console.log(Password)
     passwordinput.value =  Password;
   
    
});

   copy.addEventListener('click', async () => {
    try {
        // Use the Clipboard API to copy text
        await navigator.clipboard.writeText(passwordinput.value);
        alert('Text copied to clipboard');
    } catch (err) {
        alert('Unable to copy text to clipboard');
    }
});
