import React from 'react';

class Body extends React.Component {
  render() {
    return(
      <div className>
        <h1>BODY SECTION</h1>
        <h2>{this.props.titleApp}</h2>
        <img src="https://unsplash.it/200/300?image=1" alt=""/>
      </div>
    )
  }
}

export default Body;
