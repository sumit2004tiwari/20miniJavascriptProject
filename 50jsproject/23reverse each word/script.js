let para = document.getElementById("para");
 let paraValue = para.textContent;
  let split = paraValue.split(" ");
  console.log(split)
  
  //  let final = split.map((item) =>{
  //    return item.split("").reverse().join("")
  // });
  // para.innerHTML = ` i am change ${final}`
  // console.log(final)
   let newSplit = split.reverse()
   console.log(newSplit)

    let value = newSplit.map((item)=>{
     return  item.split("").reverse().join("")
    })
     
    console.log(value)
     para.innerHTML = `${value.join(" ")}`

    
