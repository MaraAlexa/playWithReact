import React from 'react';
import Body from './Body';
import EditPage from './EditPage';
import Link from './Link';
// import LoginPage from './LoginPage';

class App extends React.Component {

  constructor() {
    super();

    this.addLink = this.addLink.bind(this);
    // initial state
    this.state = {
      links: {}
    };
  }
  // take the created link from AddNavbarLinks comp
  addLink(link) {
    // update state
    const links = {...this.state.links}; //take a copy of the existing links state
    const timestamp = Date.now(); //  to create an unic id
    links[`link-${timestamp}`] = link; // add a new link to the links object
    // set state- tell react what particular state has changed
    this.setState({ links: links })


  }
  render() {
    return(
      <div className="app-content">

        <div className="content">

          <div className="navbar">
            <ul className="list-of-links">
              {
                Object
                  .keys(this.state.links)
                  .map(key => <Link key={key} details={this.state.links[key]}/>)
              }
            </ul>
            {/* <MainLinks firstlink="my-own-link"/> */}
          </div>

          <Body titleApp="My own title"/>
        </div>

        <div className="edit-section">
          <h2>EDIT SECTION</h2>
          <EditPage addLink={this.addLink}/>
        </div>

      </div>
    )
  }
}

export default App;
