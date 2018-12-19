class Player extends Component {

    constructor(name, imHuman) {
        super();
        this.name = name;
        this.bot = imHuman;
        this.moves = 0;
        console.log(name, this.bot);
    }
}