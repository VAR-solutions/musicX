import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Player from './components/Player';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Player />
      </div>
    </Router>
  );
}

export default App;
