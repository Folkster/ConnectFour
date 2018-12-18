class Winchecker {

    constructor(board) {
        this.board = board;
        this.xPos;
        this.yPos;
        this.color;
        this.counter;
    }

    check(slot) {
        this.xPos = slot.x;
        this.yPos = slot.y;
        this.color = slot.color;

        this.checkHorizontal();
        this.winCheck();

        if (this.counter !== 0 && slot.y >= 3) {
            this.checkVertical();
            this.winCheck();
        }

        if (this.counter !== 0) {
            this.checkUpRightDownLeft();
            this.winCheck();
        }

        if (this.counter !== 0) {
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
        console.log('CHECKING RIGHT');
        for (let i = this.xPos + 1; i <= 6; i++) {
            if (this.color === App.game.board.colArray[(i)].slots[this.yPos].color) {
                this.counter++;
            } else break;
        }
    }

    checkLeft() {
        console.log('CHECKING LEFT');
        for (let i = this.xPos - 1; i >= 0; i--) {
            if (this.color === App.game.board.colArray[(i)].slots[this.yPos].color) {
                this.counter++;
            } else break;
        }
    }

    checkVertical() {
        this.counter = 0;
        console.log('CHECKING VERTICAL');
        for (let i = this.yPos; i >= 0; i--) {
            if (this.color === App.game.board.colArray[(this.xPos)].slots[i].color) {
                this.counter++;
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
        console.log('CHECKING UP-RIGHT');
        let horiz = this.xPos + 1;
        for (let i = this.yPos + 1; i <= 5; i++) {
            if (i >= 0 && i <= 5 && horiz >= 0 && horiz <= 6) {
                if (this.color === App.game.board.colArray[(horiz++)].slots[i].color) {
                    this.counter++;
                    console.log(this.counter);
                } else break;
            } else break;
        }
    }

    checkDownLeft() {
        console.log('CHECKING DOWN-LEFT');
        let horiz = this.xPos - 1;
        for (let i = this.yPos - 1; i >= 0; i--) {
            if (i >= 0 && i <= 5 && horiz >= 0 && horiz <= 6) {
                if (this.color === App.game.board.colArray[(horiz--)].slots[i].color) {
                    this.counter++;
                    console.log(this.counter);
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
        console.log('CHECKING UP-LEFT');
        let horiz = this.xPos - 1;
        for (let i = this.yPos + 1; i <= 5; i++) {
            if (i >= 0 && i <= 5 && horiz >= 0 && horiz <= 6) {
                if (this.color === App.game.board.colArray[(horiz--)].slots[i].color) {
                    this.counter++;
                    console.log(this.counter);
                } else break;
            } else break;
        }
    }

    checkDownRight() {
        console.log('CHECKING DOWN-RIGHT');
        let horiz = this.xPos + 1;
        for (let i = this.yPos - 1; i >= 0; i--) {
            if (i >= 0 && i <= 5 && horiz >= 0 && horiz <= 6) {
                if (this.color === App.game.board.colArray[(horiz++)].slots[i].color) {
                    this.counter++;
                    console.log(this.counter);
                } else break;
            } else break;
        }
    }

    winCheck() {
        if (this.counter >= 4) {
            if (this.color === 'red') {
                console.log('WINNER: ' + App.game.board.players[0].name);
                App.game.disableGameBoard();
                App.game.displayWinner(this.board.players[0]);

            } else {
                console.log('WINNER: ' + App.game.board.players[1].name);
                App.game.disableGameBoard();
                App.game.displayWinner(App.game.board.players[1]);
            }
            this.counter = 0;
        }
    }
}