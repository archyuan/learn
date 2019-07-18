import React, { Component } from 'react';
import './DateOption.css';
import { DatePicker } from 'antd';

class DateOption extends Component {
    constructor(props) {
        super(props);
        const value = props.value || {};
        this.state = {
          date: value
        }
      }
    
    
      handleChange = e => {
          this.setState({ date: e.value });
          this.triggerChange(e); 
      };
    
      triggerChange = changedValue => {
        const { onChange } = this.props;
        onChange && onChange(changedValue);
      };
    render() {
        return (
            <div> <DatePicker handleChange={this.onChange} /></div>
        );
    }
}

export default DateOption;