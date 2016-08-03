//two player game
//black and white pieces
//black goes first
//pieces are placed on board intersections
//pieces have four freedoms at the cardinal axes
//ko: not allowed to make a move that returns the game to the previous state (no repetitive play)
//suicide: can't place a piece in a location where it will have zero freedoms
//score: number stones on the board plus the empty spaces controlled by those pieces
//dame: area controlled by neither black or white = no score
//board is 9x9 - pieces placed on corner have 2 freedoms and placed on edges have 3 freedoms
//game is over when both players pass twice consecutively or simply agree to end the game

String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index+character.length)
}

class GoBoard {
  constructor() {
    this.board = [...Array(81).keys()].map(k => '.').join('')
    this.blackNext = true
  }

  place(position) {
    // delete existing character at position
      // and keep it around!  we wil need it...
    // 
    this.board = this.board.replaceAt(position, 'Y')
  }
}

let gb = new GoBoard()
gb.place(4)
console.log('gb', gb)