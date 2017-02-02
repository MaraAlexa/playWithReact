import React from 'react';

class LoginPage extends React.Component {
  render() {
    return(
      <form className="login-page">
        <h2>Login Page</h2>
        <input type="text" required placeholder="user name"/>
        <input type="text" required placeholder="password"/>
        <button type="submit">Log In</button>
      </form>
    )
  }
}

export default LoginPage;
