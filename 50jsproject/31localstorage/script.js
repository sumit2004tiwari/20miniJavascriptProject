let text = document.getElementById("text");
let btn = document.getElementById("btn")
let ol = document.getElementById("ol");
let arr = [];
let newArr;
let value;
let final;
let localdata;

btn.addEventListener("click" , ()=>{
    value  = text.value;
    arr.push(value);
    
    localStorage.setItem("data", JSON.stringify(arr));
    let dataa  =JSON.parse(localStorage.getItem("data"));
    
    text.value = "";
    displayUi(dataa);
    
})
function displayUi(d){
    ol.innerHTML = "";
    d.map(item =>{
        let list = document.createElement('li');
        list.textContent = item;
        ol.appendChild(list)
    })
}

window.addEventListener("load",()=>{
    let dataa  =JSON.parse(localStorage.getItem("data"));
    displayUi(dataa)
})
