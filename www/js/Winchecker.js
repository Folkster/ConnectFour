
class Winchecker{
    
    constructor(board){ 
        this.board = board;
    }

    check(slot){
        this.checkHorisontal(slot);
    
    }

    checkHorisontal(slot){
        console.log(slot);

        let xPos = slot.x;
        let yPos = slot.y;
        let color = slot.color;
        let counter = 1;

        console.log(board.colArray[(xPos+1)].slots[yPos].color);


    }

    checkVertical(){

    }

    checkDiagonalRight(){
        
    }
    checkDiagonalLeft(){

    }

   
}




    







