class Arrow extends Component{
    constructor(col) {
        super();
        this.col = col;
        this.addEvents({
            'click .next-turn': 'arrowClick',
/*             'click .next-turn': 'switchPlayer'
 */          });
    }

    arrowClick() {
        console.log('arrowclick');
        for(let i = this.col.slots.length-1; i>=0 ;i--){
            if(this.col.slots[i].color===''){
               /* console.log("slot-"+this.col.slots[i].x+this.col.slots[i].y);*/
                this.col.slots[i].color = App.game.playerTurn;
                this.switchPlayer();
                break;
            }
        }
    }
    switchPlayer(){
       App.game.nextTurn();
    }
}