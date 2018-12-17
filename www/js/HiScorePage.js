class HiScorePage extends Component {

    constructor() {
        super();
        this.addRoute('/highscores', 'Highscores');
        this.highScores = [];
        this.playerNames = [];
        this.playerScores = [];
        this.addPlayerScore('Josefin', 6);
        this.addPlayerScore('Emil', 5);
        this.addPlayerScore('Anders', 11);
        this.addPlayerScore('Anna', 4);
        this.addPlayerScore('Johan', 9);
        console.log(this.highScores);
        this.printScores();
    }

    addPlayerScore(playerName, playerScore) {
        let addNewPlayer = {
            name: playerName,
            score: playerScore
        }
        this.highScores.push(addNewPlayer);
        this.sortArray();
    }

    sortArray() {
        this.highScores.sort((a, b) => {
            return a.score > b.score ? 1 : -1;
        });
    }

    printScores() {
        for (let i = this.highScores.length -1; i >= 0 ; i--) {
            this.playerNames.unshift(this.highScores[i].name);
            this.playerScores.unshift(this.highScores[i].score);
        }
        
        console.log(this.playerNames)
        console.log(this.playerScores)
    }



}