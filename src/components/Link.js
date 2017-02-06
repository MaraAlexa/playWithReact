import React from 'react';

class Link extends React.Component {
  render() {
    const { details } = this.props;
    const black = details.color === "black-text";
    return(
      <li className="name-link" color={black}>
        {this.props.details.name}
      </li>
    )
  }
}

export default Link;
