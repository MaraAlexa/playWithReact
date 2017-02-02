import React from 'react';

class HomePage extends React.Component {
  constructor() {
    super();
    this.goToApp = this.goToApp.bind(this);
  }
  goToApp(event) {
    // prevent reloading the page when submit
    event.preventDefault();
    console.log('Clicked submit');
    // grab the text from the input
    const appId = this.storeInput.value;
    // transition from "/" to "/app/:appId"
    this.context.router.transitionTo(`/app/${appId}`);
  }
  render() {
    return(
      <form className="page-selector" onSubmit={this.goToApp}>
        <h2>HOME page</h2>
        <input type="text" required placeholder="name of your app" defaultValue="React App1"
          ref={(input) => { this.storeInput = input }} />
        <button type="submit">Go to your app</button>
      </form>
    )
  }
}
// tell React that HomePage comp is expecting a router
HomePage.contextTypes = {
  router: React.PropTypes.object
}
export default HomePage;
