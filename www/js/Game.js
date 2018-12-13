class Game {
    constructor(theBoard) {
        this.board = theBoard;
        this.playerTurn = 'red';
        this.winchecker = new Winchecker(this.board);
        App.game = this;
    }


nextTurn(){
    if (this.playerTurn === 'red'){
        this.playerTurn = 'yellow';
    }
    else { this.playerTurn = 'red'}
    
    this.board.render();
    
    }






}