import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';

export default class RecordBookWithReader extends Component {




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

       const data = [
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
           
          ];
       

        return(
             <div>
                 <Table  columns={columns} dataSource={data}   />
             </div>
        );
    }


}