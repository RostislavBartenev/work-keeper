import React, {useEffect} from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'
import Video from "./components/Video/Video";

function App() {



  return (
    <div className="App">
      <Switch>
        <Route exact path='/videochat' component={Video} />
      </Switch>
    </div>
  );
}

export default App;
