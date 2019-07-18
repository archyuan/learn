import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Portal from '../Portal/Portal.jsx'
import ReaderDetail from '../readerdetail/detail'
import Login from '../Login/login'
import BookInfo from '../book/bookdetail.js'
import RealReaderRegister from '../Login/realreaderregister.js'
import Admin from '../../admin.js'
import Interface from '../.././Interface.js'
import MainPageSuper from '../../superManager/MainPageSuper.jsx'
import MainPageNormal from '../../normalManager/MainPageNormal.jsx'
export default class Userouter extends Component {




 
    render() {

        return (

            <Router history = { createBrowserHistory() } >

            <Switch >
            <Route exact path = "/"component = { Login } />
            
              <Route  path = "/reader/register" component={RealReaderRegister}  />
            <Route exact path = "/reader/detail" component = { ReaderDetail } /> 
            <Route exact path = "/reader/bookdetail" component = { BookInfo } /> 
            <Route exact path="/as" component={Interface} />
            <Route exact path="/superManager" component={MainPageSuper} />
            <Route exact path="/superManager/*" component={MainPageSuper} />
            <Route exact path="/normalManager" component={MainPageNormal} />
            <Route exact path="/normalManager/*" component={MainPageNormal} />
            </Switch> 
            </Router>

        );
    }

}