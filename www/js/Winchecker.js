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

        if(this.counter !== 0 && slot.y >= 3) {
            this.checkVertical();
        }     
  /*       if (slot.x >= 3) {
            this.checkLeft();
        }
        if (slot.y >= 3) {
            this.checkVertical();
        }
        if (slot.x <= 3 && slot.y >= 3) {
            this.checkDownRight();
        }
        if (slot.x <= 3 && slot.y <= 2) {
            this.checkUpRight();
        }
        if (slot.x >= 3 && slot.y >= 3) {
            this.checkDownLeft();
        }
        if (slot.x >= 3 && slot.y <= 2) {
            this.checkUpLeft();
        }

        if (slot.x >= 1 && slot.x >= 5) {
            this.checkUpLeftDownRight();
            this.checkUpRightDownLeft();
        } */
    }

    checkHorizontal() {
        this.counter = 1;
        if (this.xPos <= 5 ){
            this.checkRight();
        }
        if (this.xPos >= 1 ){
            this.checkLeft();
        }
        this.winCheck();
    }

    checkRight() {
        console.log('CHECKING RIGHT');
        for (let i = this.xPos+1; i <= 6; i++) {
            if (this.color === App.game.board.colArray[(i)].slots[this.yPos].color) {
                this.counter++;
            } else break;
        }
    }

    checkLeft() {
        console.log('CHECKING LEFT');
        for (let i = this.xPos-1; i >= 0; i--) {
            if (this.color === App.game.board.colArray[(i)].slots[this.yPos].color) {
                this.counter++;
            } else break;
        }
    }

    checkVertical() {
        this.counter = 1;
        console.log('CHECKING VERTICAL');
        for (let i = this.yPos; i >= 0; i--) {
            if (this.color === App.game.board.colArray[(this.xPos)].slots[i].color) {
                this.counter++;
            } else {
                this.winCheck();
                break;
            }
        }
    }

    checkDownRight() {
        let counter = 0;
        let horiz = this.xPos;
        for (let i = this.yPos; i >= 0; i--) {
            if (this.color === App.game.board.colArray[(horiz++)].slots[i].color) {
                counter++;
            } else break;
            if (counter === 4) {
                console.log('FOUR IN A ROW-DOWN-RIGHT');
                this.win();
                break;
            }
        }
    }

    checkUpRight() {
        let counter = 0;
        let horiz = this.xPos;
        for (let i = this.yPos; i <= 5; i++) {
            if (this.color === App.game.board.colArray[(horiz++)].slots[i].color) {
                counter++;
            } else break;
            if (counter === 4) {
                console.log('FOUR IN A ROW-UP-RIGHT');
                this.win();
                break;
            }
        }
    }

    checkDownLeft() {
        let counter = 0;
        let horiz = this.xPos;
        for (let i = this.yPos; i >= 0; i--) {
            if (this.color === App.game.board.colArray[(horiz--)].slots[i].color) {
                counter++;
            } else break;
            if (counter === 4) {
                console.log('FOUR IN A ROW-DOWN-LEFT');
                this.win();
                break;
            }
        }
    }

    checkUpLeft() {
        let counter = 0;
        let horiz = this.xPos;
        for (let i = this.yPos; i <= 5; i++) {
            if (this.color === App.game.board.colArray[(horiz--)].slots[i].color) {
                counter++;
            } else break;
            if (counter === 4) {
                console.log('FOUR IN A ROW-UP-LEFT');
                this.win();
                break;
            }
        }
    }

    checkUpRightDownLeft() {

    }

    checkUpLeftDownRight() {

    }

    winCheck() {
        if (this.counter === 4) {
            if (this.color === 'red') {
                console.log('WINNER: ' + this.board.players[0].name);
            } else {
                console.log('WINNER: ' + this.board.players[1].name);
            }
            this.counter = 0;
        }
        

    }
}

