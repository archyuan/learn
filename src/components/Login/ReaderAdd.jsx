import React, { Component } from 'react';
import { Form, Input, Select, Button,message } from 'antd';
import SexOption from './SexOption'
import axios from 'axios';
const config = require('../../config/config')

const { Option } = Select;

export default  class ReaderAdd extends Component {

    constructor(props){
      super(props);
      this.state=({
        confirmDirty: false,
        autoCompleteResult: [],
      })
    }

  

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
       // alert(values);
         axios.post(`${config.Front_PATH}/reader/register`,{
           readername:values.readerName,
            readerpassword:values.readerPassword,
            readerphone:'+'+values.prefix+values.readerPhone,
          readersex:values.readerSex
         }).then((data)=>{
           console.log(data.data);
           if(data.data.isexit=='y'){
                 //message.error(`您先前已注册，读者编号为：${data.data.registerstate}`);
                 this.props.feedback({'re':'warning','readerid':'您先前已注册，读者编号为:'+data.data.registerstate});
           }else if(data.data.isexit=='n'){
                   if(data.data.registerstate=='fail'){
                  //   message.error('注册失败');
                  this.props.feedback({'re':'error','readerid':'注册失败'});
                   }else{
                     //message.success(`注册成功,读者编号为${data.data.registerstate}`);
                      this.props.feedback({'re':'success','readerid':'注册成功。您的读者编号为:'+ data.data.registerstate});
                    }
           }
         });


      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('readerPassword')) {
      callback('您两次输入的密码不一致');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['readerConfirm'], { force: true });
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
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="姓名">
          {getFieldDecorator('readerName', {
            rules: [
              {
                required: true,
                message: '请输入姓名',
              },
            ],
          })(<Input style={{ width: 200 }} />)}
        </Form.Item>
        <Form.Item label="密码" hasFeedback>
          {getFieldDecorator('readerPassword', {
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
          {getFieldDecorator('readerConfirm', {
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
          {getFieldDecorator('readerSex', {
            rules: [{ required: true, message: '请选择性别', whitespace: true }],
          })(<SexOption />)}
        </Form.Item>
        
        <Form.Item label="联系方式">
          {getFieldDecorator('readerPhone', {
            rules: [{ required: true, message: '请输入读者联系方式' }],
          })(<Input addonBefore={prefixSelector} style={{ width: 400 }} />)}
        </Form.Item>
       
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            添加读者
            </Button>
        </Form.Item>
      </Form>
    );
  }
}



