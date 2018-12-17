class Game {
    constructor(theBoard) {
        this.board = theBoard;
        this.playerTurn = 'red';
        this.winchecker = new Winchecker(this.board);
        App.game = this;
    }


    nextTurn() {
        if (App.game.playerTurn === 'red') {
            App.game.playerTurn = 'yellow';
        } else {
            App.game.playerTurn = 'red'
        }
        this.board.render();
    }
}