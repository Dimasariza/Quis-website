const quizData = [
  {
    question: "How old is florin?",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2020?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborghini",
    correct: "a",
  },
  {
    question: "What your was JavaScript launched?",
    a: "2020",
    b: "2019",
    c: "2018",
    d: "none of the above",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  const answersEls = document.querySelectorAll(".answer");

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      console.log(answerEl.id);
      console.log(answerEl.value);
    }
    console.log(answerEl.checked);
  });
}

submitBtn.addEventListener("click", () => {
  currentQuestion++;

  getSelected();

  currentQuestion < quizData.length ? loadQuiz() : alert("You finished. Good job dude");

  const answersEls = document.querySelectorAll(".answer");
  answersEls.forEach((answersEl) => {
    console.log(answersEl.value);
  });
});
