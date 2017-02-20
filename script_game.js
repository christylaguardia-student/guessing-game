var userName = "";
// var questionsArray = ["Did Cinderella leave the ball at midnight?","In The Lion King, which side of Scar\'s face is his scar?","In Peter Pan, in what city does the story begin in?","How many fingers does Mickey Mouse have?","According to a song in Alice in Wonderland, how many un-birthdays does one have each year?","Name one of Snow White's seven dwarfs."];
var answersArray = ["yes","left","London","8","364",["doc", "grumpy", "happy", "sleepy", "bashful", "sneezy", "dopey"]];
var userAnswerArray = [];
var resultsArray = [];
var score = 0;

function playGame() {
  getUsersAnswers();
  checkAnswers();
  checkAnswer6();
  showResults();
}

function getUsersAnswers() {
  // get the user's answers from the form
  var form = document.forms["gameForm"];
  userName = form.elements["usersName"].value;
  console.log(userName);
  userAnswerArray.push(form.elements["answer1"].value);
  userAnswerArray.push(form.elements["answer2"].value);
  userAnswerArray.push(form.elements["answer3"].value);
  userAnswerArray.push(form.elements["answer4"].value);
  userAnswerArray.push(form.elements["answer5"].value);
  userAnswerArray.push(form.elements["answer6"].value.toLowerCase());
}

function checkAnswers() {
  // check answers for questions 1 through 5
  for (var i = 0; i < userAnswerArray.length - 1; i++) {
    console.log("user answer " + (i + 1) + ": " + userAnswerArray[i]);
    console.log("correct answer: " + answersArray[i]);
    if (userAnswerArray[i] === answersArray[i]) {
      resultsArray.push("<p class=\"correct\"><img src=\"happy-icon.png\"> Correct!</p>");
      score++;
      console.log("user answered question " + (i + 1) + " correctly");
    } else {
      resultsArray.push("<p class=\"incorrect\"><img src=\"sad-icon.png\"> Wrong!</p>");
      console.log("user answered question " + (i + 1) + " incorrectly");
    }
  }
}

function checkAnswer6() {
  // check answer for question 6
  var question6result = "";
  console.log("user answer 6: " + userAnswerArray[5]);
  console.log("correct answer: " + answersArray[i]);
  for (var i = 0; i < answersArray[5].length; i++) {
    console.log("checking against " + answersArray[5][i]);
    if (userAnswerArray[5] === answersArray[5][i]) {
      question6result = "<p class=\"correct\"><img src=\"happy-icon.png\"> Correct!</p>";
      score++;
      console.log("checking user's answer against " + answersArray[5][i]);
      console.log("user answered question 6 correctly");
      break; // stop for loop after matched to correct answer
    } else {
      question6result = "<p class=\"incorrect\"><img src=\"sad-icon.png\"> Wrong!</p>";
      console.log("checking user's answer against " + answersArray[5][i]);
    }
  }
  resultsArray.push(question6result);
}

function showResults() {
  // find out if the user won
  var scoreText = "";
  if (score === 6) {
    scoreText = "<span class=\"correct\">YOU WON!<br>Congratulations " + userName + ", you got all 6 questions correct!</span>";
  } else {
    scoreText = "<span class=\"incorrect\">SORRY, YOU LOSE!<br>Nice try " + userName + ", but you got " + score + " questions right and " + (6 - score) + " wrong.</span>";
  }
  // display results
  document.getElementById("answer1result").innerHTML = resultsArray[0];
  document.getElementById("answer2result").innerHTML = resultsArray[1];
  document.getElementById("answer3result").innerHTML = resultsArray[2];
  document.getElementById("answer4result").innerHTML = resultsArray[3];
  document.getElementById("answer5result").innerHTML = resultsArray[4];
  document.getElementById("answer6result").innerHTML = resultsArray[5];
  document.getElementById("gameScore").innerHTML = scoreText;
  console.log("score: " + score);
}

// TODO: reset the game for another play
// TODO: maybe change to answer one question at time, then show results in table
