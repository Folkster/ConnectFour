class Arrow extends Component {
    constructor(col) {
        super();
        this.col = col;
        this.addEvents({
            'click .next-turn': 'arrowClick',
            /*             'click .next-turn': 'switchPlayer'
             */
        });
    }

    arrowClick() {
        for (let i =  0; i < this.col.slots.length; i++) {
            if (this.col.slots[i].color === '') {
                App.game.board.colArray[this.col.x].slots[i].color = App.game.playerTurn;
                App.game.winchecker.check(this.col.slots[i]);
                if (App.game.playerTurn === 'red') {
                App.game.board.players[0].moves++;
            } else {
                App.game.board.players[1].moves++;
            }
                this.switchPlayer();

                break;
            }
        }
    }
    switchPlayer() {

        App.game.nextTurn();
    }
}