import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css';
// Four web pages: home, app, login, 404
import HomePage from './components/HomePage';
import App from './components/App';
import LoginPage from './components/LoginPage';
import NotFound from './components/NotFound';

const Root = () => {
  return(
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={HomePage}></Match>
        <Match pattern="/login/:loginId" component={LoginPage}></Match>
        <Match pattern="/app/:appId" component={App}></Match>
        <Miss component={NotFound}></Miss>
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));
