import React, { Component } from 'react';
import { Table, Tag } from 'antd';
import axios from 'axios';
export default class RecordBookWithReader extends Component {


    constructor(props){
        super(props);
        this.state={
            dataSource:[]
        }
    }

    UNSAFE_componentWillMount(){
        //请求借阅记录
        let message={};
        axios.defaults.withCredentials = true;
        axios.post('http://127.0.0.1:3005/reader/booklendingrecords').then((value)=>{
           
            this.setState({
                dataSource:value.data
            });
            console.log("message",message);
            console.log("datasource:",this.state.dataSource);
        });
    }





    render(){



        const columns = [
            {
              title: 'BookISBN',
              dataIndex: 'bookid',
              key: 'bookid',
              
            },
            {
              title: 'BookNmae',
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
                title:'BorrowBookTime',
                key:'borrowbooktime',
                dataIndex:'borrowbooktime'
            },
            {
                title:'ReturnBookTime',
                key:'returnbooktime',
                dataIndex:'returnbooktime'
            },
            {
              title: 'BookTag',
              key: 'booktag',
              dataIndex:'booktag',
            },
            {
                title:'BookState',
                key:'bookstate',
                dataIndex:'bookstate',
                render:borrowstate=>(
                    <span>
                        { borrowstate.map(bs=>{
                         let color;
                         if(bs=='申请中'){
                             color='blue';
                         }else if(bs=='已归还'){
                             color='green';
                         }else if(bs=='借阅中'){
                             color='lime';
                         }else if(bs=='申请已拒绝'){
                             color='red';
                         }
                         return(
                             <Tag color={color} key={bs} >
                               {bs}
                             </Tag>
                         );
                        })}
                    </span>
                ),
            }
          ];

       /*const data = [
            {
             
              bookid: '45843548',
              bookname: '银河',
              borrowbooktime:'2019-07-08',
              returnbooktime:'2019-7-15',
              bookauthor: '[美] 埃里克·拉森',
              bookpublish: '后浪丨北京联合出版公司',
              booktag:'文学',
              bookstate:['申请中'],
            },
           
          ];*/
       

        return(
             <div>
                 <Table  columns={columns} dataSource={this.state.dataSource}   />
             </div>
        );
    }


}