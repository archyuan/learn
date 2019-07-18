import React, { Component } from 'react';
import { Form, Icon, Input, Button, message, Select } from 'antd';
import axios from 'axios';
const config = require('../../config/config')
const { Option } = Select;
export default class AdminLoginForm extends Component {


  constructor(props) {
    super(props);
  }





  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(values.username);
        console.log(values.password);
        axios.defaults.withCredentials = true;
        axios.post(`${config.Front_PATH}/admin/login`,values).then((data)=>{
          console.log(data.data);
        });

     
      }
    });

  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form loginform"  >
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your userid!' }, { pattern: new RegExp(/^[0-9]{1,}$/, "g"), message: 'UserId只包含数字' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="UserID"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item  >
          {getFieldDecorator('option',{
            rules:[{required:true,message:'请选择您的管理员类别'}],
          })(
          <Select defaultValue="1">
            <Option value="1">超级管理员</Option>
            <Option value="2">普通管理员</Option>

          </Select>
          )
          }
        </Form.Item>

        <Form.Item>
          <div>

            <Button type="primary" htmlType="submit" className="login-form-button" className="button" >
              登录
       </Button>

          </div>
        </Form.Item>
      </Form>

    );
  }
}