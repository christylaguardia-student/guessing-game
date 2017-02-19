
// create the custom table headers
var customHeaders = "<tr><th>Question</th>";
customHeaders += "<th>" + userName + "\'s Answer</th>";
customHeaders += "<th>Result</th>";

// load empty table with headers on page load
var gameArray = [];
buildTable();

// add data to table
function buildTable() {
  var gameTable = document.getElementById("game");
  gameTable.innerHTML = customHeaders;

  for (var index = 0; index < gameArray.length; index++) {
    // message += "\n   " + gameArray[index];
    var gameResultRow = "<tr><td>" + gameArray[index][0] + "</td>";
    gameResultRow += "<td>" + gameArray[index][1] + "</td>";
    gameResultRow += "<td>" + gameArray[index][2] + "</td></tr>";
    gameTable.innerHTML += gameResultRow;
  }
  gameTable.innerHTML += "<tr><td colspan=2>" + userName + "\'s Score:</td><td>" + score + "</td></tr>"
  // console.log(message);
}
