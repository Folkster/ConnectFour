class Col extends Component {

  constructor(board, x) {
    super();
    this.board = board;
    this.x = x;
    this.arrow = new Arrow(this);
    this.slots = [];
    this.createSlots();
  }



  createSlots() {
    for (let y = 0; y <= 5; y++) {
      this.slots.push(new Slot(this, this.x, y));
    }
  }
}