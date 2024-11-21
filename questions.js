const allQuestions = [
  {
    question: "What is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the smallest in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Spain", correct: false },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Sahara", correct: false },
      { text: "Gobi", correct: false },
      { text: "Kalahari", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
    ],
  },
];
let questionElement = document.querySelector(".questionText");
let options = document.querySelectorAll(".option");
let nextBtn = document.querySelector(".next");
let i = 0;
let score=0

//loading question
function loadQuestion() {
  let currQuestion;
  currQuestion = allQuestions[i];
  questionElement.innerHTML = [i+1] + ". " + currQuestion.question;
  options.forEach((option, index) => {
    option.innerHTML = currQuestion.answers[index].text;
    option.dataset.correct = currQuestion.answers[index].correct;
     // Attach correct info
  });
}
options.forEach((option)=>{
  option.addEventListener("click",(e)=>{
    const isCorrect = e.target.dataset.correct==="true"
    if(isCorrect){
      e.target.classList.add("correct") //applyinng correct css properties
      score++
    } else{
      e.target.classList.add("incorrect")
    }
    //disable further clicks
    options.forEach((opt)=>{
      opt.classList.add("disable")
    })
  })
})
nextBtn.addEventListener("click",()=>{
  i++
  if(i<allQuestions.length){
    options.forEach((opt)=>{
      opt.classList.remove("correct","incorrect","disable")
    })
    loadQuestion();
  }
  else{
    questionElement.innerHTML="Quiz is Completed!"+" Your Score is " + score + "/" + allQuestions.length
    options.forEach((opt)=>{
      opt.style.display="none"
      nextBtn.style.display="none"
    })
  }

})
loadQuestion();
