import React, { Component } from 'react';
import {  Router, Route, Redirect, Switch, NavLink } from "react-router-dom";
import { createBrowserHistory } from "history";
import Portal  from '../Portal/Portal.jsx'
import ReaderDetail from '../readerdetail/detail'
import  Login from '../Login/login'
import BookInfo  from '../book/bookdetail.js'
export default class Userouter extends Component{

       



    render(){

        return(
              
            <Router history={createBrowserHistory()} >

                <Switch>
                 <Route  exact path="/" component={Login}   /> 
                 <Route  path="/ab" component={Portal} />
                 <Route exact path="/reader/detail"  component={ReaderDetail}  />
                 <Route  exact path="/reader/bookdetail"  component={BookInfo} />
                </Switch>
            </Router>
           
        );
    }

}