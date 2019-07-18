import React, { Component } from 'react';
import './JobOption.css';
import { Select } from 'antd';

const { Option } = Select;;
class JobOption extends Component {
  constructor(props) {
    super(props);
    const value = props.value || {};
    this.state = {
      type: value
    }
  }


  handleChange = value => {
    if (!('value' in this.props)) {
      this.setState({ type: value });
    }
    this.triggerChange(value);
  };

  triggerChange = changedValue => {
    const { onChange } = this.props;
    onChange && onChange(changedValue);
  };

  render() {
    return (
      <Select defaultValue="student" style={{ width: 120 }} onChange={this.handleChange}>
        <Option value="student">学生</Option>
        <Option value="teacher">教工</Option>
        <Option value="gratuated">校友</Option>
      </Select>
    );
  }
}
export default JobOption;