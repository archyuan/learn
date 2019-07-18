import React, { Component } from 'react';
import './Book.css';
import { Table, Divider, Modal } from 'antd';
import {NavLink} from 'react-router-dom';
const axios = require('axios');
const config = require('../../config/config.js')




class BookMag extends Component {
  state={
    data:0,
    visible: false
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.deleteBookDetail(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  componentDidMount=()=>{
    axios.get(`${config.Front_PATH}/book/getbook`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }
  componentDidUpdate=()=>{
    axios.get(`${config.Front_PATH}/book/getbook`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }

  getBookDetail=(value)=>{
    console.log(value)
  }

  deleteBookDetail=(value)=>{
    console.log(value)
    axios.post(`${config.Front_PATH}/book/deletebook`,value).then(
           ()=>{
             alert('删除成功');
           }
         )   

  }

  render() {
    const columns = [
      {
        title: '图书编号',
        dataIndex: 'key',
        key: 'key',
    
      },
      {
        title: 'ISDN',
        dataIndex: 'bookId',
        key: 'bookId',
    
      },
      {
        title: '书名',
        dataIndex: 'bookName',
        key: 'bookName',
      },
      {
        title: '作者',
        dataIndex: 'bookAuthor',
        key: 'bookAuthor',
      },
      {
        title: '出版社',
        dataIndex: 'bookPublisher',
        key: 'bookPublisher',
      },
      {
        title: '入库时间',
        dataIndex: 'bookInTime',
        key: 'bookInTime',
      },
      {
        title: '库存',
        dataIndex: 'bookNumber',
        key: 'bookNumber',
      },
      {
        title: '类别',
        dataIndex: 'bookType',
        key: 'bookType',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <NavLink onClick={this.getBookDetail.bind(this,record)} to={"/normalManager/manageBook/updateBook/"+record.bookId}>修改信息</NavLink>
            <Divider type="vertical" />
            <a onClick={this.showModal}>删除信息</a>
            <Modal
              title="删除信息"
              visible={this.state.visible}
              onOk={this.handleOk.bind(this,record)}
              onCancel={this.handleCancel}
            >
              <p>是否删除信息</p>
            </Modal>
          </span>
        ),
      },
    ];
    return (<Table columns={columns} dataSource={this.state.data} />);
  }
}
export default BookMag;