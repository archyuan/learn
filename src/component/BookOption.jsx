import React, { Component } from 'react';
import './BookOption.css';
import { Select } from 'antd';

const { Option } = Select;

class BookOption extends Component {
  constructor(props) {
    super(props);
    const value = props.value || {};
    this.state = {
      type: value
    }
  }


  handleChange = value => {
      this.setState({ type: value });
      this.triggerChange(value); 
  };

  triggerChange = changedValue => {
    const { onChange } = this.props;
    onChange && onChange(changedValue);
  };

  render() {
    return (
      <Select defaultValue="计算机" style={{ width: 120 }} onChange={this.handleChange}>
        <Option value="计算机">计算机</Option>
        <Option value="数学">数学</Option>
        <Option value="语言">语言</Option>
        <Option value="美术">美术</Option>
        <Option value="小说">小说</Option>
      </Select>
    );
  }
}

export default BookOption;