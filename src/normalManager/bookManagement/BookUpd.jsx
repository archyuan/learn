import React, { Component } from 'react';
import './Book.css';
import { Form, Input, Button,message } from 'antd';
const axios = require('axios');
const config = require('../../config/config.js')
const success = () => {
  message
  .success('修改成功',1,()=>{
    window.location.href = `${config.UI_PATH}/normalManager/manageBook`
  })
  
};

const { TextArea } = Input;

class BookUpd extends Component {
  constructor(props){
    super(props);

    this.state=({
      confirmDirty: false,
      autoCompleteResult: [],
      bookInfo:{},
    });
  }
  
  componentDidMount=()=>{
    axios.post(`${config.Front_PATH}/book/getonebookinfo`,{bookId:this.props.match.params.id}).then(
           (data)=>{
           console.log("from background",data.data);
           this.setState({
            bookInfo:data.data
           });
          }
         );
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        axios.post(`${config.Front_PATH}/book/updatebook`,values).then(
           ()=>{
             success();
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
        <Form.Item label="图书编号">
          {getFieldDecorator('key',{initialValue:`${this.state.bookInfo.key}`})(<Input style={{ width: 200 }} disabled />)}
        </Form.Item>
        <Form.Item label="ISDN">
          {getFieldDecorator('bookId',{initialValue:`${this.state.bookInfo.bookId}`})(<Input style={{ width: 200 }} disabled />)}
        </Form.Item>
        <Form.Item label="书名">
          {getFieldDecorator('bookName',{initialValue:`${this.state.bookInfo.bookName}`})(<Input style={{ width: 200 }} disabled />)}
        </Form.Item>
        <Form.Item label="作者">
          {getFieldDecorator('bookAuthor',{initialValue:`${this.state.bookInfo.bookAuthor}`})(<Input style={{ width: 200 }} disabled />)}
        </Form.Item>
        <Form.Item label="出版社">
          {getFieldDecorator('bookPublisher',{initialValue:`${this.state.bookInfo.bookPublisher}`})(<Input style={{ width: 200 }} disabled />)}
        </Form.Item>
        <Form.Item label="入库时间">
          {getFieldDecorator('bookInTime',{initialValue:`${this.state.bookInfo.bookInTime}`})(<Input style={{ width: 200 }} disabled />)}
        </Form.Item>
        <Form.Item label="库存">
          {getFieldDecorator('bookNumber',{initialValue:`${this.state.bookInfo.bookNumber}`})(<Input style={{ width: 200 }} />)}
        </Form.Item>
        <Form.Item label="类别">
          {getFieldDecorator('bookType',{initialValue:`${this.state.bookInfo.bookType}`})(<Input style={{ width: 200 }} disabled />)}
        </Form.Item>
        <Form.Item label="简介">
          {getFieldDecorator('bookIntro',{initialValue:`${this.state.bookInfo.bookIntro}`})(<TextArea
            placeholder="Autosize height with minimum and maximum number of lines"
            autosize={{ minRows: 2, maxRows: 6 }}
            style={{ width: 400 }}
          />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            修改图书
            </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedBookUpd = Form.create({ name: 'updateBook' })(BookUpd);

export default WrappedBookUpd;