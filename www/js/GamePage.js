class GamePage extends Component {

  constructor(content) {
    super();
    this.addRoute('/play', 'Play Game');
    this.addEvents({
      'click .start-game': 'start',
      'click .nav-switch': 'navSwitch'
    });
    this.showDetails = false;
    this.startGame = false;
    this.players = [];
    this.pageContent = content;
    App.resetGamePage = this;
  }

  unmount() {
    this.showDetails = false;
  }

  valPlayer() {
    this.startGame = true;
    this.render();
  }

  navSwitch() {
    App.globalNav.render();
  }

  start() {
    let playerName1 = this.baseEl.find('.name-field1').val();
    let playerName2 = this.baseEl.find('.name-field2').val();

    if (this.startGame) {
      this.pageContent.board = new Board(this.players);
      this.render();
    } else if (playerName1.length >= 2 && playerName1.length <= 20 && playerName2.length >= 2 && playerName2.length <= 20) {
      this.players.push(new Player(playerName1));
      this.players.push(new Player(playerName2));
      this.valPlayer();
      App.changeNav = true;
      this.render();
    } else {
      alert('add player name between 2 and 20 characters');
      this.render();
    }
  }
}