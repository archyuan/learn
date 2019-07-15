import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
export default class BookListDetail extends Component{

    constructor(props){
        super(props)
        this.state={data:[
           
           
          ], 
        };
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
              dataIndex: 'bookisbn',
              key: 'bookisbn',
              render: text => <a href="javascript:;">{text}</a>,
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