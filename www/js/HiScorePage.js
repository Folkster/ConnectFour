class HiScorePage extends Component {

    constructor() {
        super();
        this.addRoute('/highscores', 'Highscores');
        this.highScores = [];
        this.playerNames = [];
        this.playerScores = [];
        this.addNewPlayer('Josefin', 6);
        this.addNewPlayer('Emil', 5);
        this.addNewPlayer('Anders', 11);
        this.addNewPlayer('Anna', 4);
        this.addNewPlayer('Johan', 9);
        App.highScores = this;
    }

    sortArray() {
        this.highScores.sort((a, b) => {
            return a.score > b.score ? 1 : -1;
        });
    }

    addNewPlayer(name, score) {
        this.highScores.push(new HighScoreItem(name, score));
        this.sortArray();
    }
}