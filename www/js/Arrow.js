class Arrow extends Component {
    constructor(col) {
        super();
        this.col = col;
        this.addEvents({
            'click .next-turn': 'arrowClick',
        });
    }

    arrowClick() {      
        if (!App.game.stopGame) {
            for (let i = 0; i < this.col.slots.length; i++) {
                if(App.game.board.players[0].color !== App.game.playerTurn && !App.game.board.players[0].isBot && App.game.board.players[1].isBot) {
                    break;
                }
                if(App.game.board.players[1].color !== App.game.playerTurn && !App.game.board.players[1].isBot && App.game.board.players[0].isBot) {
                    break;
                }
                if(App.game.board.players[0].isBot && App.game.board.players[1].isBot) {
                    break;
                }
                if (this.col.slots[i].color === '') {
                    App.game.board.colArray[this.col.x].slots[i].color = App.game.playerTurn;
                    App.game.winchecker.check(this.col.slots[i]);
                    if (App.game.playerTurn === 'darkred') {
                        App.game.board.players[0].moves++;
                    } else {
                        App.game.board.players[1].moves++;
                    }
                    App.game.nextTurn();

                    break;
                }
            }
        }
    }
}