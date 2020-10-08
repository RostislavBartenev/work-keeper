import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'
import Room from "./components/Room/Room";

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/videochat' component={Room} />
      </Switch>
    </div>
  );
}

export default App;
