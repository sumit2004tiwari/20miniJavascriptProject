const budget = document.getElementById("bud");
const input = document.getElementById("inp");
const cancel = document.getElementById("cancel");
const show = document.getElementsByClassName("budget1");
const update = document.getElementById("update");
const remain = document.getElementById("remain");
const expense = document.getElementById("expense");
const submit = document.getElementById("submit");
const enterexpances = document.getElementById("enter-expanse");
const selection = document.getElementById("expenses");
const setDefault = document.getElementById("default");
const ol = document.getElementById("ul");
const filter = document.getElementById("filter");
const include = document.getElementById("include");
let filterCategory = document.getElementById("filterCategory");
const modallist = document.getElementById("ol");
const other = document.getElementById("otherText");
console.log(other);
const sample = document.getElementById("expenses");
const editbtnInList = document.getElementById('editbtn');
const finalEdit = document.getElementById("editbtn");
const translate = document.getElementById("google_translate_element")

console.log(ol);
let sum,
  list,
  arr,
  otherValue,
  otherTextValue,
  inputValue,
  myObject,
  removebutton,
  createList,
  inArr = [],
  strArr = [],
  enterexpancesValue,
  textNode,
  enterexpancesval,
  selectionValue;

// Function to show the budget modal
function showBudgetModal() {
  document.querySelector(".modal").style.display = "block";
}
function showOtherCategory() {
  // show the category when we click on other category
  if (sample.value == "other") {
    other.style.display = "block";
  } else {
  }
}
// Function to close the budget modal
function closeBudgetModal() {
  document.querySelector(".modal").style.display = "none";
}

// Function to update the budget and handle remaining calculations
function updateBudget() {
  inputValue = parseInt(input.value); // Set inputValue here
  budget.innerHTML = `$ ${inputValue}`;
  input.value = "";
  closeBudgetModal();
}
// Function to handle expenses list
let id;
function expensesList() {
  enterexpancesValue = parseFloat(enterexpances.value);
  selectionValue = selection.value;
  console.log(selection.value)
  id = strArr.length;
 // Calculate remaining budget and update the display
  inArr.push(parseInt(enterexpances.value));
  sum = inArr.reduce((cumm, currval) => cumm + currval, 0);
  expense.innerHTML = `$ ${sum}`;

  if (typeof inputValue === "undefined" || isNaN(inputValue)) {
    alert("Please enter a valid budget amount.");
    submit.disabled = true;
  } else  {
    remainingBudget = inputValue - sum;
   remain.innerHTML = `$ ${remainingBudget}`;
  }
    if (remainingBudget <= 0) {
    alert("please recharge your wallet");
    submit.disabled = true;
  } else {
    submit.disabled = false; // Enable the submit button
  }
  myObject = {
    expanseval: enterexpancesValue,
    selectionval: selectionValue,
    id: id
  };
  console.log(myObject);
  strArr.push(myObject);
  localStorage.setItem("array", JSON.stringify(strArr));
 
  getUi();
  selection.value = "select";
}
function getUi() {
  let getData = JSON.parse(localStorage.getItem("array"));
  ol.innerHTML = "";
  console.log(getData);
  getData.forEach((item, ind) => {
    list = document.createElement("list");
    list.classList.add("list");
    list.setAttribute('id', ind)

    let text = `expenses: $${item.expanseval}, category: ${item.selectionval}`;
    list.textContent = text;

    ol.appendChild(list);

    // create remove button
    const removebutton = document.createElement("button");
    removebutton.innerHTML = "Remove";
    removebutton.classList.add("rembtn");

    list.appendChild(removebutton);
    removebutton.addEventListener("click", function (e) {
      let currutLi = e.target.closest("list");
      console.log(currutLi);
      getData.splice(ind , 1);
      localStorage.setItem("array" , JSON.stringify(getData));
      console.log(getData)
      getUi();
      

    });
   // ol.appendChild(list);
    // create edit button
    const edtibutton = document.createElement("button");
    edtibutton.innerHTML = "Edit";
    edtibutton.classList.add("editbtn12");
    edtibutton.setAttribute("onclick", "showEditModal(event)");
    edtibutton.setAttribute("id", `${ind}`);
     list.appendChild(edtibutton);
    ol.appendChild(list);
    
  });
}


function filterList() {
  filterCategory = filterCategory.value;
  let filteredArr = strArr.filter((el) => el.selectionval === filterCategory);
  let allFilterList = document.createElement("ol");
  console.log("filterarray" + allFilterList);
  allFilterList.id = "newFillterList";

  filteredArr.forEach((item) => {
    let createList = document.createElement("li");
    createList.classList.add("filterlist");
    createList.innerHTML = `expenses: $${item.expanseval}, category: ${item.selectionval}`;
    // Append the new list item to the ol element
    allFilterList.appendChild(createList);

    ol.style.display = "none";
    ol.parentNode.appendChild(allFilterList);
  });
}
function generateCategory(event) {
  if (event.key == "Enter") {
    other.style.display = "none";
    let option = document.createElement("option");
    let option1 = document.createElement("option");
    let datasend = other.value;
    localStorage.setItem("daata", JSON.stringify());
    option.innerText = other.value;
    option1.innerText = other.value;
    sample.appendChild(option);
    filterCategory.appendChild(option1);
    other.value = "";
    selection.value = "select";
  }
}
function showFilterList() {
  ol.style.display = "block";
  modallist.style.display = "block";
}
function showEditModal(e) {
  let editmodal = document.querySelector(".editModal");
  let editid = document.querySelector("#editid");
  let editCate = document.getElementById("editCate")
  
  editmodal.style.display = "block";
   let currentList = e.target.closest("list");
   console.log(currentList);
   let currentid =  currentList.getAttribute('id');
   console.log(currentid)
   let storedata = JSON.parse(localStorage.getItem('array'));
   console.log(storedata)

   for (let i = 0; i < storedata.length; i++) {
       if(storedata[i].id == parseInt(currentid)){ 
         let selectionValueLocalStorage = storedata[i].selectionval;
          let expanseValueLocastorage = storedata[i].expanseval;
          console.log(expanseValueLocastorage);
          console.log(selectionValueLocalStorage);
          editid.value = expanseValueLocastorage;
          editCate.value = selectionValueLocalStorage;
          break;
       }          
    }
    editbtnInList.addEventListener('click',()=>{
      const editStoredata = JSON.parse(localStorage.getItem("array"));
      console.log(editStoredata)
      let neweditValue = editid.value;
      let neweditCategory = editCate.value;
      let  mynewObject = {
        expanseval : neweditValue,
        selectionval : neweditCategory
         
      }
       console.log(mynewObject)
       //  console.log(strArr)
       const goToindex= editStoredata.findIndex(item=> item.id == currentid)
         
         if (goToindex !== -1) {
            editStoredata[goToindex].expanseval = neweditValue;
            editStoredata[goToindex].selectionval = neweditCategory;
            localStorage.setItem("array" , JSON.stringify(editStoredata));
            getUi()
         }else{

         }
       console.log(goToindex)

       document.querySelector(".editModal").style.display = "none";
     })


}


  


// Event listeners
budget.addEventListener("click", showBudgetModal);
update.addEventListener("click", updateBudget);
cancel.addEventListener("click", closeBudgetModal);
submit.addEventListener("click", expensesList);
include.addEventListener("click", filterList, showFilterList);
sample.addEventListener("click", showOtherCategory);
other.addEventListener("keydown", generateCategory);
//translate.addEventListener("click" , googleTranslateElementInit);


window.addEventListener("load", () => {
  getUi();
  expense.innerHTML = sum;
});






