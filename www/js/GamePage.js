class GamePage extends Component {

  constructor(content) {
    super();
    this.addRoute('/play', 'Play Game');
    this.addEvents({
      'click .start-game': 'start',
      'click .nav-switch': 'navSwitch',
      'keyup .to-add': 'addOnEnter'
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
    this.start();
    this.render();
  }

  navSwitch() {
    App.globalNav.render();
  }

  start() {

    let playerName1 = this.baseEl.find('.name-field1').val();
    let playerName2 = this.baseEl.find('.name-field2').val();
    let imHuman1 = this.baseEl.find('.player-one .human:checked').length > 0;
    let imHuman2 = this.baseEl.find('.player-two .human:checked').length > 0;

    if (this.startGame) {
      this.pageContent.board = new Board(this.players);
      this.render();
    } else if (playerName1.length >= 2 && playerName1.length <= 20 && playerName2.length >= 2 && playerName2.length <= 20) {
      this.players = [];
      this.players.push(new Player(playerName1, imHuman1, 'darkred'));
      this.players.push(new Player(playerName2, imHuman2, 'gold'));
      this.valPlayer();
      App.changeNav = true;
      this.unmount();
      this.render();
    } else {
      this.showDetails = true;
      this.render();
    }
  }

  addOnEnter(e){
    if(e.which === 13){
      this.start();
    }
  }

 

}