class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Play Game', '/play'),
      new NavItem('Rules', '/rules'),
      new NavItem('Highscores', '/highscores')
    ];

  }

}