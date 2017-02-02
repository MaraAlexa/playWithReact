import React from 'react';

class AddNavbarLinks extends React.Component {
  createLink(event) {
    event.preventDefault();
    console.log('make a link');
    const link = {
      name: this.name.value,
      color: this.color.value
    }
    this.props.addLink(link);
    this.linkForm.reset();
  }
  render() {
    return(
      <form ref={(input) => this.linkForm = input} className="edit-links" onSubmit={(e) => this.createLink(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Link Name"/>
        <select ref={(input) => this.color = input}>
          <option value="white-bg">White</option>
          <option value="black-bg">Black</option>
        </select>
        <button type="submit"> Add Link</button>
      </form>
    )
  }
}

export default AddNavbarLinks;
