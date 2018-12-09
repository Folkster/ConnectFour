class GamePage extends Component {

  constructor() {
    super();
    this.addRoute('/play', 'Play Game');
    this.addEvents({
      'click .change-nav': 'changeNav',
      'click .start-game': 'start'
    });
    this.showDetails = false;
    this.changeNavBar = true;
    this.startGame = false;
  }

  unmount() {
    this.showDetails = false;
  }

  changeNav() {
    this.changeNavBar = true;
    this.render();
  }

  start() {
    this.startGame = true;
    this.render();
  }

}