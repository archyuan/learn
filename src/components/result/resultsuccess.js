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
                  <Result status="success"
                    title={`注册成功。您的读者编号为：${this.props.va.readerid}`}
                   
                    extra={[
                    <Button type="primary" key="console" onClick={this.gotoFisrstPage.bind(this)} >
                        返回首页登录
                    </Button>,
                    
                    ]}
                    />
                </div>
         );
     }



}