import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Manager.css';
import { Table, Divider, Modal,message} from 'antd';
const axios = require('axios');
const config = require('../../config/config.js')
const success = () => {
  message
  .success('删除成功',1,)
  
};


class ManagerMag extends Component {
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
      this.deleteManagerDetail(e);
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
    axios.get(`${config.Front_PATH}/manager/getmanager`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }

  componentDidUpdate=()=>{
    axios.get(`${config.Front_PATH}/manager/getmanager`).then((data)=>{
      this.setState(
        {
          data:data.data
        }
      );
    })
  }

  getManagerDetail=(value)=>{
    console.log(value)
  }

  deleteManagerDetail=(value)=>{
    console.log(value)
    axios.post(`${config.Front_PATH}/manager/deletemanager`,value).then(
           ()=>{
             success();
           }
         )   

  }

  render() {
    const columns = [
      {
        title: '管理员编号',
        dataIndex: 'managerId',
        key: 'managerId',
    
      },
      {
        title: '姓名',
        dataIndex: 'managerName',
        key: 'managerName',
        render: text => <NavLink to="/superManager/manageManager/getManager">{text}</NavLink>,
      },
      {
        title: '性别',
        dataIndex: 'managerSex',
        key: 'managerSex',
      },
      {
        title: '年龄',
        dataIndex: 'managerAge',
        key: 'managerAge',
      },
      {
        title: '入职时间',
        dataIndex: 'managerEmployeeTime',
        key: 'managerEmployeeTime',
      },
      {
        title: '类别',
        dataIndex: 'managerType',
        key: 'managerType',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <NavLink onClick={this.getManagerDetail.bind(this,record)} to={"/superManager/manageManager/updateManager/"+record.managerId} >修改信息</NavLink>
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
    return (
      <div>
        <Table columns={columns} dataSource={this.state.data} />
      </div>
    );
  }
}
export default ManagerMag;