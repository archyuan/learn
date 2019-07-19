import React, { Component } from 'react';
import './Reader.css';
import { Table, Divider, Modal,message } from 'antd';
import { NavLink } from 'react-router-dom';
const axios = require('axios');
const config = require('../../config/config')
const success = () => {
  message
  .success('删除成功',1)
  
};
class ReaderMag extends Component {
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
    this.deleteReaderDetail(e);
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
    axios.defaults.withCredentials = true;
    axios.get(`${config.Front_PATH}/reader/getreader`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }
  componentDidUpdate=()=>{
    axios.defaults.withCredentials = true;
    axios.get(`${config.Front_PATH}/reader/getreader`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }

  getReaderDetail=(value)=>{
    console.log(value)
  }

  deleteReaderDetail=(value)=>{
    console.log(value);
    axios.defaults.withCredentials = true;
    axios.post(`${config.Front_PATH}/reader/deletereader`,value).then(
           ()=>{
             success();
           }
         )   

  }

  render() {
    const columns = [
      {
        title: '读者编号',
        dataIndex: 'readerId',
        key: 'readerId',
    
      },
      {
        title: '姓名',
        dataIndex: 'readerName',
        key: 'readerName',
      },
      {
        title: '性别',
        dataIndex: 'readerSex',
        key: 'readerSex',
      },
      // {
      //   title: '类别',
      //   dataIndex: 'readerOcupation',
      //   key: 'readerOcupation',
      // },
      {
        title: '联系方式',
        dataIndex: 'readerTel',
        key: 'readerTel',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <NavLink onClick={this.getReaderDetail.bind(this,record)} to={"/normalManager/manageReader/updateReader/"+record.readerId}>修改信息</NavLink>
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
export default ReaderMag;