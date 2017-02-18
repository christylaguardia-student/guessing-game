// global variables
var userName = "";
var nextQuestion = 1;
var score = 0;
var questionText = "";
var userAnswer = "";
var resultText = "";

function playGame() {
  // find out what question to give the user
  switch (nextQuestion) {
    case 1:
      getUserName();
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

function getUserName() {
  userName = prompt("Excelent! Before we begin, what is your name?","type your name here");
  // check if no name
  while (userName === "" || userName === "type your name here") {
    userName = prompt("Don't be shy! Tell me your name?","type your name here");
  }
  return userName;
  console.log("user's name: " + userName);
}

function displayResult() {
  // show the qustion
  var questionElement = document.getElementById("gameQuestion");
  questionElement.innerHTML = questionText;
  console.log("Question: " + questionText);

  // show the user's answer
  var displayAnswer = document.getElementById("userAnswer");
  displayAnswer.innerHTML = userName + "'s answer: " + userAnswer;
  console.log("Answer: " + userAnswer);

  // show the if the user got it correct
  var displayResult = document.getElementById("gameResult");
  displayResult.innerHTML = resultText;
  console.log("Result: " + resultText);

  // show the total score
  var displayScore = document.getElementById("gameScore");
  displayScore.innerHTML = "Score: " + score + " / 6";
  console.log("Score: " + score);
}

function question1() {
  questionText = "Did Cinderella leave the ball at midnight?";
  userAnswer = prompt(questionText, "yes or no?");
  // check if answer is correct
  if (userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() === 'y') {
    resultText = "Correct! Good job" + userName + "!";
    score++;
  } else {
    resultText = "Sorry " + userName + " wrong answer!";
  }
  // change button text
  document.getElementById("myBtn").value = "Next Question";
}

function question2() {
  questionText = "In The Lion King, is Scar's scar on the right side of his face?";
  userAnswer = prompt(questionText, "yes or no?");
  // check if answer is correct
  if (userAnswer.toLowerCase() === 'no' || userAnswer.toLowerCase() === 'n') {
    resultText = "Right " + userName + "! You sure know your villains!";
    score++;
  } else {
    resultText = "Nope, his scar is on the left side of his face.";
  }
}

function question3() {
  questionText = "In Peter Pan, did crodile ate Captain Hook's left hand?";
  userAnswer = prompt(questionText, "yes or no?");
  // check if answer is correct
  if (userAnswer.toLowerCase() === 'yes' || userAnswer.toLowerCase() === 'y') {
    resultText = "Bingo " + userName + "!";
    score++;
  } else {
    resultText = "No " + userName + ". The hook was on his left hand.";
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
    score = "YOU WON! Congratulations " + userName + ", you got all 6 questions correct!";
  } else {
    score = "SORRY, YOU LOSE! Nice try " + userName + ", but you got " + score + " questions right and " + (6 - score) + " wrong.";
  }
  // change button text
  document.getElementById("myBtn").value = "New Game";
}
