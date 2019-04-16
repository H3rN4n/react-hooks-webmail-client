import React from 'react';
import {Router} from "@reach/router"

//PAGES
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import WebmailPage from './pages/WebmailPage';

function AppRouter() {
  return (
    <Router>
      <NotFoundPage default/>
      <HomePage path="/"/>
      <LoginPage path="login/"/>
      <WebmailPage path="webmail/"/>
    </Router>
  );
}

export default AppRouter;
