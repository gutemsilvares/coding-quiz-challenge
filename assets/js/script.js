// When user clicks the start button, then a timer starts and user is presented with a question

// Declare global variables
var start_btn = document.getElementById('start');
var start_screenEl = document.getElementById('start-screen');
var questionsEl = document.getElementById('questions');
var h2El = document.getElementById('question-title');
var choicesEl = document.getElementById('choices');
var endScreenEl = document.getElementById('end_screen');
var finalScoreEl = document.getElementById('final_score');
var scoresEl = document.getElementsByClassName('scores');
var timerEl = document.getElementById('time');
var highScores = document.getElementById('high-scores');
var clearScores = document.getElementById('clear');

// Declare global variables
var timeLeft = 30;
var score = 0;
var index = 0;
var timerInterval;

// var timerRunning = false;

//start_btn
start_btn.addEventListener('click', function () {
  start_screenEl.style.display = 'none';
  questionsEl.style.display = 'block';
  h2El.style.display = 'block';
  choicesEl.style.display = 'block';
  setTime();
  showQuestion();
});

//SetTime Interval
function setTime() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);

      //Comes here questions();
    }
  }, 1000);
}

//Display Questions on screen
function showQuestion(questionCount) {
  h2El.textContent = questions[index].question;

  let quizCards = choicesEl;

  for (let i = 0; i < questions[index].choices.length; i++) {
    let quizCard = document.createElement('li');
    quizCard.classList.add('quiz-card');
    quizCard.textContent = questions[index].choices[i];
    quizCards.appendChild(quizCard);
  }
}

//function nextQuestion() {
function nextQuestion() {
  index++;
  showQuestion(index);
}

// function checkAnswer(answer) {
function checkAnswer(e) {
  e.stopPropagation();

  if (questions[index].answer === e.target.textContent) {
    score++;
  } else {
    timeLeft = timeLeft - 10;
  }

  if (i === questions.length - 1) {
    clearInterval(timerInterval);
    endScreenEl.style.display = 'block';
    finalScoreEl.textContent = score;
  }
}

//function clear
function clear() {
  highScores = [];
}
