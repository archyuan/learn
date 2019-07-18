import React, { Component } from 'react';
import './Manager.css';
import { Form, Input, Button, message} from 'antd';
import SexOption from '../../component/SexOption.jsx'

const axios = require('axios');
const config = require('../../config/config.js')
const success = () => {
  message
  .success('添加成功',1,()=>{
    window.location.href = `${config.UI_PATH}/superManager/manageManager`
  })
  
};


class ManagerAdd extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        axios.post(`${config.Front_PATH}/manager/addmanager`,values).then(
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
        <Form.Item label="姓名">
          {getFieldDecorator('managerName', {
            rules: [
              {
                required: true,
                message: '请输入姓名',
              },
            ],
          })(<Input style={{ width: 200 }} />)}
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
        <Form.Item label="性别">
          {getFieldDecorator('managerSex')(
           <SexOption />
          )}
        </Form.Item>
        <Form.Item label="年龄">
          {getFieldDecorator('managerAge', {
            rules: [
              {
                required: true,
                message: '请输入年龄',
              },
            ],
          })(<Input style={{ width: 200 }} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            添加管理员
            </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedManagerAdd = Form.create({ name: 'addManager' })(ManagerAdd);

export default WrappedManagerAdd;