import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'
import SignIn from "./components/SignIn";

function App() {


    return (
        <div className="App">
            <Switch>
                <Route exact path='/videochat'>
                    <h10>Hello</h10>
                </Route>
                <Route exact path='/signin'>
                    <SignIn/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
