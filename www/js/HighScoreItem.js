class HighScoreItem extends Component {
    constructor(playerName, playerScore) {
        super();
        this.name = playerName;
        this.score = playerScore;
        this.timestamp = new Date().getTime();
    }
}