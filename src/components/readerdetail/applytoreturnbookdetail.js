import React, { Component } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';

export default class ApplytoReturnBook extends Component {



    constructor(props) {
        super(props);
    }

    componentDidMount() {

        ///获取已借阅的书籍

        ///getbookwithborrowed
        axios.defaults.withCredentials = true;
        axios.post('http://127.0.0.1:3005/reader/getbookwithborrowed').then((data)=>{
            console.log(data);
        });
    }




    toApplyReturn = (record, Index) => {
        console.log(record, Index);
    }


    render() {

        const dataSource = [
            {
                bookid: '15331542',
                bookname: '的法定',
                bookauthor: 'c吃顿饭',
                bookpublish: '臭豆腐干',
                bookstate: 'applyreturnsuccess'
            }
        ];

        const columns = [
            {
                title: 'BookISBN',
                dataIndex: 'bookid',
                key: 'bookid',

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
                title: '申请还书',
                key: 'action',
                dataIndex: 'bookstate',
                render: (text, record, Index) => (
                    <div>
                        {text == 'applyreturnsuccess' && <Button type="primary" onClick={this.toApplyReturn.bind(this, record, Index)}  >申请还书</Button>}
                        {text == 'applyreturnfail' && <Button type="primary" onClick={this.toApplyReturn.bind(this, record, Index)} >申请还书</Button>}
                    </div>
                ),
            },
        ];



        return (
            <Table columns={columns} dataSource={dataSource} />
        );

    }




}