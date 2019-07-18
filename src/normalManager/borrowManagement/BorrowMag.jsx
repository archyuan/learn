import React, { Component } from 'react';
import './Borrow.css';
import { Table, Tag} from 'antd';
const axios = require('axios');
const config = require('../../config/config.js')
const columns = [
  {
    title: '借阅编号',
    dataIndex: 'borrowId',
    key: 'borrowId',
  },
  {
    title: '图书ISDN',
    dataIndex: 'bookId',
    key: 'bookId',
  },
  {
    title: '书名',
    dataIndex: 'bookName',
    key: 'bookName',
  },
  {
    title: '读者编号',
    dataIndex: 'readerId',
    key: 'readerId',
  },
  {
    title: '借出时间',
    dataIndex: 'borrowTime',
    key: 'borrowTime',
  },
  {
    title: '归还时间',
    dataIndex: 'returnTime',
    key: 'returnTime',
  },
  {
    title: '借阅状态',
    dataIndex: 'borrowStation',
    key: 'borrowStation',
    render: (text, record) => {
      let show='无';
      let color='gray';
      if(text=='0'){
        show='申请中';
        color='blue';
      }else if(text=='1'){
        show='已归还';
        color='green';
      }else if(text=='2'){
        show='借阅中';
        color='lime';
      }else if(text=='3'){
        color='red';
        show='拒绝借阅';
      }else if(text=='4'){
        color='orange';
        show='申请归还';
      }

      return(
        <Tag  color={color} key={text} >
                  {show}
        </Tag>
      );
    },
       
  },
];


/*

 switch(text){
          case:'0'{
            color='blue',
            text='申请中'
          }
          case:'1'{
            color='green',
            text='已归还'
          }
          case:'2'{
            color='lim',
            text='借阅中'
          }
          case:'3'{
            color='red',
            text='拒绝借阅'
          }
          case:'4'{
            color='orange',
            text='申请归还'
          }
        }
*/

class BorrowMag extends Component {
  state={
    data:0
  }
  componentDidMount=()=>{
    axios.get(`${config.Front_PATH}/borrow/getborrowlist`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }
  render() {
    return (<Table columns={columns} dataSource={this.state.data} />);
  }
}
export default BorrowMag;