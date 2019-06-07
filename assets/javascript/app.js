
// Pseudo code 
// Trivia answers: http://murphysamandjodi.com/the-ultimate-star-wars-fan-trivia-answers/
// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.

// Variables 
var number = 120;
var intervalId;
var correctnum = 0;
var incorrectnum = 0;
var unanswerednum = 0;
var trivia = [
  {
    question: "Vader cuts off Luke’s ____ hand.",
    answers: ["Left", "Right"],
    correct: "Right"
  },
  {
    question: "How tall is Chewbacca?",
    answers: ["6'8''", "8'11''", "7'6''"],
    correct: "8'11'"
  },
  {
    question: "Yoda claims that Luke’s training will not be complete until he:",
    answers: ["Discovers the truth about Leia", "Builds a lightsaber", "Faces Darth Vader"],
    correct: "Faces Darth Vader"
  }, 
  {
    question: "Han Solo’s trusty blaster is a:",
    answers: ["DL-44", "BB-88", "D4-66"],
    correct: "DL-44"
  }, 
  {
    question: "Yoda is _____ when he passes away:",
    answers: ["700", "800", "900"],
    correct: "900"
  }, 
  {
    question: "In how many forms of communication is C-3PO fluent?",
    answers: ["Over 12 Million", "Over 6 Million", "Over 8 Million"],
    correct: "Over 6 Million"
  }, 
  {
    question: "Young Anakin Skywalker podraced in the:",
    answers: ["Bothan Spy Classic", "Boonta Eve Classic", "Bantha Poodoo classic"],
    correct: "Boonta Eve Classic"
  }, 
]

$(document).ready(function () {
  $("#triviaQuestions").hide();
  $("#start").html('<button type="button" class="btn btn-primary btn-lg" id="done-button"> Start </button>')
  $("#start").on("click", startGame);
}); 
// user guess - tracking guess 
// question 1, 2, 3, 4, 5, 6 (Object)


function startGame() {
  $("#triviaQuestions").show();
  console.log("game started")
  for (var i = 0; i < trivia.length; i++) {
    var questionh5 = $("<h5 id='question'>")
    questionh5.text(trivia[i].question);
    $("#triviaQuestions").append(questionh5)
    run();
    //start the timer
    //display hidden question 
    //display done button
  }
}

// var input = $('<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">')
// var label = $('<label class="form-check-label" for="exampleRadios2"></label>');
// label.text(trivia[questionNumber].answers[i])
// input.html(label);
// $(".buttonsDiv").append(input);

startGame();


// we still need to dynamically add the timer to the page
function run() {
  stop();
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#timer").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    alert("Time Up!");
  }
}

function stop() {
  clearInterval(intervalId);
}


// if user guess clicks on correct answer  
// then correctnum ++

// if userguess clicks on incorrect answer 
// then incorrectnum ++

// if question is not answered
// then unanswernum ++ 

// if countdown = 0
// display correctnum, incorrect num, and unanswerednum
// hide questions 

// if done button is clicked, display correctnum, incorrect num and unanswerednum