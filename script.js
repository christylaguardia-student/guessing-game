// global variables
var userName = "";
var correct = 0;
var incorrect = 0;
var message = "";

getUserName();

function getUserName() {
  // get user's name on page load
  userName = prompt("Welcome! What is your name?","type your name here");
  console.log("user's name: " + userName);

  // check if no name
  while (userName === "" || userName === "type your name here") {
    userName = prompt("Don't be shy! Tell me, what is your name?","type your name here");
  }

  return userName;
}

var questionNumber = 1;

function playGame() {
  switch (questionNumber) {
    case 1:
      question1();
      break;
    case 2:
      question2();
      break;
    case 3:
      question3();
      break;
    case 4:
      question4();
      break;
    default:
      question
      break;
  }
  // question1();
  // question2();
  // question3();
  // question4();
  // gameScore();
}

function question1() {
  var userAnswer1 = prompt("Question 1:\nIs lemon an anagram of melon?", "yes or no");
  console.log("user's answer 1: " + userAnswer1);
  if (userAnswer1.toLowerCase() === 'yes' || userAnswer1.toLowerCase() === 'y') {
    message = "<br>Correct! Good job " + userName + "!";
    correct++;
  } else {
    message = "<br>Sorry " + userName + ", wrong answer! The letters in melon can be re-arranged to spell lemon.";
    incorrect++;
  }
  console.log("total correct: " + correct);
  console.log("total incorrect: " + incorrect);
  // show message on page
  var questionAnswer = document.getElementById("gameResult");
  questionAnswer.innerHTML = message

  questionNumber++;
}

function question2() {
  var userAnswer2 = prompt("Quesion 2:\nIs Mount Olympus located in the Alps?", "yes or no?");
  console.log("user's answer 2: " + userAnswer2);
  if (userAnswer2.toLowerCase() === 'no' || userAnswer2.toLowerCase() === 'n') {
    message += "<br>Right " + userName + "! Mount Olympus is in Greece. You sure know your mountains!";
    correct++;
  } else {
    message += "<br>Nope, Mount Olympus is in Greece, not the Alps.";
    incorrect++;
  }
  console.log("total correct: " + correct);
  console.log("total incorrect: " + incorrect);
  // show message on page
  var questionAnswer = document.getElementById("gameResult");
  questionAnswer.innerHTML = message

  questionNumber++;
}

function question3() {
  var userAnswer3 = prompt("Question 3:\nIs Mars the fourth planet from the Sun?", "yes or no?");
  console.log("user's answer 3: " + userAnswer3);
  if (userAnswer3.toLowerCase() === 'yes' || userAnswer3.toLowerCase() === 'y') {
    message += "<br>Bingo " + userName + "!";
    correct++;
  } else {
    message += "<br>No " + userName + ". The forth planet from the Sun is Mars.";
    incorrect++;
  }
  console.log("total correct: " + correct);
  console.log("total incorrect: " + incorrect);
  // show message on page
  var questionAnswer = document.getElementById("gameResult");
  questionAnswer.innerHTML = message

  questionNumber++;
}

function question4() {
  var userAnswer4 = prompt("Question 4:\nHow many fingers does Mickey Mouse have?", "enter number here");
  console.log("user's answer 4: " + userAnswer4);
  if (parseInt(userAnswer4) === 8) {
    message += "<br>Excelent " + userName + "!";
    correct++;
  } else if (userAnswer4 < 8) {
    message  = "Actually, Mickey has 8 fingers total, not " + userAnswer4 + ". We're disappointed you didn't know that.";
    incorrect++;
  } else if (userAnswer4 > 8) {
    message += "<br>Micky is a mouse. There's no way he could have " + userAnswer4 + " fingers. The right answer is 8.";
    incorrect++;
  } else {
    message += "<br>Wrong answer " + userName;
    incorrect++;
  }
  console.log("total correct: " + correct);
  console.log("total incorrect: " + incorrect);
  // show message on page
  var questionAnswer = document.getElementById("gameResult");
  questionAnswer.innerHTML = message

  questionNumber++;
}

function gameScore() {
  // tell user if they won
  if (correct === 4) {
    message += "YOU WON!\nCongratulations " + userName + ", you got all 4 questions correct!";
  } else {
    message += "SORRY, YOU LOSE!\nNice try " + userName + ", but you got " + correct + " questions right and " + incorrect + " wrong.";
  }
  var questionAnswer = document.getElementById("gameResult");
  questionAnswer.innerHTML = message
}
