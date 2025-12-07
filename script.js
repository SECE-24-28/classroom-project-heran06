const questions = [
  {
    text: "Which keyword declares a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    correctIndex: 2
  },
  {
    text: "Which method logs output to the console?",
    options: ["print()", "log()", "console()", "console.log()"],
    correctIndex: 3
  },
  {
    text: "Which is NOT a JavaScript data type?",
    options: ["number", "string", "boolean", "character"],
    correctIndex: 3
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;

const questionText = document.getElementById("question-text");
const questionCount = document.getElementById("question-count");
const optionButtons = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const q = questions[currentQuestionIndex];

  questionText.textContent = q.text;
  questionCount.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;

  q.options.forEach((option, i) => {
    optionButtons[i].textContent = option;
  });

  selectedOptionIndex = null;

  optionButtons.forEach(btn => {
    btn.classList.remove("bg-teal-400/60", "text-gray-900");
    btn.classList.add("bg-white/20");
    btn.classList.add("hover:bg-white/30");
  });
}


optionButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    selectedOptionIndex = index;

    optionButtons.forEach(b => {
      b.classList.remove("bg-teal-400/60", "text-gray-900");
      b.classList.add("bg-white/20");
      b.classList.add("hover:bg-white/30");
    });

    btn.classList.remove("bg-white/20");
    btn.classList.remove("hover:bg-white/30");
    btn.classList.add("bg-teal-400/60", "text-gray-900");
  });
});

nextBtn.addEventListener("click", () => {
  if (selectedOptionIndex === null) {
    alert("Please select an answer before going next.");
    return;
  }

  const currentQ = questions[currentQuestionIndex];
  if (selectedOptionIndex === currentQ.correctIndex) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    questionText.textContent = `Quiz Completed! Your score is ${score} / ${questions.length}`;
    optionButtons.forEach(btn => (btn.style.display = "none"));
    nextBtn.style.display = "none";
    questionCount.textContent = "";
  }
});

loadQuestion();
