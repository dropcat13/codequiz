var startQuiz = document.querySelector("#startquiz");
var openQuiz = document.querySelector("#openQuiz");
var corner = document.querySelector("#corner");
var bodyEl = document.createElement("ul");
var timerEl = document.querySelector("#time");
var secondsDisplay;
var totalSeconds = 0;
var timer;
var userScore = 0;
var userName;


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
    totalSeconds--;
    timerEl.textContent = totalSeconds + " seconds remaining"; 

    console.log ("im doing something")
        if (totalSeconds < 10) {
          timerEl = "0" + totalSeconds;
          } else {
            timerEl = totalSeconds;
          }        
        if (totalSeconds === 0) {
          alert("Time's up!")
          clearInterval(timeInterval);
        }       
  }, 1000); 
} 


function startQuestions(){
  for (i=0; i<questions.length; i++){
    console.log (i);
    question = questions[i].title;
    quiztitle.append(question);
    document.getElementById("quiztitle").style.textAlign = "center";
    for (j=0; j<questions.choices.length; j++){
    var btn = document.createElement("BUTTON");     
    btn.innerHTML = questions[i].choices[j];                     
    document.body.appendChild(btn); 
    }
  }
//   var question = document.createElement("h2");
//   question = questions[0].title;
//   quiztitle.append(question);
//   document.getElementById("quiztitle").style.textAlign = "center";
//   var optionOne = document.createElement("button");
//   optionOne = questions[0].choices[0];
//   buttonOne.append(optionOne);
//   document.getElementById("quiz").style.textAlign = "center";
//   var optionTwo = document.createElement("button");
//   optionTwo = questions[0].choices[1];
//   buttonTwo.append(optionTwo);
//   document.getElementById("answers").style.textAlign = "center";
//   var optionThree = document.createElement("button");
//   optionThree = questions[0].choices[2];
//   buttonThree.append(optionThree);
//   document.getElementById("answers").style.textAlign = "center";
//   var optionFour = document.createElement("button");
//   optionFour = questions[0].choices[3];
//   buttonFour.append(optionFour);
//   document.getElementById("answers").style.textAlign = "center";
}

// quiz function 
function quizScore(){
  // .addEventListener("click", start);
  if (choices === answer){
    userScore++
  } else {
    timerEl - 10
  }
}
// registers click and if user guesses correctly increments userScore by 1

// if user guesses incorrectly it subtracts 10 seconds from the timer. 

// at the end of the game, there is an option to enter your name and score as a high score
document.getElementById("quiz").style.textAlign = "center";


// function saves userscore to local storage
// creates a do you want to save your highscore button
// on that click 
var highScore = localStorage.getItem("highScore");
localStorage.setItem ("highScore", highScore);
localStorage.setItem("userName", userName);

// when game is played again userscore and name is still stored when they finish the next time.