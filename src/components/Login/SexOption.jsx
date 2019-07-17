import React, { Component } from 'react';
import './SexOption.css';
import { Radio } from 'antd';
class SexOption extends Component {
  constructor(props) {
    super(props);
    const value = props.value || {};
    this.state = {
      type: value
    }
  }


  handleChange = value => {
      this.setState({ type: value.target.value });
      this.triggerChange(value); 
  };

  triggerChange = changedValue => {
    const { onChange } = this.props;
    onChange && onChange(changedValue);
  };

  
  render() {
    return (
      <Radio.Group onChange={this.handleChange} type={this.state.type} >
        <Radio value={'男'}>男</Radio>
        <Radio value={'女'}>女</Radio>
      </Radio.Group>
    );
  }
}
export default SexOption;