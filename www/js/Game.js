class Game {
    constructor(theBoard) {
        this.board = theBoard;
        this.playerTurn = 'red';
        App.game = this;
    }


    nextTurn() {
        if (this.playerTurn === 'red') {
            this.playerTurn = 'yellow';
        } else {
            this.playerTurn = 'red'
        }
        this.board.render();
    }
}