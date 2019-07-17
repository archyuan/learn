import React, { Component } from 'react';

import  ReaderAdd  from './ReaderAdd.jsx'
import {Form} from 'antd'
import  ResultSuccess from '../result/resultsuccess.js'

export default class RealReaderRegister extends Component{

    constructor(props){
        super(props);
       this.state=({
           option:'0',
           feedbackvalue:{}
       });
    }

    resultStatefeedBack=(value)=>{
       console.log(value);
       if(value.re=="success" || value.re=='error'||value.re=='warning'){
           this.setState({
            feedbackvalue:value,
            option:'1'
           });
       }
    };

    render(){
     
        let com = undefined;
        if(this.state.option=='0'){
           let ss =1;
        }else if(this.state.option=='1') {
            com=1;
        }
     
        const WrappedReaderAdd = Form.create({ name: 'addReader' })(ReaderAdd);
    
        return(
               <div>
              {  com==undefined && <WrappedReaderAdd  feedback={this.resultStatefeedBack.bind(this)}  /> }
              {  com==1 && <ResultSuccess va={this.state.feedbackvalue} history={this.props.history} /> }
               </div>
        );
    }
}