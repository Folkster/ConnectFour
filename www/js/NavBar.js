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
      new NavItem('Quit Game', '/play')
    ];
    App.globalNav = this;
  }

  changeBackNav() {
    App.changeNav = false;
    App.globalNav.render();
    App.resetGamePage.startGame = false;
    App.resetGamePage.render();
  }
}