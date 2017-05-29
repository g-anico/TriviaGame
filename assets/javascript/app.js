$(document).ready(function() {
//when the document is ready, execute the start screen and start button
  function initialScreen(){
    startScreen = "<img class='center-block img-wrong' src='assets/images/Jeopardy.jpg'>"
    + "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg start-button' href='#' role='button'>Start Game!</a></p>";
    $(".mainArea").html(startScreen);

  }
  //invoke initialScreen
  initialScreen();

  //now I need a function that generates the html triggered by the start button
  //declare a variable that equals the selected answer. if the selected answer is the right one from
  //the question Counter then clear the clock and generate win.
  $("body").on("click", ".start-button", function(event){

    generateHTML();
    timerWrapper();
    audio.play();
  }); //closes start button click

  $("body").on("click", ".answer", function(event) {
    selectedAnswer = $(this).text();
    if(selectedAnswer === correctAnswers[questionCounter]) {
      // alert("correct!");
      clearInterval(theClock);
      generateWin();
  }
  else {
    // alert("wrong");
    clearInterval(theClock);
    generateLoss();
  }
}); //closes the .answer click

$("body").on("click", ".reset-button", function(event){
  resetGame();
}); //closes reset button click

}); //closes the jquery container

function generateLossDueToTimeOut() {
  unansweredTally++;
  audioTimesout.play();
  gameHTML =
  "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>"
  + "<p class='text-center'>Out of Time! Answer: " + correctAnswers[questionCounter] + "</p>"
  + "<img class='center-block img-wrong' src='assets/images/alex-trebek-timesout.jpg'>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 3000);
}

function generateWin() {
  correctTally++;
  gameHTML =
  "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>"
  + "<p class='text-center'>Correct! Answer: " + correctAnswers[questionCounter] + "</p>"
  + imageArray[questionCounter];
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 3000);
}

function generateLoss() {
  incorrectTally++;
  gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>"
  + "<p class='text-center'>Incorrect! The answer is: "+ correctAnswers[questionCounter] + "</p>"
  + "<img class='center-block img-wrong' src='assets/images/alex-trebek-wrong.jpg'>";
  $(".mainArea").html(gameHTML);
  setTimeout(wait, 3000); //3 seconds
  }

function generateHTML() {
  gameHTML =
  "<p class='text-center timer-p'>Time Remaining: <span class='timer'>10</span></p><p class='text-center'>"
  + questionArray[questionCounter]
  +"<br>"
  + "</p><p class='answer'>A. " + answerArray[questionCounter][0]
  + "</p><p class='answer'>B. "+ answerArray[questionCounter][1]
  + "</p><p class='answer'>C. "+ answerArray[questionCounter][2]
  
 $(".mainArea").html(gameHTML);
 }

function wait() {
  if(questionCounter < 4) {
    questionCounter++;
    generateHTML();
    counter = 10;
    timerWrapper();
  }
  else{
    finalScreen();
  }
}
//setInterval for 10 seconds
function timerWrapper(){
  theClock = setInterval(tenSeconds, 1000);
  function tenSeconds() {
    if(counter === 0) {
      clearInterval(theClock);
      generateLossDueToTimeOut();
    }
    if(counter > 0) {
      counter--;
    }
    $(".timer").html(counter);
  }
}
//show game recap: final scores; will use html elements to display game recap
function finalScreen() {
  gameHTML =
  "<img class='center-block img-wrong' src='assets/images/gamerecap.png'>" +
  "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>"
  + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>"
  + "<p>Wrong Answers: " + incorrectTally + "</p>"
  + "<p>Unanswered: " + unansweredTally + "</p"
  + "<p class ='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset Game!</a></p>";
//used btn-block to prevent button from floating up top
  $(".mainArea").html(gameHTML);
}
console.log("Keep going!");

//reset game
function resetGame() {
  questionCounter = 0;
  correctTally = 0;
  incorrectTally = 0;
  unansweredTally = 0;
  counter = 10;
  generateHTML();
  timerWrapper();
  audio.play();
}
//Create an array of questions and answers
//Since this is jeopardy, the "question" will the answer, and the "answer" will be a question.
var questionArray = [
'An executable block of code',
'A container that can hold any type of data and is zero-indexed',
'A conditional statement used to perform different actions for different conditions',
'A platform and interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document',
'A container that contains data and given a representative name'
 ];
var answerArray = [
['What is a function?','What is an array?','What is local scope?'],
['What is a method?','What is an object?','What is an array?'],
['What is a boolean?','What is an if then statement?', 'What is a For Loop?'],
['What is the DOM?', 'What is the ROMCOM?','What is an API?'],
['What is a parameter?','What is a browser window?','What is a variable?']
];
var imageArray = [
"<img class='center-block img-right' src='assets/images/alex-trebek-1.jpg'>",
"<img class='center-block img-right' src='assets/images/alex-trebek-2.jpg'>",
"<img class='center-block img-right' src='assets/images/alex-trebek-3.jpg'>",
"<img class='center-block img-right' src='assets/images/alex-trebek-4.jpg'>",
"<img class='center-block img-right' src='assets/images/alex-trebek-5.jpeg'>",
"<img class='center-block img-right' src='assets/images/alex-trebek-wrong.jpg'>",
"<img class='center-block img-right' src='assets/images/alex-trebek-timesout.jpg'>",
"<img class='center-block img-right' src='assets/images/gamerecap.png'>",

];

var correctAnswers = [
"A. What is a function?",
"C. What is an array?",
"B. What is an if then statement?",
"A. What is the DOM?",
"C. What is a variable?"
];
var questionCounter = 0;
var selectedAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

var startScreen;
var gameHTML;
var counter = 10;
var audio = new Audio("assets/audio/Jeopardy-theme-song.mp3");
var audioTimesout= new Audio("assets/audio/jtime.wav");
