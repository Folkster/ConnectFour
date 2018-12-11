class Arrow extends Component{
    constructor(col) {
        super();
        this.col = col;
        this.addEvents({
            'click .arrow': 'arrowClick',
          });
    }

    arrowClick() {
        
        for(let i = 0; i<this.col.slots.length;i++){
            if(this.col.slots[i].isEmpty){
                console.log(this.col.slots[i]);
/*                 function colorchange() {
                    this.col.slots[i].style.color = "red";
                } */
                this.col.slots[i].isEmpty = false;
                break;
            }
        }
    }
}