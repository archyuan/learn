import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import MainPageSuper from './superManager/MainPageSuper.jsx'
import MainPageNormal from './normalManager/MainPageNormal.jsx'
import {createBrowserHistory} from 'history'
import Interface from './Interface'


export default class Admin extends Component{
    

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                        
                      <Route exact path="/" component={Interface} />
                      <Route exact path="/superManager" component={MainPageSuper} />
                      <Route exact path="/superManager/*" component={MainPageSuper} />
                      <Route exact path="/normalManager" component={MainPageNormal} />
                      <Route exact path="/normalManager/*" component={MainPageNormal} />
                </Switch>
            </Router>
    
        );
    }
}




