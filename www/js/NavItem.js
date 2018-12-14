class NavItem extends Component {

  constructor(name, url) {
    super();
    this.addEvents({
    });
    this.name = name;
    this.url = url;
    this.changeNavItemName = false;
  }

  changeNav() {
    if (this.name === 'Play Game') {
      this.name = 'Quit Game';
      this.changeNavItemName = true;
      this.render();
    } else if (this.changeNavItemName && this.name === 'Quit Game') {
      this.name = 'Play Game';
      this.changeNavItemName = false;
      this.render();
    }
  }
}