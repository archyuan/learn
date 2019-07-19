import React, { Component } from 'react';
import './Borrow.css';
import { Table } from 'antd';
import { Button, message } from 'antd';
const axios = require('axios');
const config = require('../../config/config.js')
const success = () => {
  message
  .success('同意申请成功',1)
};

class BorrowUpd extends Component {
  state={
    data:0
  }
  componentDidMount=()=>{
    axios.defaults.withCredentials = true;
    axios.get(`${config.Front_PATH}/borrow/getreturnrequestlist`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }
  componentDidUpdate=()=>{
    axios.defaults.withCredentials = true;
    axios.get(`${config.Front_PATH}/borrow/getreturnrequestlist`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }
  handleAgree=(value)=>{
    console.log(value)
    axios.post(`${config.Front_PATH}/borrow/agreereturn`,value).then(
           ()=>{
             success();
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
            <Button type="primary" onClick={this.handleAgree.bind(this,record)}>同意申请{record.name}</Button>
          </span>
        ),
      },
    ];
    return (<Table columns={columns} dataSource={this.state.data} />);
  }
}
export default BorrowUpd;