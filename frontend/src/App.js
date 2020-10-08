import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'
import SignIn from "./components/SignIn";
import Room from "./components/Room/Room";

function App() {


    return (
        <div className="App">
            <Switch>
                <Route exact path='/videochat' component={Room} />

                <Route exact path='/signin'>
                    <SignIn/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
