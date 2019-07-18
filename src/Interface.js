import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';



class Interface extends Component {

    handleClick1 = ()=>{
        this.props.history.push('/superManager');
    }
    handleClick2 = ()=>{
        this.props.history.push('/normalManager');
    }
    render() {
    return (
            <div>
            <Button onClick={this.handleClick1}>超级管理员</Button>
            <Button onClick={this.handleClick2}>普通管理员</Button>
            </div>
    );
  }
}

export default Interface;
