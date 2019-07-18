import React, { Component } from 'react';
import './BorrowStation.css';
import { Select } from 'antd';

const { Option } = Select;;
class BorrowStation extends Component {
  handleChange = (value) => {
    console.log(`selected ${value}`);
  }

  render() {
    return (
      <Select defaultValue="borrowing" style={{ width: 120 }} onChange={this.handleChange}>
        <Option value="borrowing">未还</Option>
        <Option value="borrowed">已还</Option>
        <Option value="outOfTime">逾期</Option>
      </Select>
    );
  }
}
export default BorrowStation;