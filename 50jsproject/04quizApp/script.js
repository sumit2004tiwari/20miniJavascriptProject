const quiz = [
{
    question : "what is the most  popular programming langauage in 2021",
    option1 : "java",
    option2 : "python",
    option3 : "html ",
    option4 : "javascript ",
    answer : "javascript"

},
{
    question : " who is the president of india",
    option1 : "dropidi murmu",
    option2 : "modi",
    option3 : "yogi ",
    option4 : "donald trump ",
    answer : "dropidi murmu"

},
{
    question :" what does HTML stand for",
    option1 : "hyper text mark up langauge",
    option2 : "random access memory",
    option3 : "read only memory ",
    option4 : "helicopter transfer me lelo ",
    answer : "hyper text mark up langauage"
},
{
    question : " javascript was lauched in the year of",
    option1 : "1995",
    option2 : "1965",
    option3 : "1925 ",
    option4 : "2006 ",
    answer : "1995"
}

]
 let question = document.getElementById("question");
 let option1 = document.getElementById("text-option-a");
 let option2 = document.getElementById("text-option-b");
 let option3= document.getElementById("text-option-c");
 let option4 = document.getElementById("text-option-d");
 let answer = document.querySelectorAll(".answer")

 const submit = document.getElementById("btn");
  
 let currentQuestion = 0;
  let score =0;
  console.log(quiz[currentQuestion].question);
  console.log(quiz[currentQuestion].option1);
  console.log(quiz[currentQuestion].option2);
  console.log(quiz[currentQuestion].option3);
  console.log(quiz[currentQuestion].option4);

  question.textContent = quiz[currentQuestion].question;
  option1.textContent = quiz[currentQuestion].option1;
  option2.textContent = quiz[currentQuestion].option2;
  option3.textContent = quiz[currentQuestion].option3;
  option4.textContent = quiz[currentQuestion].option4;

  submit.addEventListener("click" , () =>{
    answer.forEach((item) => {
        console.log(item.checked);
    })

  })

 

