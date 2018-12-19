class HiScorePage extends Component {

    constructor() {
        super();
        this.addRoute('/highscores', 'Highscores');
        this.highScores = [];
        JSON._classes(HighScoreItem)
        App.highScores = this;
    }

    async mount() {
        this.highScores = await JSON._load('highscores');
        this.render();
    }

    sortArray() {
        this.highScores.sort((a, b) => {
            if (a.score === b.score) {
                return a.timestamp < b.timestamp ? -1 : 1;
            }
            return a.score > b.score ? 1 : -1;
        });
    }

    addNewPlayer(name, score) {
        this.highScores.push(new HighScoreItem(name, score));
        this.sortArray();
        JSON._save('highscores', this.highScores);
    }
}