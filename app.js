var player = 1;

state = {
  score: [[[],[],[]],[[],[],[]],[[],[],[]]]
}

$(".click").one("click", function(event) {
  console.log(state["score"])
  if (JSON.stringify(state["score"]) === JSON.stringify([[[],[],[]],[[],[],[]],[[],[],[]]])) {
    $("#above-msg").html(" ")
  }
  if (player === 1) {
    var html = '<p class="mark">X</p>'
    $(this).html(html);
    player = 2;
    var html = '<h2>Player 2, it' + "'" + 's your turn.';
    $("#above-msg").html(html);  
    updateScoreWithX(event["currentTarget"]["className"][10], event["currentTarget"]["className"][19]);
  } else {
    var html = '<p class="mark">O</p>'
    $(this).html(html);
    player = 1;
    var html = '<h2>Player 1, it' + "'" + 's your turn.';
    $("#above-msg").html(html);
    updateScoreWithO(event["currentTarget"]["className"][10], event["currentTarget"]["className"][19]);
  }
});

var updateScoreWithX = function(row, column) {
  console.log(state["score"])
  state["score"][row][column] = "X";
  checkWinner();
};

var updateScoreWithO = function(row, column) {
  console.log(state["score"])
  state["score"][row][column] = "O";
  checkWinner();
};

var checkWinner = function() {
  if (state["score"][0][0] === state["score"][0][1] && state["score"][0][0] === state["score"][0][2]) {
    endGame();
  } else if (state["score"][1][0] === state["score"][1][1] && state["score"][1][0] === state["score"][1][2]) {
    endGame();
  } else if (state["score"][2][0] === state["score"][2][1] && state["score"][2][0] === state["score"][2][2]) {
    endGame();
  } else if (state["score"][0][0] === state["score"][1][0] && state["score"][0][0] === state["score"][2][0]) {
    endGame();
  } else if (state["score"][0][1] === state["score"][1][1] && state["score"][0][1] === state["score"][2][1]) {
    endGame();
  } else if (state["score"][0][2] === state["score"][1][2] && state["score"][0][2] === state["score"][2][2]) {
    endGame();
  } else if (state["score"][0][0] === state["score"][1][1] && state["score"][0][0] === state["score"][2][2]) {
    endGame();
  } else if (state["score"][0][2] === state["score"][1][1] && state["score"][0][2] === state["score"][2][0]) {
    endGame();
  };
};

var endGame = function() {
  if (player === 1) {
    player = 2;
  } else {
    player = 1
  };
  var html = '<h1>Congratulations Player ' + player.toString() + '! You got three in a row!'
  html += '<form class="restart">';
  html +=  '<button type="submit" name="restart-button">Start over</button></form>'
  console.log(html) 
  $("#above-msg").html(html);
  $(".click").off("click");
}

$(".restart-button").on("click", function() {
  location.reload();
});

var renderStartingMsg = function() {
  var html = '<h2 class="starterMsg">Welcome to Tic Tac Toe! The rules are simple enough. Player 1 will be X and player 2 will be O. Player 1 may start!</h2>'
  $("#above-msg").html(html);

}

renderStartingMsg();



















