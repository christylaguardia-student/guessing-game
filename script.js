// get user's name on page load
var userName = prompt("Welcome! What is your name?","type your name here");

// check if no name
while (userName === "" | userName === "type your name here") {
  userName = prompt("Don't be shy! Tell me, what is your name?","type your name here");
}

// check if user is named Charlie
if (userName.toLowerCase() === "charlie") {
  alert("OMG! That's my dog's name! It's nice to meet you!");
} else {
  alert("Glad to meet you " + userName + "!");
}
console.log("User's name: " + userName);

// play the guessing game when button is clicked
//function playGame() {
  var score = 0;
  // var userName = prompt("Welcome to the Guessing Game!\nReady to play? Tell me your name.");

  // question 1
  var userAnswer1 = prompt("Question 1:\nIs lemon an anagram of melon?");
  if (userAnswer1.toLowerCase() === 'yes' || userAnswer1.toLowerCase() === 'y') {
    alert("Correct! Good job " + userName + "!");
    score = 1;
  } else {
    alert("Sorry " + userName + ", wrong answer! The letters in melon can be re-arranged to spell lemon.");
  }
  console.log("User's first answer: " + userAnswer1);
  console.log("Score: " + score);

  // question 2
  var userAnswer2 = prompt("Quesion 2:\nIs Mount Olympus located in the Alps?");
  if (userAnswer2.toLowerCase() === 'no') {
    alert("Right " + userName + "! Mount Olympus is in Greece. You sure know your mountains!");
    score++;
  } else {
    alert("Nope, Mount Olympus is in Greece, not the Alps.");
  }
  console.log("User's second answer: " + userAnswer2);
  console.log("Score: " + score);

  // question 3
  var userAnswer3 = prompt("Question 3:\nIs Mars the fourth planet from the Sun?");
  if (userAnswer3.toLowerCase() === 'yes') {
    alert("Bingo " + userName + "!");
    score++;
  } else {
    alert("No " + userName + ". The forth planet from the Sun is Mars.");
  }
  console.log("User's third answer: " + userAnswer3);
  console.log("Score: " + score);

  // question 4
  var userAnswer4 = prompt("Question 4:\nHow many fingers does Mickey Mouse have?");
  if (userAnswer4.toLowerCase() == 8) {
    alert("Excelent " + userName + "!")
    score++;
  } else if (userAnswer4 < 8) {
    alert("Actually, Mickey has 8 fingers, not " + userAnswer4 + ".");
  } else if (userAnswer4 > 8) {
    alert("Micky is a mouse. There's no way he could have that many fingers. The right anaswer is 8.");
  }
  console.log("User's forth answer: " + userAnswer4);
  console.log("Final Score: " + score);

  // tell user if they won
  if (score === 4) {
    alert("Congratulations " + userName + ", you won!");
  } else {
    alert("I'm sorry " + userName + ", you only got " + score + " correct out of 4. You lose.");
  }
//}
