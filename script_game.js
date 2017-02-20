var userName = "Christy";
var answersArray = ["yes","left","London","8","364",["doc", "grumpy", "happy", "sleepy", "bashful", "sneezy", "dopey"]];
console.log(answersArray);
var resultsArray = [];
var score = 0;

function playGame() {
  // get the user's answers from the form
  var form = document.forms["gameForm"];
  var userAnswerArray = [];
  userAnswerArray.push(form.elements["answer1"].value);
  userAnswerArray.push(form.elements["answer2"].value);
  userAnswerArray.push(form.elements["answer3"].value);
  userAnswerArray.push(form.elements["answer4"].value);
  userAnswerArray.push(form.elements["answer5"].value);
  userAnswerArray.push(form.elements["answer6"].value.toLowerCase());
  console.log("user's answers: " + userAnswerArray);

  // check answers for questions 1 through 5
  for (var i = 0; i < userAnswerArray.length - 1; i++) {
    if (userAnswerArray[i] === answersArray[i]) {
      resultsArray.push("<p class=\"correct\"><img src=\"happy-icon.png\"> Correct!</p>");
      console.log("user answered question " + i + " correctly");
      score++;
    } else {
      resultsArray.push("<p class=\"incorrect\"><img src=\"sad-icon.png\"> Wrong!</p>");
      console.log("user answered question " + i + " incorrectly");
    }
  }

  // check answer for question 6
  for (var i = 0; i < answersArray[5].length; i++) {
    if (userAnswerArray[5] === answersArray[5][i]) {
      resultsArray.push("<p class=\"correct\"><img src=\"happy-icon.png\"> Correct!</p>");
      score++;
      console.log("user answered question 6 correctly");
      break; // stop for loop after matched to correct answer
    } else {
      resultsArray.push("<p class=\"incorrect\"><img src=\"sad-icon.png\"> Wrong!</p>");
    }
  }

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
// var questionsArray = ["Did Cinderella leave the ball at midnight?","In The Lion King, which side of Scar\'s face is his scar?","In Peter Pan, in what city does the story begin in?","How many fingers does Mickey Mouse have?","According to a song in Alice in Wonderland, how many un-birthdays does one have each year?","Name one of Snow White's seven dwarfs."];
