const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitBtn = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");
const refreshBtn = document.getElementById("refresh-btn");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is the largest country in the world?",
    choices: ["Russia", "China", "USA", "Brazil"],
    answer: "Russia",
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yuan", "Dollar", "Euro", "Yen"],
    answer: "Yen",
  },
  {
    question: "What is the capital of Canada?",
    choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "What is the smallest country in the world by land area?",
    choices: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
    answer: "Vatican City",
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Venus", "Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "Which artist painted the famous Mona Lisa portrait?",
    choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the tallest mammal in the world?",
    choices: ["Elephant", "Giraffe", "Hippopotamus", "Rhinoceros"],
    answer: "Giraffe",
  },
  {
    question: "What is the capital of South Africa?",
    choices: ["Johannesburg", "Durban", "Cape Town", "Pretoria"],
    answer: "Pretoria",
  },
];

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  choicesElement.innerHTML = "";

  currentQuestion.choices.forEach((choice) => {
    const choiceElement = document.createElement("div");
    choiceElement.classList.add("choice");
    choiceElement.textContent = choice;
    choiceElement.addEventListener("click", () => {
      if (choice === currentQuestion.answer) {
        score++;
        choiceElement.classList.add("selected");
      } else {
        choiceElement.classList.add("wrong");
      }

      // Disable all other choices
      choicesElement.querySelectorAll(".choice").forEach((choice) => {
        choice.removeEventListener("click", () => {});
      });

      submitBtn.disabled = false;
    });

    choicesElement.appendChild(choiceElement);
  });
}

function showScore() {
  const percentage = ((score / questions.length) * 100).toFixed(2);
  scoreElement.textContent = `Your score is ${score} out of ${questions.length} (${percentage}%)`;
  submitBtn.disabled = true;
  refreshBtn.style.display = "block";
}

showQuestion();

submitBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showScore();
  }
});

refreshBtn.addEventListener("click", () => {
  location.reload();
});
