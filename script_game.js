var userName = "Christy";

var questionsArray = ["Did Cinderella leave the ball at midnight?","In The Lion King, which side of Scar\'s face is his scar?","In Peter Pan, in what city does the story begin in?","How many fingers does Mickey Mouse have?","According to a song in Alice in Wonderland, how many un-birthdays does one have each year?","Name one of Snow White's seven dwarfs."];

var answersArray = ["yes","left","London","8","364",["doc", "grumpy", "happy", "sleepy", "bashful", "sneezy", "dopey"]];
console.log(answersArray);
console.log(answersArray.length);

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
  userAnswerArray.push(form.elements["answer6"].value);
  console.log(userAnswerArray);

  // check answers for questions 1 through 5
  for (var i = 0; i < userAnswerArray.length - 1; i++) {
    if (userAnswerArray[i] === answersArray[i]) {
      resultsArray.push("correct");
      score++;
    } else {
      resultsArray.push("incorrect");
    }
  }

  // check answer for question 6
  for (var i = 0; i < answersArray[5].length; i++) {
    if (userAnswerArray[5].toLowerCase() === answersArray[5][i]) {
      resultsArray.push("correct");
      score++;
      break; // stop for loop after matched to correct answer
    } else {
      resultsArray.push("incorrect");
    }
  }

  // find out if the user won
  if (score === 6) {
    score = "YOU WON! Congratulations " + userName + ", you got all 6 questions correct!";
  } else {
    score = "SORRY, YOU LOSE! Nice try " + userName + ", but you got " + score + " questions right and " + (6 - score) + " wrong.";
  }

  // display results
  document.getElementById("answer1result").innerHTML = resultsArray[0];
  document.getElementById("answer2result").innerHTML = resultsArray[1];
  document.getElementById("answer3result").innerHTML = resultsArray[2];
  document.getElementById("answer4result").innerHTML = resultsArray[3];
  document.getElementById("answer5result").innerHTML = resultsArray[4];
  document.getElementById("answer6result").innerHTML = resultsArray[5];
  document.getElementById("gameScore").innerHTML = score;

  console.log(resultsArray);
  console.log(score);
}
