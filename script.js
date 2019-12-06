var startQuiz = document.querySelector("#startquiz");
var openQuiz = document.querySelector("#openQuiz");
var bodyEl = document.createElement("ul");
var timerEl = document.querySelector("#time");
var quiztitle = document.querySelector("#quiztitle");
var answers = document.querySelector('#answers');
var highscores = document.querySelector('#highscores');
var secondsDisplay;
var totalSeconds = 0;
var timer;
var userScore = 0;
var userName = "";
var i = 0;
var restart;

startQuiz.addEventListener("click", start);

// gets a click from one of the answer buttons and displays the next question. Event bubbling? 
// document.addEventListener("click", ".ansBtn", nextQuestion);
document.addEventListener('click',function(event){  
  event.stopPropagation();
  if(event.target.classList == ('ansBtn') ){
    if (i < 4){
    quizScore()
    nextQuestion() 
    }
    else {
      endOfQuiz()
    }  
   }
});

restart.addEventListener("click", start);

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
    if (totalSeconds === 0 || i > 4) {
      alert("Time's up!")
      clearInterval(timeInterval);
    }
  }, 1000);
}

function nextQuestion() {
  startQuestions()
}

function startQuestions() {
  if (i<questions.length) {
    document.getElementById("quiztitle").style.textAlign = "center";
    quiztitle.innerHTML = questions[i].title;
    answers.innerHTML = "";
    for (j = 0; j < questions[i].choices.length; j++) {
      var btn = document.createElement("button");
      btn.classList.add("ansBtn");
      btn.innerHTML = questions[i].choices[j];    
      answers.appendChild(btn);
    }
  } 
}

function quizScore() {
  console.log(i)
  if ( event.target.textContent === questions[i].answer) {
    userScore++;
  } else {
    totalSeconds - 10;
  }
  i++;
}

function endOfQuiz() {
  // stop Timer
  document.getElementById("quiz").style.textAlign = "center";
  var quizComplete = document.createElement("h2");
  quizComplete.textContent = "You've completed the quiz. Your score is " + userScore + ". Enter your name into highscores!";
  quiz.appendChild(quizComplete);

  var endtitle = document.getElementById("quiztitle");
  endtitle.remove();
  var end = document.getElementById("answers");
  end.remove();

  userName = document.createElement("input");
  userName.innerHTML = 'Your Name';
  highscores.appendChild(userName);

  var restart = document.createElement("button");
  restart.innerHTML = "RESTART";
  highscores.appendChild(restart);
}

// function saves userscore to local storage
// creates a do you want to save your highscore button
// on that click 
const userInfo = {
  name: "userName",
  score: "userScore",
}

window.localStorage.setItem('userInfo', JSON.stringify(person));

localStorage.setItem("userScore", userScore);
localStorage.setItem("userName", userName);

// when game is played again userscore and name is still stored when they finish the next time.