class PageContent extends Component {

  constructor() {
    super();
    this.startPage = new StartPage();
    this.gamePage = new GamePage(this);
    this.hiScorePage = new HiScorePage();
    this.board = '';
    this.rulesPage = new RulesPage();
    this.ragePage = new RagePage();
    this.missingPage = new MissingPage();
  }

}