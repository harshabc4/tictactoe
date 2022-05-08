// const allCells = document.querySelectorAll('.cell')
// allCells.forEach(el => el.addEventListener('click', place))
// // document.querySelectorAll('.cell').addEventListener('click', place)


// function place(){
//     document.querySelector('.cell').innerText = "x"
// }

class Board {
    constructor(grid) {
        this._grid = grid
        this._grid = [
            [new Square(), new Square(), new Square()],
            [new Square(), new Square(), new Square()],
            [new Square(), new Square(), new Square()]
        ];
    }
    get grid(){
        return this._grid
    }

    isFull() {
        let count = 0;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (this._grid[i][j]._state != "") { count++ }
          }
        }
        if (count == 9) {
          return true;
        }
        else {
          return false;
        }
      }

    checkWin() {
        for (let i = 0; i < 3; i++) {
            if (this._grid[i][0]._state == this._grid[i][1]._state && this._grid[i][0]._state == this._grid[i][2].state && this._grid[i][0]._state != "") {
            printWinner();
            }
        }

        for (let j = 0; j < 3; j++) {
            if (this._grid[0][j]._state == this._grid[1][j]._state && this._grid[0][j]._state == this._grid[2][j]._state && this._grid[0][j]._state != "") {
            printWinner();
            }
        }

        if ((this._grid[0][0]._state == this._grid[1][1]._state && this._grid[0][0]._state == this._grid[2][2]._state && this._grid[0][0]._state != "") ||
            (this._grid[0][2]._state == this._grid[1][1]._state && this._grid[0][2]._state == this._grid[2][0]._state && this._grid[0][2]._state != "")) {
            printWinner();
        }

        if (this.isFull()) {
            printTie();
        }
    }
}

class Square {
    constructor(state) {
        this._state = state
        this._state = "";
    }
    get state(){
        return this._state
    }
  
    whoseTurn() {
        if (counter == 0) {
        return this._state = "x";
        }
        else {
        return this._state = "o";
        }
    }
}

class Player {
    constructor(symbol) {
      this._symbol = symbol;
    }
    get symbol(){
        return this._symbol
    }
}

class Game {
    constructor(board, players) {
        this._board = board
        this._board = new Board();
        this._players = players
        this._players = [
        new Player("x"),
        new Player("o")
      ];
    }
    get board(){
        return this._board
    }
    get players(){
        return this._players
    }
}

let newGame = new Game();

let counter = 0;

function play() {
  let gameBoard = document.getElementById('game-board');
  gameBoard.addEventListener('click', (event) => {
    // console.log(event.target);
    event.target.innerHTML = newGame._players[counter]._symbol;

    let squareNum = event.target.id.split('');
    let row = squareNum[0];
    let col = squareNum[1];

    newGame._board._grid[row][col].whoseTurn();
    newGame._board.checkWin();

    if (counter == 0) { counter = 1 }
    else { counter = 0 }
  });
}


function printWinner() {
  let winner = newGame._players[counter]._symbol;
  console.log(`${winner} wins`);
}


function printTie() {
  console.log("It's a tie");
}


function playAgain() {
  let newGameButton = document.getElementById('new-game');
  newGameButton.addEventListener('click', () => {
    for (let i = 0; i < 9; i++) {
      document.querySelectorAll('.cell')[i].innerHTML = "";
    }
    newGame = new Game();
  });
}


play();
playAgain();