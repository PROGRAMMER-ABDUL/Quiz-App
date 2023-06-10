var quizData = [
    {
      question: "Html stands for ___________",
      option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
      correctAns: 2
    },
    {
      question: "JS stands for ___________",
      option: ["java script", "hyper text markup language", "css", "html"],
      correctAns: 0
    },
    {
      question: "CSS stands for ___________",
      option: [ "hyper text markup language","cascading style sheet", "Java Script", "html"],
      correctAns: 1
    },
    {
      question: "RAM stands for ___________",
      option: ["random access memoery", "hyper text markup language", "remaining access memory", "rest access memory"],
      correctAns: 0
    },
    {
      question: "ROM stands for ___________",
      option: [ "hyper text markup language", "roll out memory", "html","read only memory"],
      correctAns: 3
    }
    ,{
        question: "Done",
        option: ["Restart","Check score","Marks","Check Anwser"]
    }
  ];

var end=[
    {
        option: ["Restart","Check Score"]
    }
]
  
var questionElement = document.getElementById("question");
var answerButtons = document.querySelectorAll(".answer-button");
var submitButton = document.getElementById("submit");
var quesnoElement = document.querySelector(".quesno");
var currentQuestionIndex = 0;

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
  
  var isCorrect = selectedAnswer === currentQuestion.correctAns;


  //to make sure only 1 ans is selected
  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
    if (answerButtons[i].textContent === currentQuestion.option[currentQuestion.correctAns]) {
      answerButtons[i].classList.add("correct");
    } else if (answerButtons[i] === selectedButton) {
      answerButtons[i].classList.add("wrong");
    }
  }

  setTimeout(function() {
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


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }

function endQuiz() {
  questionElement.textContent = "Quiz completed!";
  submitButton.disabled = true;
}


Quiz();
