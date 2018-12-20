class Game {
    constructor(theBoard) {
        this.board = theBoard;
        this.playerTurn = 'darkred';
        this.stopGame = false;
        this.winchecker = new Winchecker(this.board);
        this.recursiveController = 0;
        App.game = this;
    }


    nextTurn() {
        console.log("nextrurn1")
        if (App.game.playerTurn === 'darkred') {
            App.game.playerTurn = 'gold';
        } else {
            App.game.playerTurn = 'darkred'
        }
        console.log("nextrurn2")
        if (this.board.players[0].isBot && this.playerTurn === 'darkred') {
            let millisecondsToWait = 750;
            setTimeout(function () {
                console.log("nextrurnbot1")
                App.game.botMove();
            }, millisecondsToWait);

        }

        if (this.board.players[1].isBot && this.playerTurn === 'gold') {
            let millisecondsToWait = 750;
            setTimeout(function () {
                console.log("nextrurnbot2")
                App.game.botMove();
            }, millisecondsToWait);
        }
        console.log("nextrurn4")
        this.board.render();
        console.log("nextrurn5")

    }

    disableGameBoard() {
        this.stopGame = true;
    }

    addToHighscore(theWinner) {
        App.highScores.addNewPlayer(theWinner.name, theWinner.moves + 1);
    }

    botCheck() {
        if (App.game.board.players[0].isBot) {
            this.botMove();
        }
    }

    botMove() {

        if(App.game.stopGame){ return; }

        let col = Math.floor(Math.random() * 7);
        
        if (App.game.board.colArray[col].slots[5].color === '') {
            for (let i = 0; i < App.game.board.colArray[col].slots.length; i++) {   
                if (App.game.board.colArray[col].slots[i].color === '') {
                    App.game.board.colArray[col].slots[i].color = App.game.playerTurn;
                    App.game.winchecker.check(App.game.board.colArray[col].slots[i]);
                    if (App.game.playerTurn === 'darkred') {
                        App.game.board.players[0].moves++;
                    } else {
                        App.game.board.players[1].moves++;
                    }
                    //console.log(App.game.playerTurn);
                   // console.log(App.game.board.colArray[col].slots[i]);
                    App.game.nextTurn();
                    break;
                } 
            }
        } else {            
            this.botMove();
        }
    }
}