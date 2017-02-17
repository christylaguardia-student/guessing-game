// global variables
var userName = "";
var nextQuestion = 1;
var score = 0;
var questionText = "";
var userAnswer = "";
var resultText = "";

// get user's name on page load
getUserName();

function getUserName() {
  userName = prompt("Welcome! What is your name?","type your name here");
  console.log("user's name: " + userName);
  // check if no name
  while (userName === "" || userName === "type your name here") {
    userName = prompt("Don't be shy! Tell me your name?","type your name here");
  }
  return userName;
}

function playGame() {
  // find out what question they're on
  switch (nextQuestion) {
    case 1:
      question1();
      displayResult();
      nextQuestion = 2;
      break;
    case 2:
      question2();
      displayResult();
      nextQuestion = 3;
      break;
    case 3:
      question3();
      displayResult();
      nextQuestion = 4;
      break;
    case 4:
      question4();
      displayResult();
      nextQuestion = 5;
      break;
    case 5:
      question5();
      displayResult();
      nextQuestion = 6;
      break;
    case 6:
      question6();
      displayResult();
      nextQuestion = 0;
      break;
    default:
      // reset the game
      nextQuestion = 1;
      score = 0;
      break;
  }
  console.log("next question number: " + nextQuestion);
}

function displayResult() {
  var questionElement = document.getElementById("gameQuestion");
  questionElement.innerHTML = questionText;
  console.log("Question: " + questionText);

  var displayAnswer = document.getElementById("userAnswer");
  displayAnswer.innerHTML = userName + "'s answer: " + userAnswer;
  console.log("Answer: " + userAnswer);

  var displayResult = document.getElementById("gameResult");
  displayResult.innerHTML = resultText;
  console.log("Result: " + resultText);

  var displayScore = document.getElementById("gameScore");
  displayScore.innerHTML = "Score: " + score;
  console.log("Score: " + score);
}

function question1() {
  questionText = "Is lemon an anagram of melon?";
  userAnswer = prompt(questionText, "yes or no?");
  // check if answer is correct
  if (userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() === 'y') {
    resultText = "<div class=.correct>Correct! Good job!</div>";
    score++;
  } else {
    resultText = "<div class=.incorrect>Sorry wrong answer! The letters in melon can be re-arranged to spell lemon.</div>";
  }
  // change button text
  document.getElementById("myBtn").value = "Next Question";
}

function question2() {
  questionText = "Is Mount Olympus located in the Alps?";
  userAnswer = prompt(questionText, "yes or no?");
  // check if answer is correct
  if (userAnswer.toLowerCase() === 'no' || userAnswer.toLowerCase() === 'n') {
    resultText = "Right " + userName + "! Mount Olympus is in Greece. You sure know your mountains!";
    score++;
  } else {
    resultText = "Nope, Mount Olympus is in Greece, not the Alps.";
  }
}

function question3() {
  questionText = "Is Mars the fourth planet from the Sun?";
  userAnswer = prompt(questionText, "yes or no?");
  // check if answer is correct
  if (userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() === 'y') {
    resultText = "Bingo " + userName + "!";
    score++;
  } else {
    resultText = "No " + userName + ". The forth planet from the Sun is Mars.";
  }
}

function question4() {
  questionText = "How many fingers does Mickey Mouse have?";
  userAnswer = prompt(questionText, "enter number here");
  // check if answer is correct
  if (parseInt(userAnswer) === 8) {
    resultText = "Excelent " + userName + "!";
    score++;
  } else if (userAnswer < 8) {
    resultText = "Actually, Mickey has 8 fingers total, not " + userAnswer + ". We're disappointed you didn't know that.";
  } else if (userAnswer > 8) {
    resultText = "Micky is a mouse. There's no way he could have " + userAnswer + " fingers. The right answer is 8.";
  } else {
    resultText = "Wrong answer " + userName;
  }
}

function question5() {
  questionText = "In Beauty and the Beast, how many dozens of eggs does Gaston say he eats in order to stay 'roughly the size of barge?'";
  userAnswer = prompt(questionText, "enter number of dozens");
  // force user to keep guessing until answer is correct
  while (parseInt(userAnswer) !== 5) {
    userAnswer = prompt("Sorry, that's not right. Try again.", "enter number of dozens");
  }
  score++;
  resultText = "Great work " + userName + "!";
}

function question6() {
  questionText = "Name one of Snow White's seven dwarfs."
  answerArray = ["doc", "grumpy", "happy", "sleepy", "bashful", "sneezy", "dopey"];
  userAnswer = prompt(questionText,"dwarf name");
  // check if answer is in the list of correct answers
  var correct = "";
  for (var i = 0; i < answerArray.length; i++) {
    if (userAnswer.toLowerCase() === answerArray[i]) {
      correct = true;
    }
  }
  // check if answer is correct
  if (correct === true) {
      resultText = "Yes, " + userAnswer + " is one of the seven!";
      score++;
    } else {
      resultText = "No, " + userAnswer + " is not one of the seven.";
  }
  // find out if the user won
  if (score === 6) {
    resultText += "<br>YOU WON! Congratulations " + userName + ", you got all 4 questions correct!";
  } else {
    resultText += "<br>SORRY, YOU LOSE! Nice try " + userName + ", but you got " + score + " questions right and " + (6 - score) + " wrong.";
  }
  // change button text
  document.getElementById("myBtn").value = "New Game";
}
