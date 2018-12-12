class Game {
    constructor(theBoard) {
        this.board = theBoard;
        this.playerTurn = 'red';
        App.game = this;
        console.log(this.board.players);  
    }


nextTurn(){
    if (this.playerTurn === 'red'){
        this.playerTurn = 'yellow';
    }
    else { this.playerTurn = 'red'}
    
    this.board.render();
    
    console.log(this.playerTurn);
    }






}