class Slot extends Component{
    constructor(col, x, y) {
        super();
        this.col = col;
        this.x = x;
        this.y = y;
        this.isEmpty = true;
        this.player;
    }
}