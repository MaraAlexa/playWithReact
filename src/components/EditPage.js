import React from 'react';
import AddNavbarLinks from './AddNavbarLinks';

class EditPage extends React.Component {
  render() {
    return(
      <div>
        <h1>Edit Links</h1>
        <AddNavbarLinks  addLink={this.props.addLink}/>
      </div>
    )

  }
}

export default EditPage;
