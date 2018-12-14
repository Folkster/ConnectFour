class Winchecker {

    constructor(board) {
        this.board = board;
    }

    check(slot) {
        this.checkHorisontal(slot);

    }

    checkHorisontal(slot) {


        let xPos = slot.x;
        let yPos = slot.y;
        let color = slot.color;
        let counter = 1;
        console.log('checking...' + color);
        console.log(App.game.board.colArray[xPos].slots[yPos]);
        if (color === App.game.board.colArray[(xPos + 1)].slots[yPos].color) {
            console.log('TWO IN A ROW-RIGHT');
        }
    }

    checkVertical() {

    }

    checkDiagonalRight() {

    }
    checkDiagonalLeft() {

    }
}