class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('Play Game', '/play'),
      new NavItem('About', '/about'),
      new NavItem('Rules', '/rules'),
      new NavItem('HiScore', '/hiScore')
    ];
    this.playingNav = [
      new NavItem('-', '/'),
      new NavItem('Exit Game', '/'),
      new NavItem('-', '/'),
      new NavItem('-', '/')
    ];
  }

}