import React, { Component } from 'react';
import './Book.css';
import { Form, Input, Button, message } from 'antd';
import BookOption from '../../component/BookOption'

const axios = require('axios');
const config = require('../../config/config.js')
const success = () => {
  message
  .success('添加成功',1,()=>{
    window.location.href = `${config.UI_PATH}/normalManager/manageBook`
  })
  
};
const error = () => {
  message
  .error('该书的ISBN已存在，不能添加',1)
  
};

const { TextArea } = Input;

class BookAdd extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        axios.post(`${config.Front_PATH}/book/addbook`,values).then(
           (data)=>{
             console.log(data.data);
             if(data.data=="alreadyhave"){
               error();
              }
             else{
                success();
              }
           }
         )
      }
    });
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
        <Form.Item label="ISDN">
          {getFieldDecorator('bookId', {
            rules: [
              {
                required: true,
                message: '请输入图书的ISDN',
              },
            ],
          })(<Input style={{ width: 200 }} />)}
        </Form.Item>
        <Form.Item label="书名">
          {getFieldDecorator('bookName', {
            rules: [
              {
                required: true,
                message: '请输入书名',
              },
            ],
          })(<Input style={{ width: 200 }} />)}
        </Form.Item>
        <Form.Item label="作者">
          {getFieldDecorator('bookAuthor', {
            rules: [
              {
                required: true,
                message: '请输入作者',
              },
            ],
          })(<Input style={{ width: 200 }} />)}
        </Form.Item>
        <Form.Item label="出版社">
          {getFieldDecorator('bookPublisher', {
            rules: [
              {
                required: true,
                message: '请输入出版社',
              },
            ],
          })(<Input style={{ width: 200 }} />)}
        </Form.Item>

        <Form.Item label="库存">
          {getFieldDecorator('bookNumber', {
            rules: [
              {
                required: true,
                message: '请输入库存',
              },
            ],
          })(<Input style={{ width: 200 }} />)}
        </Form.Item>

        <Form.Item label="类别">
          {getFieldDecorator('bookType', {
            initialValue:'计算机',
            rules: [
              {
                required: true,
                message: '请输入类别',
              },
            ],
          })(<BookOption />)}
        </Form.Item>

        <Form.Item label="简介">
          {getFieldDecorator('bookIntro', {
            rules: [
              {
                required: true,
                message: '请输入简介',
              },
            ],
          })(<TextArea
            placeholder="Autosize height with minimum and maximum number of lines"
            autosize={{ minRows: 2, maxRows: 6 }}
            style={{ width: 400 }}
          />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            添加图书
            </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedBookAdd = Form.create({ name: 'addBook' })(BookAdd);

export default WrappedBookAdd;