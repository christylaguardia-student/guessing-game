// global variables
var userName = "";
var score = 0;
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
  // find out what question they're on
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
      getWinner();
      break;
    default:
      questionNumber = 0;
      break;
  }

  // show results in console
  console.log("score: " + score);

  // show message on page
  var questionAnswer = document.getElementById("gameResult");
  questionAnswer.innerHTML = message

  // for next time they click the button, go to next question
  questionNumber++

  console.log("next question number: " + questionNumber)
}

function question1() {
  var userAnswer1 = prompt("Question 1:\nIs lemon an anagram of melon?", "yes or no");
  console.log("question 1 answer: " + userAnswer1);
  if (userAnswer1.toLowerCase() === 'yes' || userAnswer1.toLowerCase() === 'y') {
    message = "Correct! Good job " + userName + "!";
    score++;
  } else {
    message = "Sorry " + userName + ", wrong answer! The letters in melon can be re-arranged to spell lemon.";
  }
  return message;
}

function question2() {
  var userAnswer2 = prompt("Quesion 2:\nIs Mount Olympus located in the Alps?", "yes or no?");
  console.log("question 2 answer: " + userAnswer2);
  if (userAnswer2.toLowerCase() === 'no' || userAnswer2.toLowerCase() === 'n') {
    message += "<br>Right " + userName + "! Mount Olympus is in Greece. You sure know your mountains!";
    score++;
  } else {
    message += "<br>Nope, Mount Olympus is in Greece, not the Alps.";
  }
  return message;
}

function question3() {
  var userAnswer3 = prompt("Question 3:\nIs Mars the fourth planet from the Sun?", "yes or no?");
  console.log("question 1 answer: " + userAnswer3);
  if (userAnswer3.toLowerCase() === 'yes' || userAnswer3.toLowerCase() === 'y') {
    message += "<br>Bingo " + userName + "!";
    score++;
  } else {
    message += "<br>No " + userName + ". The forth planet from the Sun is Mars.";
  }
  return message;
}

function question4() {
  var userAnswer4 = prompt("Question 4:\nHow many fingers does Mickey Mouse have?", "enter number here");
  console.log("question 1 answer: " + userAnswer4);
  if (parseInt(userAnswer4) === 8) {
    message += "<br>Excelent " + userName + "!";
    score++;
  } else if (userAnswer4 < 8) {
    message  += "<br>Actually, Mickey has 8 fingers total, not " + userAnswer4 + ". We're disappointed you didn't know that.";
  } else if (userAnswer4 > 8) {
    message += "<br>Micky is a mouse. There's no way he could have " + userAnswer4 + " fingers. The right answer is 8.";
  } else {
    message += "<br>Wrong answer " + userName;
  }
  return message;
}

function getWinner() {
  if (score === 4) {
    message += "<br>YOU WON!\nCongratulations " + userName + ", you got all 4 questions correct!";
  } else {
    message += "<br>SORRY, YOU LOSE!\nNice try " + userName + ", but you got " + score + " questions right and " + (4 - score) + " wrong.";
  }
}
