class Board extends Component {
    constructor(thePlayers) {
        super();
        this.addRoute('/board', 'Connect 4 Game');
        this.addEvents({
            'click .play-again': 'playAgain'
          });
        this.colArray = [];
        this.players = thePlayers;
        this.createCols();
        this.winner = false;
        this.game = new Game(this);
        App.game.botCheck();
    }

    createCols() {
        for (let x = 0; x <= 6; x++) {
            this.colArray[x] = new Col(this, x);
        }
    }



    playAgain(){
        //reset moves
        App.game.board.players[0].moves = 0;
        App.game.board.players[1].moves = 0;

        //making a new emty colArray, then puting in new slots
        this.colArray = [];
        this.createCols();

        //makes clickable again
        App.game.stopGame = false;

        App.game.playerTurn = 'darkred';
        this.winner = false;
        this.render();
        
        console.log("play again har körts!")

    }
    
}