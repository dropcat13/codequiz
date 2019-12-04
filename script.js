var startQuiz = document.querySelector("#startquiz");
var openQuiz = document.querySelector("#openQuiz");
// var quiz = document.querySelector("#quiz");
var corner = document.querySelector("#corner");
var bodyEl = document.createElement("ul");
var timerEl = document.createElement("h2");
var secondsDisplay;
var totalSeconds;
var timer;
var userScore


startQuiz.addEventListener("click", start);

function start(){
    removeStartinginfo ();
    startTimer();
    startQuestions();
}

function removeStartinginfo(){
  var quiz = document.getElementById("startquiz");
  quiz.remove();
  var quizheading = document.getElementById("codequiz");
  quizheading.remove();
}


function startTimer() {
 totalSeconds = questions.length * 15; 
 console.log (questions.length);
  var timeInterval = setInterval(function() {
    timerEl.textContent = totalSeconds + " seconds remaining";
    totalSeconds--;
    console.log ("im doing something")
        if (totalSeconds < 10) {
          timerEl = "0" + totalSeconds;
          } else {
            timerEl = totalSeconds;
          }        
        if (timeInterval === 0) {
          alert("Time's up!")
          return
        }
        
  }, 1000);
  corner.append(timerEl);
  

} 

function startQuestions(){
  var question = document.createElement("h2");
  question = "random word";
    quiz.append(question);
  var options = document.createElement("button");
  options = "another random word";
  quiz.append(options);
}

// quiz function 
// registers click and if user guesses correctly increments userScore by 1

// if user guesses incorrectly it subtracts 10 seconds from the timer. 