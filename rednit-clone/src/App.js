import './App.css';
import Header from './Header';
import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link}
from "react-router-dom";
import TinderCard from 'react-tinder-card';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen';

function App() {
  return (
    <div className="App">

<Router>

    <Switch>

   
    <Route path="/chat/:person">
    <Header backButton = "/chat" />
      <Chats />
      <ChatScreen />
    </Route>

    <Route path="/chat">
    <Header backButton = "/" />
      <Chats />
    </Route>
    
    <Route path="/">
    <Header />
      <TinderCards />
      <SwipeButtons />
    </Route>

    </Switch>


    </Router>

    </div>
  );
}

export default App;

{/* HEADERS component */}
{/* the default route must stay at the bottom */}
{/* tinder cards*/}
{/* buttons below tinder cards */}

{/* buttons below tinder cards */}
{/* individual chat screen  */}

