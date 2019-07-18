import React, { Component } from 'react'
import Axios from 'axios';
const config = require('../../config/config')

class Index extends Component {


    constructor(props){
        super(props);
        this.state={
            data:"defd"
        };
    }
    change = ()=>{
        const _this = this; 
        Axios.get(`${config.Back_PATH}/animal/list`).then((data)=>{
            _this.setState({
                data:data.data
        
            });
           // console.log(data);
            //console.log(data.data);
        });
    };

    render() {
        return (
            <div>
                <p>{this.state.data.grade}</p><br/>
                <button onClick={this.change} >点击</button>
            </div>
        )
    }
}

export default Index;