import React, {useEffect} from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'

function App() {



  return (
    <div className="App">
      <Switch>
        <Route exact path='/videochat' ><h1>Hello</h1></Route>
      </Switch>
    </div>
  );
}

export default App;
