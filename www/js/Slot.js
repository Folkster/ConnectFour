class Slot extends Component {
    constructor(col, x, y) {
        super();
        this.col = col;
        this.x = x;
        this.y = y;
        this.player;
        this.color = '';
        this.winningSlot = false;
        this.addEvents({
            'click .slot': 'slotClick',
            
        });
    }

    slotClick(){
        this.col.arrow.arrowClick();
    }
}