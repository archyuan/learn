import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from "react-router-dom";
import StudentForm from '../../Containers/StudentForm/StudentForm';
import StudentList from '../../Containers/StudentList/StudentList';
import Style from './index.module.scss'
import axios from 'axios';
export default class Portal extends Component {

    UNSAFE_componentWillMount(){
        axios.defaults.withCredentials=true;
        axios.get('http://127.0.0.1:3005/reader/readerislogin').then((data)=>{
            if(data.data.b.match("nologin")){
                    this.props.history.replace({pathname:"/"});
            }
            console.log(data.data.b);
        });
    }
  

    render() {
        return (
            <Router>
                <div className={Style.portalRoot}>
                    <div className={Style.leftSide}>
                        <NavLink to="/student">学员列表</NavLink>
                        <NavLink to="/student/new">新增学员</NavLink>
                    </div>
                    <div className={Style.rightSide}>
                        <Switch>
                            <Redirect exact from="/" to="/student" />
                            <Route exact path="/student" component={StudentList} />
                            <Route exact path="/student/new" component={StudentForm} />
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}



