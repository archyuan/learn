import React, { Component } from 'react';
import './Borrow.css';
import { Table, Divider } from 'antd';
import { Button } from 'antd';
const axios = require('axios');
const config = require('../../config/config.js')





class BorrowAdd extends Component {
  state={
    data:0
  }
  componentDidMount=()=>{
    axios.defaults.withCredentials = true;
    axios.get(`${config.Front_PATH}/borrow/getborrowrequestlist`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }
  componentDidUpdate=()=>{
    axios.defaults.withCredentials = true;
    axios.get(`${config.Front_PATH}/borrow/getborrowrequestlist`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }
  handleAgree=(value)=>{
    console.log(value)
    axios.post(`${config.Front_PATH}/borrow/agreeborrow`,value).then(
           ()=>{
             alert('同意申请成功');
           }
         )   

  }
  handleRefuse=(value)=>{
    console.log(value);
    axios.defaults.withCredentials = true;
    axios.post(`${config.Front_PATH}/borrow/refuseborrow`,value).then(
           ()=>{
             alert('拒绝申请成功');
           }
         )   

  }
  render() {
    const columns = [
      {
        title: '申请编号',
        dataIndex: 'borrowId',
        key: 'requestId',
      },
      {
        title: '图书ISDN',
        dataIndex: 'bookId',
        key: 'bookId',
      },
      {
        title: '图书书名',
        dataIndex: 'bookName',
        key: 'bookName',
      },
      {
        title: '读者编号',
        dataIndex: 'readerId',
        key: 'readerId',
      },
      {
        title: '申请时间',
        dataIndex: 'borrowTime',
        key: 'borrowTime',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button type="primary" onClick={this.handleAgree.bind(this,record)}>同意申请</Button>
            <Divider type="vertical" />
            <Button onClick={this.handleRefuse.bind(this,record)}>拒绝申请</Button>
          </span>
        ),
      },
    ];
    return (<Table columns={columns} dataSource={this.state.data} />);
  }
}
export default BorrowAdd;