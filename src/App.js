import React from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SendMail from './components/SendMail';

function App() {
  return (
    <Router>
    <div className="app">
      <Header/>
      <div className="app__body">
      <SideBar/>
      <Switch>
        <Route path="/mail">
          <Mail/>
        </Route>
        <Route path="/">
          <EmailList/>
        </Route>
      </Switch>
      </div>
      <SendMail/>
    </div>
    </Router>
  );
}

export default App;
