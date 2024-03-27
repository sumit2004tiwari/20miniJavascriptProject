let num = 5436;
//  function reverseNumber(){
//       num.toString().split("").reverse().join();

//  }
   let revnum = 0; 
   function reverseNumber(){

      while (num>0) {
         let rem =  num%10;
         console.log(rem)
         revnum = rem*10
         console.log(revnum)
         console.log("f")
      }
    
   }
 reverseNumber();
 