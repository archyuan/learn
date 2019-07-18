import React, { Component } from 'react';
import './AddressOption.css';
import { Input, Cascader } from 'antd';

const InputGroup = Input.Group;
const options = [
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nantong',
        label: '南通',
        children: [
          {
            value: 'chongchuan',
            label: '崇川区',
          },
          {
            value: 'gangzha',
            label: '港闸区',
          },
          {
            value: 'kaifa',
            label: '开发区',
          },
          {
            value: 'tongzhou',
            label: '通州区',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: '上海',
    children: [
      {
        value: 'yangpu',
        label: '杨浦区',

      },
      {
        value: 'pudong',
        label: '浦东新区',

      },
      {
        value: 'qingpu',
        label: '青浦区',
      },
    ],
  },
];
class AddressOption extends Component {


  render() {
    return (
      <InputGroup compact>
        <Cascader
          defaultValue={['jiangsu', 'nantong', 'chongchuan']}
          options={options}
        />
        <Input style={{ width: 400 }} />
      </InputGroup>
    );
  }
}

export default AddressOption;