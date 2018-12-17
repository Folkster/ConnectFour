class Winchecker {

    constructor(board) {
        this.board = board;
        this.xPos;
        this.yPos;
        this.color;
    }

    check(slot) {
        this.xPos = slot.x;
        this.yPos = slot.y;
        this.color = slot.color;
        if(slot.x<=3){
            this.checkRight();
        }
        if(slot.x>=3){
            this.checkLeft();
        }
        if(slot.y>=3){
            this.checkVertical();
        }
        if(slot.x<=3 && slot.y>=4) {
            this.checkDiagonalDownRight();
        }
        

    }

    checkRight() {
        let counter = 0;
        for(let i = this.xPos; i<=6 ;i++){
            if (this.color === App.game.board.colArray[(i)].slots[this.yPos].color)  {
                counter++;
            } else break;
            if (counter === 4){
                console.log('FOUR IN A ROW-RIGHT');
                this.win();
                break;
            }
        }
    }

    checkLeft (){
        let counter = 0;
        for(let i = this.xPos;i>=0;i--){
            if (this.color === App.game.board.colArray[(i)].slots[this.yPos].color)  {
                counter++;
            } else break;
            if (counter === 4){
                console.log('FOUR IN A ROW-LEFT');
                this.win();
                break;
            }
        }
    }
    checkVertical() {
        let counter = 0;
        for(let i = this.yPos;i>=0;i--){
            if (this.color === App.game.board.colArray[(this.xPos)].slots[i].color)  {
                counter++;
            } else break;
            if (counter === 4){
                console.log('FOUR IN A ROW-VERTICAL');
                this.win();
                break;
            }
        }
    }

    checkDiagonalDownRight() {
        let counter = 0;
        let horiz = this.xPos;
        for(let i = this.yPos;i>=0;i--){
            if (this.color === App.game.board.colArray[(horiz)].slots[i].color)  {
                horiz++;
                counter++;
            } else break;
            if (counter === 4){
                console.log('FOUR IN A ROW-DOWN-RIGHT');
                this.win();
                break;
            }
        }

    }

    checkDiagonalUpRight() {

    }
    checkDiagonalDownLeft() {

    }

    checkDiagonalUpLeft() {

    }
    win() {
        if(this.color==='red'){
            console.log('WINNER: ' + this.board.players[0].name);
        } else {
            console.log('WINNER: ' + this.board.players[1].name);
        }
    }


}