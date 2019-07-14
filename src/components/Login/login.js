import React, { Component } from 'react';
import NormalLoginForm from './loginform.js'

import { Form, Icon, Input, Button, Checkbox } from 'antd';




export default  class Login extends Component{
    LoginF=null;

    constructor(props){
        super(props);
       
    }

    componentDidMount(){
    }
   
    render(){

        const Loginform = Form.create({ name: 'normal_login' })(NormalLoginForm);

        return(
            <div className="divoflogin" >
             <div className="divofloginform"   >
           <Loginform  history={this.props.history} />
             </div>
            </div>
         
        );
    }

}