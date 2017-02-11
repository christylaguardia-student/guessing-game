// get user's name on page load
var userName = prompt("Welcome! What is your name?","type your name here");

// check if no name
while (userName === "" || userName === "type your name here") {
  userName = prompt("Don't be shy! Tell me, what is your name?","type your name here");
}

// check if user is named Charlie
if (userName.toLowerCase() === "charlie") {
  alert("OMG! That's my dog's name! It's nice to meet you!");
} else {
  alert("Glad to meet you " + userName + "!");
}
console.log("user's name: " + userName);

// play the guessing game when button is clicked
function playGame() {
  var correct = 0;
  var incorrect = 0;
  // var userName = prompt("Welcome to the Guessing Game!\nReady to play? Tell me your name.");

  // question 1
  var userAnswer1 = prompt("Question 1:\nIs lemon an anagram of melon?", "yes or no");
  console.log("user's answer 1: " + userAnswer1);
  if (userAnswer1.toLowerCase() === 'yes' || userAnswer1.toLowerCase() === 'y') {
    alert("Correct! Good job " + userName + "!");
    correct = 1;
  } else {
    alert("Sorry " + userName + ", wrong answer! The letters in melon can be re-arranged to spell lemon.");
    incorrect = 1;
  }
  console.log("total correct: " + correct);
  console.log("total incorrect: " + incorrect);

  // question 2
  var userAnswer2 = prompt("Quesion 2:\nIs Mount Olympus located in the Alps?", "yes or no?");
  console.log("user's answer 2: " + userAnswer2);
  if (userAnswer2.toLowerCase() === 'no' || userAnswer2.toLowerCase() === 'n') {
    alert("Right " + userName + "! Mount Olympus is in Greece. You sure know your mountains!");
    correct++;
  } else {
    alert("Nope, Mount Olympus is in Greece, not the Alps.");
    incorrect++;
  }
  console.log("total correct: " + correct);
  console.log("total incorrect: " + incorrect);

  // question 3
  var userAnswer3 = prompt("Question 3:\nIs Mars the fourth planet from the Sun?", "yes or no?");
  console.log("user's answer 3: " + userAnswer3);
  if (userAnswer3.toLowerCase() === 'yes' || userAnswer3.toLowerCase() === 'y') {
    alert("Bingo " + userName + "!");
    correct++;
  } else {
    alert("No " + userName + ". The forth planet from the Sun is Mars.");
    incorrect++;
  }
  console.log("total correct: " + correct);
  console.log("total incorrect: " + incorrect);

  // question 4
  var userAnswer4 = prompt("Question 4:\nHow many fingers does Mickey Mouse have?", "enter number here");
  console.log("user's answer 4: " + userAnswer4);
  if (userAnswer4.toLowerCase() == 8) {
    alert("Excelent " + userName + "!")
    correct++;
  } else if (userAnswer4 < 8) {
    alert("Actually, Mickey has 8 fingers total, not " + userAnswer4 + ". We're disappointed you didn't know that.");
    incorrect++;
  } else if (userAnswer4 > 8) {
    alert("Micky is a mouse. There's no way he could have that many fingers. The right answer is 8.");
    incorrect++;
  }
  console.log("total correct: " + correct);
  console.log("total incorrect: " + incorrect);

  // tell user if they won
  if (correct === 4) {
    alert("YOU WON!\nCongratulations " + userName + ", you got all 4 questions correct!");
  } else {
    alert("SORRY, YOU LOSE!\nNice try " + userName + ", but you got " + correct + " questions right and " + incorrect + " wrong.");
  }
}
