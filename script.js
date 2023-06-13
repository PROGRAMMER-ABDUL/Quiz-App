var quizData = [
  {
    question: "What is the primary input device for a computer?",
    option: ["Keyboard", "Mouse", "Monitor", "Printer"],
    correctAns: 0
  },
  {
    question: "What is the standard file extension for a web page?",
    option: [".html", ".txt", ".doc", ".exe"],
    correctAns: 0
  },
  {
    question: "Which of the following is an example of an operating system?",
    option: ["Microsoft Word", "Google Chrome", "Windows 10", "Adobe Photoshop"],
    correctAns: 2
  },
  {
    question: "What does RAM stand for?",
    option: ["Random Access Memory", "Read-Only Memory", "Random Access Module", "Remote Access Manager"],
    correctAns: 0
  },
  {
    question: "What is the function of a modem?",
    option: ["Convert digital signals to analog signals", "Store large amounts of data", "Perform mathematical calculations", "Control network traffic"],
    correctAns: 0
  },
  {
    question: "Which programming language is commonly used for web development?",
    option: ["Java", "Python", "JavaScript", "C++"],
    correctAns: 2
  },
  {
    question: "What is the purpose of a graphics card in a computer?",
    option: ["Display images on the monitor", "Store data temporarily", "Run antivirus software", "Control network connections"],
    correctAns: 0
  },
  {
    question: "What is the largest unit of storage?",
    option: ["Kilobyte", "Megabyte", "Gigabyte", "Terabyte"],
    correctAns: 3
  },
  {
    question: "Which of the following is an example of an email service?",
    option: ["Google Drive", "YouTube", "Facebook", "Gmail"],
    correctAns: 3
  },
  {
    question: "What is the purpose of a firewall in network security?",
    option: ["Prevent unauthorized access", "Improve network performance", "Block spam emails", "Detect computer viruses"],
    correctAns: 0
  }
];



var questionElement = document.getElementById("question");
var answerButtons = document.querySelectorAll(".answer-button");
var submitButton = document.getElementById("submit");
var quesnoElement = document.querySelector(".quesno");
var scoreElement = document.getElementById("score");
var quizContainer = document.getElementById("quiz");

var currentQuestionIndex = 0;
var userAnswers = [];
var score = 0;

function Quiz() {
  showQuestion();
}

function showQuestion() {
  var currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  quesnoElement.textContent = (currentQuestionIndex + 1) + "/" + quizData.length;

  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = currentQuestion.option[i];
    answerButtons[i].addEventListener("click", selectAnswer);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var currentQuestion = quizData[currentQuestionIndex];
  var selectedAnswer = currentQuestion.option.indexOf(selectedButton.textContent);
  userAnswers[currentQuestionIndex] = selectedAnswer;

  var isCorrect = selectedAnswer === currentQuestion.correctAns;

  // Disable buttons after selection
  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
    if (answerButtons[i].textContent === currentQuestion.option[currentQuestion.correctAns]) {
      answerButtons[i].classList.add("correct");
    } else if (answerButtons[i] === selectedButton) {
      answerButtons[i].classList.add("wrong");
    }
  }

  setTimeout(function() {
    // Reset button styles and enable buttons for next question
    for (var i = 0; i < answerButtons.length; i++) {
      answerButtons[i].disabled = false;
      answerButtons[i].classList.remove("correct", "wrong");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  });
}

function endQuiz() {
  quizContainer.style.display = "none";
  scoreElement.textContent = "Your Score: " + calculateScore();
  scoreElement.style.display = "block";
}

function calculateScore() {
  score = 0;
  for (var i = 0; i < quizData.length; i++) {
    if (userAnswers[i] === quizData[i].correctAns) {
      score++;
    }
  }
  return score + "/" + quizData.length;
}



Quiz();
