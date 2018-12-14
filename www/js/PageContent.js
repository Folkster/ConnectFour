class PageContent extends Component {

  constructor() {
    super();
    this.startPage = new StartPage();
    this.gamePage = new GamePage(this);
    this.board = '';
    this.rulesPage = new RulesPage();
    this.missingPage = new MissingPage();
  }

}