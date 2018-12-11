class Board extends Component {
    constructor() {
        super();
        this.addRoute('/board', 'Connect 4 Game');
       
        this.colArray = [];
        this.slotNbr = 1;
        this.createCols();


    }

    createCols() {
        for (let x = 0; x <= 6; x++) {
            this.colArray[x] = new Col(this, x);            
        }
        for (let i = 0; i<this.colArray.length; i++){
            for (let t = 0; t<this.colArray[i].slots.length; t++){
                console.log("Slot " + this.slotNbr + " X:" + this.colArray[i].slots[t].x + " Y:" + this.colArray[i].slots[t].y);
                this.slotNbr++;
            }
        }
        
    }
}