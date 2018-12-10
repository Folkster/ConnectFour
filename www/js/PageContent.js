class PageContent extends Component {

  constructor() {
    super();
    this.startPage = new StartPage();
    this.gamePage = new GamePage();
    this.hiScorePage = new HiScorePage();
    this.board = new Board();
    this.rulesPage = new RulesPage();
    this.missingPage = new MissingPage();
  }

}