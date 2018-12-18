class Game {
    constructor(theBoard) {
        this.board = theBoard;
        this.playerTurn = 'darkred';
        this.stopGame = false;
        this.winchecker = new Winchecker(this.board);
        App.game = this;
    }


    nextTurn() {
        if (App.game.playerTurn === 'darkred') {
            App.game.playerTurn = 'gold';
        } else {
            App.game.playerTurn = 'darkred'
        }
        this.board.render();
    }

    disableGameBoard() {
        this.stopGame = true;
    }

    displayWinner(theWinner) {
        App.highScores.addNewPlayer(theWinner.name, theWinner.moves + 1);
    }
}