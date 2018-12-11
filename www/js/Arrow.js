class Arrow extends Component{
    constructor(col) {
        super();
        this.col = col;
        this.addEvents({
            'click .arrow': 'arrowClick',
          });
    }

    arrowClick() {
        
        for(let i = this.col.slots.length-1; i=>0 ;i--){
            if(this.col.slots[i].isEmpty){
                console.log("slot-"+this.col.slots[i].x+this.col.slots[i].y);
                document.getElementById("slot-"+this.col.slots[i].x+this.col.slots[i].y).style.color = "red";
                this.col.slots[i].isEmpty = false;
                break;
            }
        }
    }
}