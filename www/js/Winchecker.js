class Winchecker {

    constructor() {
        this.xPos;
        this.yPos;
        this.color;
        this.counter;
        this.winningSlots = [];
    }

    check(slot) {
        this.xPos = slot.x;
        this.yPos = slot.y;
        this.color = slot.color;

        this.winningSlots.push(slot);
        this.checkHorizontal();
        this.winCheck();

        if (this.counter !== 0 && slot.y >= 3) {
            this.winningSlots.push(slot);
            this.checkVertical();
            this.winCheck();
        }

        if (this.counter !== 0) {
            this.winningSlots.push(slot);
            this.checkUpRightDownLeft();
            this.winCheck();
        }

        if (this.counter !== 0) {
            this.winningSlots.push(slot);
            this.checkUpLeftDownRight();
            this.winCheck();
        }
    }

    checkHorizontal() {
        this.counter = 1;
        if (this.xPos <= 5) {
            this.checkRight();
        }
        if (this.xPos >= 1) {
            this.checkLeft();
        }
    }

    checkRight() {
        for (let i = this.xPos + 1; i <= 6; i++) {
            if (this.color === App.game.board.colArray[(i)].slots[this.yPos].color) {
                this.counter++;
                this.winningSlots.push(App.game.board.colArray[(i)].slots[this.yPos])
            } else break;
        }
    }

    checkLeft() {
        for (let i = this.xPos - 1; i >= 0; i--) {
            if (this.color === App.game.board.colArray[(i)].slots[this.yPos].color) {
                this.counter++;
                this.winningSlots.push(App.game.board.colArray[(i)].slots[this.yPos])
            } else break;
        }
    }

    checkVertical() {
        this.counter = 1;
        for (let i = this.yPos - 1; i >= 0; i--) {
            if (this.color === App.game.board.colArray[(this.xPos)].slots[i].color) {
                this.counter++;
                this.winningSlots.push(App.game.board.colArray[(this.xPos)].slots[i]);
            } else {
                break;
            }
        }
    }

    checkUpRightDownLeft() {
        this.counter = 1;
        this.checkUpRight();
        this.checkDownLeft();
    }

    checkUpRight() {
        let horiz = this.xPos + 1;
        for (let i = this.yPos + 1; i <= 5; i++) {
            if (i >= 0 && i <= 5 && horiz >= 0 && horiz <= 6) {
                if (this.color === App.game.board.colArray[(horiz)].slots[i].color) {
                    this.counter++;
                    this.winningSlots.push(App.game.board.colArray[(horiz)].slots[i]);
                    horiz++;
                } else break;
            } else break;
        }
    }

    checkDownLeft() {
        let horiz = this.xPos - 1;
        for (let i = this.yPos - 1; i >= 0; i--) {
            if (i >= 0 && i <= 5 && horiz >= 0 && horiz <= 6) {
                if (this.color === App.game.board.colArray[(horiz)].slots[i].color) {
                    this.counter++;
                    this.winningSlots.push(App.game.board.colArray[(horiz)].slots[i]);
                    horiz--;
                } else break;
            } else break;
        }
    }

    checkUpLeftDownRight() {
        this.counter = 1;
        this.checkUpLeft();
        this.checkDownRight();
    }

    checkUpLeft() {
        let horiz = this.xPos - 1;
        for (let i = this.yPos + 1; i <= 5; i++) {
            if (i >= 0 && i <= 5 && horiz >= 0 && horiz <= 6) {
                if (this.color === App.game.board.colArray[(horiz)].slots[i].color) {
                    this.counter++;
                    this.winningSlots.push(App.game.board.colArray[(horiz)].slots[i]);
                    horiz--;
                } else break;
            } else break;
        }
    }

    checkDownRight() {
        let horiz = this.xPos + 1;
        for (let i = this.yPos - 1; i >= 0; i--) {
            if (i >= 0 && i <= 5 && horiz >= 0 && horiz <= 6) {
                if (this.color === App.game.board.colArray[(horiz)].slots[i].color) {
                    this.counter++;
                    this.winningSlots.push(App.game.board.colArray[(horiz)].slots[i]);
                    horiz++;
                } else break;
            } else break;
        }
    }

    winCheck() {
        if (this.counter >= 4) {
            App.game.board.winner = true;
            App.game.disableGameBoard();
            if (this.color === 'darkred') {
                if (!App.game.board.players[0].isBot) {
                    App.game.addToHighscore(App.game.board.players[0]);
                }

            } else {
                if (!App.game.board.players[1].isBot) {
                    App.game.addToHighscore(App.game.board.players[1]);
                }
            }
            this.counter = 0;
            this.showWinSlots();
        }
        this.winningSlots = [];


    }

    showWinSlots(){ 
        for(let i = 0; i<this.winningSlots.length; i++ ){
            App.game.board.colArray[this.winningSlots[i].x].slots[this.winningSlots[i].y].winningSlot = true;
        }    
    }
}