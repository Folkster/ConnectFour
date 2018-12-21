class Player extends Component {

    constructor(name, imHuman, color) {
        super();
        this.name = name;
        this.isBot = !imHuman;
        this.moves = 0;
        this.color = color;
    }
}