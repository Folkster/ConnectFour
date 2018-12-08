class RulesPage extends Component {

  constructor(){
    super();
    this.addRoute('/rules', 'Rules');
    this.addEvents({
      'click button': 'toggleDetails'
    });
    this.showDetails = false;
  }

  unmount(){
    this.showDetails = false;
  }

  toggleDetails(){
    this.showDetails = !this.showDetails;
    this.render();
  }

}