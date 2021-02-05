import { React, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import { useDispatch, useSelector } from "react-redux"
import { selectSendMessageIsOpen } from "./features/mailSlice"
import { login, selectUser } from "./features/userSlice"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SendMail from './components/SendMail';
import Login from './components/Login';
import { auth } from "./firebase"

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        // user logged in
        dispatch(login({
                displayName: user.displayName,
                email:user.email,
                photoUrl: user.photoURL
        }))
      }
    })
  },[])
  return (
    <Router>
      {!user ? (
        <Login/>
      ):
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
     { sendMessageIsOpen && <SendMail/>} 
    </div>
}
    </Router>
  );
}

export default App;
