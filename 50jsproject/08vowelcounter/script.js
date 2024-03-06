 const textarea = document.getElementById('writtenTest');
 const button = document.getElementById('btn');
 const value = document.getElementById('final');



 button.addEventListener('click' , () => {
    if (textarea.value ==='') {
        alert("please enter some text")
    } else {
        const text = textarea.value;

        
     //  count = 0;
    //    for (let i = 0; i < text.length; i++) {
    //     if (text[i] === 'a'|| text[i]==='e'|| text[i]==='i'|| text[i]==='o'||text[i]==='u') {
    //         count++
    //     } 
       
    //    } the uppper code will also right but this 1 line code has better approach
      const count = text.split(/[aeiou]/i).length -1;
      value.innerHTML = count;

       
    }
  
     
 })



