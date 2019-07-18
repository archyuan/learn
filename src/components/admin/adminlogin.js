import React, { Component } from 'react';
import AdminLoginForm from './adminloginform.jsx'
import { Form } from 'antd';
import './AdminLogin.scss'


export default class AdminLogin extends Component{

    constructor(props){
        super(props);
       
    }




    render(){

        const Loginform = Form.create({ name: 'normal_login' })(AdminLoginForm);

        return(
            <div className="divoflogin" >
             <div className="divofloginform"   >
           <Loginform  history={this.props.history} />
             </div>
            </div>
         
        );
    }





}