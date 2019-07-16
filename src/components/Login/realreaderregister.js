import React, { Component } from 'react';
import ReaderRegister  from './readerregister.js'
import {Form} from 'antd'

export default class RealReaderRegister extends Component{

    constructor(props){
        super(props);
       
    }

    render(){
        const WrappedRegistrationForm = Form.create({ name: 'register' })(ReaderRegister);
        return(
               <div>
                    <WrappedRegistrationForm />

               </div>
        );
    }
}