class Board extends Component {
    constructor() {
        super();
        this.addRoute('/board', 'Connect 4 Game');
        this.gameBoard = [];
        this.i = 0;
        this.createSlots();
        
    }

    createSlots() {
        for (let x = 0; x <= 6; x++) {
            for (let y = 0; y <= 5; y++) {
                this.gameBoard[this.i] = new Slot(this, x, y);
                this.i++;
            }
        }

    }

}