import React, { Component } from 'react';
import './Statistic.css';
import { Table } from 'antd';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
const config= require('../config/config');
const axios = require('axios');


class Stastic extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }


    
   getdata=()=>{

    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
        title: { text: '借阅书目类别与数量柱状统计图' },
        tooltip: {},
        xAxis: {
            data: [ 
                this.state.data[0].bookType.valueOf(), 
                this.state.data[1].bookType.valueOf(), 
                this.state.data[2].bookType.valueOf(), 
                this.state.data[3].bookType.valueOf(), 
                this.state.data[4].bookType.valueOf()
                ]
        },
        yAxis: {},
        series: [{
            name: '数量',
            type: 'bar',
            data: [ 
                this.state.data[0].number.valueOf(), 
                this.state.data[1].number.valueOf(), 
                this.state.data[2].number.valueOf(), 
                this.state.data[3].number.valueOf(), 
                this.state.data[4].number.valueOf()
            ]
        }]
    });

   }

   
    componentDidMount() {
        axios.get(`${config.Front_PATH}/borrow/getstatistic`).then((data)=>{
            this.setState(
                {
                    data:data.data
                }
             
            );
            this.getdata();
        })
        console.log(this.state.data);
      
    }
    render() {
        const columns = [
            {
              title: '图书数量',
              dataIndex: 'number',
              key: 'number',
            },
            {
              title: '图书类别',
              dataIndex: 'bookType',
              key: 'bookType',
            },
            
          ];

        return (
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <Table columns={columns} dataSource={this.state.data} style={{width:'40%'}}/>
                <div id="main" style={{ width: 500, height: 500 }}></div>
            </div>
        );
    }
}
export default Stastic;