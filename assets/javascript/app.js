//Create an array of questions and answers
//Since this is jeopardy, the "question" will the answer, and the "answer" will be a question.
//If only Alex Trebek were narrating while the game executes...note to self: look into this.
var questionA = 'An executable block of code';
var answerA = ['What is a function?','What is an array?','What is local scope?'];

var questionB = 'A container that can hold any type of data and is zero-indexed)';
var answerB = ['What is a method?','What is an object?','What is an array?'];

var questionC = 'A conditional statement used to perform different actions for different conditions';
var answerC = ['What is a boolean?','What is an "if then statment?"', 'What is a For Loop?'];

var questionD = 'A platform and interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document';
var answerD = ['What is the DOM?', 'What is the ROMCOM?','What is an API?'];

var questionE = 'A container that contains data and given a representative name';
var answerE = ['What is a parameter?','What is a browser window?','What is a variable?'];

//May not want to do this. Or, it might be OK: This code will run as soon as the page loads.
document.onload = function() {

}


//Set our number counter to 20 sec (5 sec to read the question + 10 sec to answer)
var number = 20;
//Variable to hold our interval ID when we execute "run" function
var intervalId;

//The run function sets an interval that runs the decrement function once a second
function run(){
    intervalId = setInterval(decrement, 1000);

  }

//the decrement function
function decrement(){
  number--;
  //show the number in the #show-number tag.
  $('#show-number').html("<h2>" + number + "</h2>");
  //when the number hits zero...
  if (number === 0) {
    //run the function that tells user "time's up",
    alert("Time's up!");

    //run the function that displays correct answer,
    displayAnswer();


    //Wait about 3 seconds and show the next question

    //resets the countdown to 20 seconds
  }
}
function displayAnswer() {}

  }
}


//Using clearInterval to stop the count when the user chooses answer
  clearInterval(counter);
//Need to reset the timer to count down from 30 seconds and change the display to 00:30
var stopwatch = {
  time: 30,
  reset: function(){
    stopwatch.time= 30
    $('#display').html("30");
  }

}
