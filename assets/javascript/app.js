
// Pseudo code 
// Trivia answers: http://murphysamandjodi.com/the-ultimate-star-wars-fan-trivia-answers/
// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz. 

//  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.
$(document).ready(function () {

  // Variables 
  var trivia = [
    {
      question: "Vader cuts off Luke’s ____ hand.",
      answers: ["Left", "Right"],
      correct: "Right",
    },
    {
      question: "How tall is Chewbacca?",
      answers: ["6'8''", "8'11''", "7'6''"],
      correct: 1,
    },
    {
      question: "Yoda claims that Luke’s training will not be complete until he:",
      answers: ["Discovers the truth about Leia", "Builds a lightsaber", "Faces Darth Vader"],
      correct: 2,
    },
    {
      question: "Han Solo’s trusty blaster is a:",
      answers: ["DL-44", "BB-88", "D4-66"],
      correct: 0,
    },
    {
      question: "Yoda is _____ when he passes away:",
      answers: ["700", "800", "900"],
      correct: 2,
    },
    {
      question: "In how many forms of communication is C-3PO fluent?",
      answers: ["Over 12 Million", "Over 6 Million", "Over 8 Million"],
      correct: 1,
    },
    {
      question: "Young Anakin Skywalker podraced in the:",
      answers: ["Bothan Spy Classic", "Boonta Eve Classic", "Bantha Poodoo classic"],
      correct: 1,
    },
  ]

  var number = 60;
  var intervalId;
  var correctnum = 0;
  var incorrectnum = 0;
  var unanswerednum = 0;
  // var userGuess = "";
  var running = false;
  var pick;
  var holder = [];

  $("#triviaQuestions").hide();
  $("#answerBlock").hide();
  $("#done-button").hide();
  $("#start").html('<button type="button" class="btn btn-primary btn-lg" id="start-button"> Start </button>')
  $("#start").on("click", startGame);

  function startGame() {
    $("#triviaQuestions").show();
    console.log("game started")
    for (var i = 0; i < trivia.length; i++) {
      var questionh5 = $("<h5 id='question'>")
      questionh5.text(trivia[i].question);
      $("#triviaQuestions").append(questionh5);
      var Answers = trivia[i].answers;
      for (var j = 0; j < Answers.length; j++) {
        var input = $('<input class="form-check-input" type="radio" id="radiobutton" value="' + Answers[j] + '">')
        // for clicking
        input.attr("name", "question_" + i);
        var label = $('<label class="form-check-label" for="exampleRadios2"></label>');
        // for label
        label.text(Answers[j]);
        input.html(label);
        $("#triviaQuestions").append(input, label);
        holder.push(trivia[i]);
        $("#start-button").hide();
        $("#done-button").show();
      }
      run();
    }
  }

  // we still need to dynamically add the timer to the page
  function run() {
    if (!running) {
      intervalId = setInterval(decrement, 1000);
      running = true;
    }
  }

  function decrement() {
    $("#timer").html("<h2> Time Remaining: " + number + "</h2>");
    number--;
    if (number === 0) {
      unanswerednum++;
      stop();
    }
  }

  function stop() {
    running = false;
    clearInterval(intervalId);
  }

  // if(number === 0) {
  //   $("#triviaQuestions").hide();
  //   $("#done-button").hide();
  //   $("#answerBlock").show();
  //   $("#answerBlock").text("Correct Answered: " + correctnum);
  //   $("#answerBlock").text("Incorrect Answered: " + incorrectnum);
  //   $("#answerBlock").text("Unaswered: " + unanswerednum);
  //   $("#answerBlock").html('<button type="button" class="btn btn-primary btn-lg" id="restart-button"> Restart Questions </button>')
  // }

    if(trivia.answers === trivia.correct) {
      stop();
		  correctnum++;
		  userGuess="";
		  console.log("correct answer");
    }else{
      stop();
      incorrectnum++;
      userGuess="";
      console.log("incorrect answer");
    };


});

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