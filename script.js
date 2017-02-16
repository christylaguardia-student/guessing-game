// global variables
var userName = "";
var nextQuestion = 1;
var score = 0;
var messageArray = [];

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
      getWinner();
      nextQuestion = 0;
      break;
    default:
      // reset the game
      nextQuestion = 1;
      score = 0;
      messageArray = [];
      break;
  }

  // show results in console
  console.log("feedback: " + messageArray);
  console.log("score: " + score);
  console.log("next question number: " + nextQuestion);

  // combine all the messages so far
  var showMessages = "";
  for (var i = 0; i < messageArray.length; i++) {
    showMessages += messageArray[i];
  }

  // show messages on page
  var questionAnswer = document.getElementById("gameResult");
  questionAnswer.innerHTML = messageArray; // show everything in the array
}

function question1() {
  // ask the question
  var userAnswer1 = prompt("Question 1:\nIs lemon an anagram of melon?", "yes or no");
  console.log("question 1 answer: " + userAnswer1);
  // check if they answered correctly
  if (userAnswer1.toLowerCase() === 'yes' || userAnswer1.toLowerCase() === 'y') {
    messageArray.push("Correct! Good job " + userName + "!");
    score++;
  } else {
    messageArray.push("Sorry " + userName + ", wrong answer! The letters in melon can be re-arranged to spell lemon.");
  }
}

function question2() {
  // ask the question
  var userAnswer2 = prompt("Quesion 2:\nIs Mount Olympus located in the Alps?", "yes or no?");
  console.log("question 2 answer: " + userAnswer2);
  // check if they answered correctly
  if (userAnswer2.toLowerCase() === 'no' || userAnswer2.toLowerCase() === 'n') {
    messageArray.push("Right " + userName + "! Mount Olympus is in Greece. You sure know your mountains!");
    score++;
  } else {
    messageArray.push("Nope, Mount Olympus is in Greece, not the Alps.");
  }
}

function question3() {
  // ask the question
  var userAnswer3 = prompt("Question 3:\nIs Mars the fourth planet from the Sun?", "yes or no?");
  console.log("question 1 answer: " + userAnswer3);
  // check if they answered correctly
  if (userAnswer3.toLowerCase() === 'yes' || userAnswer3.toLowerCase() === 'y') {
    messageArray.push("Bingo " + userName + "!");
    score++;
  } else {
    messageArray.push("No " + userName + ". The forth planet from the Sun is Mars.");
  }
}

function question4() {
  // ask the question
  var userAnswer4 = prompt("Question 4:\nHow many fingers does Mickey Mouse have?", "enter number here");
  console.log("question 4 answer: " + userAnswer4);
  // check if they answered correctly
  if (parseInt(userAnswer4) === 8) {
    messageArray.push("Excelent " + userName + "!");
    score++;
  } else if (userAnswer4 < 8) {
    messageArray.push("Actually, Mickey has 8 fingers total, not " + userAnswer4 + ". We're disappointed you didn't know that.");
  } else if (userAnswer4 > 8) {
    messageArray.push("Micky is a mouse. There's no way he could have " + userAnswer4 + " fingers. The right answer is 8.");
  } else {
    messageArray.push("Wrong answer " + userName);
  }
}

function getWinner() {
  // find out if the user won
  if (score === 4) {
    messageArray.push("YOU WON! Congratulations " + userName + ", you got all 4 questions correct!");
  } else {
    messageArray.push("SORRY, YOU LOSE! Nice try " + userName + ", but you got " + score + " questions right and " + (4 - score) + " wrong.");
  }
}
