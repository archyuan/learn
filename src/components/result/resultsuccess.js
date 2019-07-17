import React, { Component } from 'react';
import { Result, Button } from 'antd';


export default class ResultSuccess extends Component{


    constructor(props){
        super(props);
    }


    gotoFisrstPage=()=>{
        this.props.history.replace("/");
        window.location.reload();
    };

     render(){
         return(

            <div>
                  <Result status={this.props.va.re}
                    title={this.props.va.readerid}
                   
                    extra={[
                    <Button type="primary" key="console" onClick={this.gotoFisrstPage.bind(this)} >
                        返回首页
                    </Button>,
                    
                    ]}
                    />
                </div>
         );
     }



}