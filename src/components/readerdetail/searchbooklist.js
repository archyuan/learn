import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import axios from 'axios';


export default class BookListDetail extends Component{

    constructor(props){
        super(props)
        this.state={data:[
           
           
          ], 
        };
    }

    gotoBookDetail=(value)=>{
     // console.log(value);
     let enable = false;
     console.log(value);
     axios.defaults.withCredentials = true;
      axios.post('http://127.0.0.1:3005/book/bookisable',{
        bookid:value.bookid
      }).then((data)=>{
        ///下一个按钮的可用状态信息
        console.log(data.data);
        enable=data.data.disable;
        console.log(enable);
        value['en']=enable;
        console.log(value);
      }); 

     // console.log("点击");
     this.props.history.push({"pathname" :'/reader/bookdetail',
          bookdetail:value,
        
          }
    );     //测试保留不要删，测试成功后使用
    }
    // eslint-disable-next-line react/no-deprecated
    componentWillUpdate(){
        // this.setstate(
        //   {
        //     data:this.props.serarchbooklist
        //   }
        // );
    }

    render(){
      console.log(this.props.bookList)
        const columns = [
            {
              title: 'BookISBN',
              dataIndex: 'bookid',
              key: 'bookid',
              render: (text,record) => (<a  onClick={this.gotoBookDetail.bind(this,record)} >{text}</a>)
            },
            {
              title: 'BookName',
              dataIndex: 'bookname',
              key: 'bookname',
            },
            {
              title: 'BookAuthor',
              dataIndex: 'bookauthor',
              key: 'bookauthor',
            },
            {
              title: 'BookPublish',
              key: 'bookpublish',
              dataIndex: 'bookpublish',
              
            },
            {
              title: 'PutDate',
              key: 'putdate',
              dataIndex:'putdate',
            },
             {
              title: 'BookNumber',
              key: 'booknumber',
              dataIndex:'booknumber',
            },
             {
              title: 'BookTag',
              key: 'booktag',
              dataIndex:'booktag',
            },
            {
              title: 'BookContent',
              key: 'bookcontent',
              dataIndex: 'bookcontent',

            }
          ];
        return(
            <Table columns={columns} dataSource={this.props.bookList}  />
        );
    }


}