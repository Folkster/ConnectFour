class Board extends Component {
    constructor() {
        super();
        this.addRoute('/board', 'Connect 4 Game');
        this.colArray = [];
        this.createCols();
    }

    createCols() {
        for (let x = 0; x <= 6; x++) {
            this.colArray[x] = new Col(this, x);            
        }
        console.log(this.colArray);
        
    }
}