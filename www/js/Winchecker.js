class Winchecker {

    constructor(board) {
        this.board = board;
    }

    check(slot) {
        if(slot.x<6){
            this.checkRight(slot);
        }
        

    }

    checkRight(slot) {
        let xPos = slot.x;
        let yPos = slot.y;
        let color = slot.color;
        let counter = 0;
        console.log(App.game.board.colArray[xPos].slots[yPos]);
        for(xPos;xPos<=6;xPos++){
            if (color === App.game.board.colArray[(xPos)].slots[yPos].color)  {
                counter++;
            }
            if (counter === 4){
                console.log('FOUR IN A ROW-RIGHT');
                if(color==='red'){
                    console.log('WINNER: ' + this.board.players[0].name);
                } else {
                    console.log('WINNER: ' + this.board.players[1].name);
                }
                break;
            }
        }
        
    }

    checkVertical() {

    }

    checkDiagonalRight() {

    }
    checkDiagonalLeft() {

    }

    
}