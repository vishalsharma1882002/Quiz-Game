const questions = [
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
const question = document.querySelector(".question");
const options = document.querySelector(".options");
const nextBtn = document.querySelector(".nextBtn");

let currQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  let currQuestion = questions[currQuestionIndex];
  let questionNo = currQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currQuestion;

  currQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    options.appendChild(button);
  });
}
startQuiz();
