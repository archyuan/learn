import React, { Component } from 'react';
import './Manager.css';
import { Form, Input, Button,message } from 'antd';
const axios = require('axios');
const config = require('../../config/config.js')
const success = () => {
  message
  .success('修改成功',1,()=>{
    window.location.href = `${config.UI_PATH}/superManager/manageManager`
  })
  
};


class ManagerUpdate extends Component {

  constructor(props){
    super(props);

    this.state=({
      confirmDirty: false,
      autoCompleteResult: [],
      managerInfo:{},
    });
  }
  
  componentDidMount=()=>{
    axios.defaults.withCredentials = true;
    axios.post(`${config.Front_PATH}/manager/getonemanagerinfo`,{managerId:this.props.match.params.id}).then(
           (data)=>{
           console.log("from background",data.data);
           this.setState({
             managerInfo:data.data
           });
          }
         );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        axios.defaults.withCredentials = true;
        axios.post(`${config.Front_PATH}/manager/updatemanager`,values).then(
           ()=>{
             success();
           }
         )
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('managerPassword')) {
      callback('您两次输入的密码不一致');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['managerConfirm'], { force: true });
      callback();
    }
  };
  handleChangeType = (value) => {
    console.log(`selected ${value}`);
  }


  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0, },
        sm: { span: 16, offset: 8, },
      },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="管理员编号">
          {getFieldDecorator('managerId',{initialValue:`${this.state.managerInfo.managerId}`})(<Input style={{ width: 200 }} disabled   />)}
        </Form.Item>

        <Form.Item label="姓名">
          {getFieldDecorator('managerName',{initialValue:`${this.state.managerInfo.managerName}`})(<Input style={{ width: 200 }} disabled />)}
        </Form.Item>

        <Form.Item label="密码" hasFeedback>
          {getFieldDecorator('managerPassword', {
            rules: [
              {
                required: true,
                message: '请输入密码',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password style={{ width: 200 }} />)}
        </Form.Item>

        <Form.Item label="确认密码" hasFeedback>
          {getFieldDecorator('managerConfirm', {
            rules: [
              {
                required: true,
                message: '请再次输入密码',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} style={{ width: 200 }} />)}
        </Form.Item>

        <Form.Item label={"性别"}>
          {getFieldDecorator('managerSex', {initialValue:`${this.state.managerInfo.managerSex}`})(<Input style={{ width: 200 }} disabled />)}
        </Form.Item>

        <Form.Item label="年龄">
          {getFieldDecorator('managerAge', {initialValue:`${this.state.managerInfo.managerAge}`})(<Input style={{ width: 200 }} />)}
        </Form.Item>

        <Form.Item label="入职时间">
          {getFieldDecorator('managerEmployeeTime', {initialValue:`${this.state.managerInfo.managerEmployeeTime}`})(<Input style={{ width: 200 }} disabled/>)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            修改管理员信息
            </Button>
        </Form.Item>

      </Form>
    );
  }
}

const WrappedManagerUpdate = Form.create({ name: 'updateManager' })(ManagerUpdate);

export default WrappedManagerUpdate;