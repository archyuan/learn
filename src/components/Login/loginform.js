import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import './Login.scss'
import axios from 'axios';


export default class NormalLoginForm extends Component {


  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(values.username);
        console.log(values.password);
        axios.defaults.withCredentials = true;
        axios.post('http://127.0.0.1:3005/reader/login', {
          userid: values.username,
          password: values.password
        }).then((data) => {

          console.log(data.data);

          if (data.data.a.match('fail')) {
          
            message.error("账号或密码错误");
           
          }else if(data.data.a.match('success')) {
            console.log('/ab');
            this.props.history.push('/reader/detail');
          }

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
        <Form.Item>

          <Button type="primary" htmlType="submit" className="login-form-button" className="button" >
            登录
            </Button>

        </Form.Item>
      </Form>
    
    );
  }
}

