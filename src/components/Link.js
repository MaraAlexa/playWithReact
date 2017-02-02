import React from 'react';
Link
class Link extends React.Component {
  render() {
    return(
      <li>{this.props.details.name}</li>
    )
  }
}

export default Link;
