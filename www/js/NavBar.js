class NavBar extends Component {

  constructor() {
    super();
    this.addEvents({
      'click .nav-switch-back': 'changeBackNav'
    });
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Play Game', '/play'),
      new NavItem('Rules', '/rules'),
      new NavItem('Highscores', '/highscores'),
      new NavItem('Quit Game', '/play')
    ];
    App.globalNav = this;
  }

  changeBackNav() {
    // App.game.board.players = []; <= this empties the array, but causes a hard reload and error if it is used here
    // don't touch this and use this later when winchecker is fixed
    App.changeNav = false;
    App.globalNav.render();
    // vi bör för semantikens skull döpa om variabeln nedan senare
    // blev lite weird naming convention i detta sammanhanget
    // Sean
    App.resetGamePage.startGame = false;
    App.resetGamePage.render();
  }
}