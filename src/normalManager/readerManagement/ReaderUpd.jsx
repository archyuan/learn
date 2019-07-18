import React, { Component } from 'react';
import './Reader.css';
import { Form, Input, Select, Button,message } from 'antd';
const axios = require('axios');
const success = () => {
  message
  .success('修改成功',1,()=>{
    window.location.href = `${config.UI_PATH}/normalManager/manageReader`
  })
  
};

const { Option } = Select;
const config = require('../../config/config.js')

class ReaderUpd extends Component {
  constructor(props){
    super(props);

    this.state=({
      confirmDirty: false,
      autoCompleteResult: [],
      readerInfo:{},
    });
  }

  componentDidMount=()=>{
    axios.defaults.withCredentials = true;
    axios.post(`${config.Front_PATH}/reader/getonereaderinfo`,{readerId:this.props.match.params.id}).then(
           (data)=>{
           console.log("from background",data.data);
           this.setState({
             readerInfo:data.data
           });
          }
         );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        axios.post(`${config.Front_PATH}/reader/updatereader`,{
          readerId:values.readerId,
          readerName:values.readerName,
          readerSex:values.readerSex,
          readerTel:'+'+values.prefix+values.readerPhone,
          readerPassword:values.readerPassword,

        }).then(
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
      <Form.Item label="读者编号">
        {getFieldDecorator('readerId',{initialValue:`${this.state.readerInfo.readerId}`})(<Input style={{ width: 200 }} disabled />)}
      </Form.Item>
      <Form.Item label="姓名">
        {getFieldDecorator('readerName',{initialValue:`${this.state.readerInfo.readerName}`})(<Input style={{ width: 200 }} disabled />)}
      </Form.Item>
      <Form.Item label="密码" hasFeedback>
        {getFieldDecorator('readerPassword', {rules: [
            {
              required: true,
              message: '请输入密码',
            },
            {
              validator: this.validateToNextPassword,
            },
          ],}
          )(<Input.Password style={{ width: 200 }} />)}
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
        {getFieldDecorator('readerSex',{initialValue:`${this.state.readerInfo.readerSex}`})(<Input style={{ width: 200 }} disabled />)}
      </Form.Item>
      <Form.Item label="联系方式">
        {getFieldDecorator('readerPhone', {
          rules: [
            {
              required: true,
              message: '请再次输入密码',
            },]})(<Input addonBefore={prefixSelector} style={{ width: 400 }} />)}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          修改读者信息
          </Button>
      </Form.Item>
    </Form>
  );
}
}

const WrappedReaderUpdate = Form.create({ name: 'updateReader' })(ReaderUpd);

export default WrappedReaderUpdate;