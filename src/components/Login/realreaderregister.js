import React, { Component } from 'react';
import ReaderRegister  from './readerregister.js'
import  ReaderAdd  from './ReaderAdd.jsx'
import {Form} from 'antd'

export default class RealReaderRegister extends Component{

    constructor(props){
        super(props);
       
    }

    render(){
        const WrappedReaderAdd = Form.create({ name: 'addReader' })(ReaderAdd);
        return(
               <div>
                 <WrappedReaderAdd />

               </div>
        );
    }
}