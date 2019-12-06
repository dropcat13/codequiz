var startQuiz = document.querySelector("#startquiz");
var openQuiz = document.querySelector("#openQuiz");
var corner = document.querySelector("#corner");
var bodyEl = document.createElement("ul");
var timerEl = document.querySelector("#time");
var quiztitle = document.querySelector("#quiztitle");
var secondsDisplay;
var totalSeconds = 0;
var timer;
var userScore = 0;
var userName;
var i = 0;

startQuiz.addEventListener("click", start);

// gets a click from one of the answer buttons and displays the next question. Event bubbling? 
// document.addEventListener("click", ".ansBtn", nextQuestion);
document.addEventListener('click',function(event){
  event.stopPropagation();
  // if(event.target.class == ('ansBtn') ){
    quizScore()
    nextQuestion()   
  //  }
});

function start() {
  removeStartinginfo();
  startTimer();
  startQuestions();
}

function removeStartinginfo() {
  var quiz = document.getElementById("startquiz");
  quiz.remove();
  var quizheading = document.getElementById("codequiz");
  quizheading.remove();
}

function startTimer() {
  totalSeconds = questions.length * 15;
  console.log(questions.length);
  var timeInterval = setInterval(function () {
    totalSeconds--;
    timerEl.textContent = `${totalSeconds} seconds remaining`;

    console.log("im counting down seconds")
    if (totalSeconds < 10) {
      timerEl.textContent = "0" + totalSeconds + " seconds remaining";
    } else {
      timerEl.textContent = totalSeconds + " seconds remaining";
    }
    if (totalSeconds === 0) {
      alert("Time's up!")
      clearInterval(timeInterval);
    }
  }, 1000);
}

function nextQuestion() {
  i++;
  startQuestions()
}

function startQuestions() {
  console.log(i);
  if (i<questions.length) {
    document.getElementById("quiztitle").style.textAlign = "center";
    quiztitle.append(questions[i].title);
    for (j = 0; j < questions[i].choices.length; j++) {
      var btn = document.createElement("button");
      btn.classList.add("ansBtn");
      btn.innerHTML = questions[i].choices[j];
      quiztitle.appendChild(btn);
    }
  } 
}

function quizScore() {
  if ( event.currentTarget === questions[i].answer) {
    userScore++;
  } else {
    totalSeconds - 10;
  }
}

// at the end of the game, there is an option to enter your name and score as a high score
function endOfQuiz() {
  document.getElementById("quiz").style.textAlign = "center";
  var quizComplete = document.createElement("h2");
  quizComplete.textContent = "You've completed the quiz. Your score is " + userScore + ". Enter your name into highscores!";
  quiz.appendChild(quizComplete);
  var formEl = document.createElement("form").placeholder = "Type name here..";
  quiz.appendChild(formEl);
}

// function saves userscore to local storage
// creates a do you want to save your highscore button
// on that click 
var highScore = localStorage.getItem("highScore");
localStorage.setItem("highScore", highScore);
localStorage.setItem("userName", userName);

// when game is played again userscore and name is still stored when they finish the next time.