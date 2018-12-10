class NavBar extends Component {

  constructor() {
    super();
    this.navItems = [
      new NavItem('Start', '/'),
<<<<<<< Updated upstream
      new NavItem('Play Game', '/play'),
      new NavItem('About', '/about'),
      new NavItem('Rules', '/rules')
    ];
    this.playingNav = [
      new NavItem('-', '/'),
      new NavItem('Exit Game', '/'),
      new NavItem('-', '/'),
      new NavItem('-', '/')
=======
      new NavItem('About', '/about'),
      new NavItem('HiScore', '/hiScore')
>>>>>>> Stashed changes
    ];
  }

}