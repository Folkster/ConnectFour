class Player extends Component {

    constructor(name, imHuman) {
        super();
        this.name = name;
        this.isBot = !imHuman;
        this.moves = 0;
    }
}