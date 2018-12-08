class NavBar extends Component {

  constructor(){
    super();
    this.navItems = [
      new NavItem('Start', '/'),
      new NavItem('About', '/about'),
      new NavItem('Rules', '/rules')
    ];
  }

}