class Board extends Component {
    constructor(thePlayers) {
        super();
        this.addRoute('/board', 'Connect 4 Game');
        this.colArray = [];
        this.players = thePlayers;
        this.createCols();
        this.game = new Game(this);
    }

    createCols() {
        for (let x = 0; x <= 6; x++) {
            this.colArray[x] = new Col(this, x);
        }
        
    }

}