// global variables
var userName = "";
var nextQuestion = 1;
var score = 0;

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
      nextQuestion = 2;
      break;
    case 2:
      question2();
      nextQuestion = 3;
      break;
    case 3:
      question3();
      nextQuestion = 4;
      break;
    case 4:
      question4();
      nextQuestion = 5;
      break;
    case 5:
      question5();
      nextQuestion = 0;
    default:
      // reset the game
      nextQuestion = 1;
      score = 0;
      break;
  }
  console.log("next question number: " + nextQuestion);
}

function askQuestion(promptText,defaultText) {
  var userAnswer = prompt(promptText,defaultText);
  return userAnswer;
  console.log("Question: " + promptText);
  console.log("Answer: " + userAnswer);
}

function displayQuestion(questionToDisplay) {
  var questionElement = document.getElementById("gameQuestion");
  questionElement.innerHTML = questionToDisplay;
}

function displayResult(answer,resultMessage) {
  var displayAnswer = document.getElementById("userAnswer");
  displayAnswer.innerHTML = userName + "'s answer: " + answer;
  var displayResult = document.getElementById("gameResult");
  displayResult.innerHTML = resultMessage;
  var displayScore = document.getElementById("gameScore");
  displayScore.innerHTML = score;
}

function question1() {
  var questionText = "Is lemon an anagram of melon?";
  var userAnswer = askQuestion(questionText, "yes or no?");
  var resultText = "";
  if (userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() === 'y') {
    resultText = "Correct! Good job " + userName + "!";
    score++;
  } else {
    resultText = "Sorry " + userName + ", wrong answer! The letters in melon can be re-arranged to spell lemon.";
  }
  displayQuestion(questionText);
  displayResult(userAnswer,resultText);
  document.getElementById("myBtn").value = "Next Question";
}

function question2() {
  var questionText = "Is Mount Olympus located in the Alps?";
  var userAnswer = askQuestion(questionText, "yes or no?");
  var resultText = "";
  if (userAnswer.toLowerCase() === 'no' || userAnswer.toLowerCase() === 'n') {
    resultText = "Right " + userName + "! Mount Olympus is in Greece. You sure know your mountains!";
    score++;
  } else {
    resultText = "Nope, Mount Olympus is in Greece, not the Alps.";
  }
  displayQuestion(questionText);
  displayResult(userAnswer,resultText);
}

function question3() {
  var questionText = "Is Mars the fourth planet from the Sun?";
  var userAnswer = askQuestion(questionText, "yes or no?");
  var resultText = "";
  if (userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() === 'y') {
    resultText = "Bingo " + userName + "!";
    score++;
  } else {
    resultText = "No " + userName + ". The forth planet from the Sun is Mars.";
  }
  displayQuestion(questionText);
  displayResult(userAnswer,resultText);
}

function question4() {
  var questionText = "How many fingers does Mickey Mouse have?";
  var userAnswer = askQuestion(questionText, "enter number here");
  var resultText = "";
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
  displayQuestion(questionText);
  displayResult(userAnswer,resultText);
}

// function checkAnswer(answerToCheck, arrayToSearch) {
//   for (var i; i < 7; i++) {
//     if (arrayToSearch[i].value == answerToCheck.toLowerCase()) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// TODO: ask number question, guess until you get it

function question5() {
  var questionText = "Name one of Snow White's seven dwarfs."
  var answerArray = ["doc", "grumpy", "happy", "sleepy", "bashful", "sneezy", "dopey"];
  var userAnswer = askQuestion(questionText,"dwarf name");
  var resultText = "";

  var correct = "";
  for (var i = 0; i < answerArray.length; i++) {
    if (userAnswer.toLowerCase() === answerArray[i]) {
      correct = true;
    }
  }

  if (correct === true) {
      resultText = "Yes, " + userAnswer + " is one of the seven!";
      score++;
    } else {
      resultText = "No, " + userAnswer + " is not one of the seven.";
  }

  // find out if the user won
  if (score === 5) {
    resultText += "<br>YOU WON! Congratulations " + userName + ", you got all 4 questions correct!";
  } else {
    resultText += "<br>SORRY, YOU LOSE! Nice try " + userName + ", but you got " + score + " questions right and " + (5 - score) + " wrong.";
  }

  displayQuestion(questionText);
  displayResult(userAnswer,resultText);

  document.getElementById("myBtn").value = "New Game";
}
