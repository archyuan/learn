import React, { Component } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';

export default class ApplytoReturnBook extends Component {



    constructor(props) {
        super(props);
        this.state={
            dataSource:[]
        };
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        //判断是否已登录
        axios.get('http://127.0.0.1:3005/reader/readerislogin').then((data)=>{
            if(data.data.b=='nologin'){
                this.props.history.replace("/");
                console.log("未登录");
                window.location.reload();
            }
        });

        ///获取已借阅的书籍

        ///getbookwithborrowed
        
        axios.post('http://127.0.0.1:3005/reader/getbookwithborrowed').then((data)=>{
            console.log(data.data);
            console.log("进入")
            this.setState({
                dataSource:data.data
            });
        });
        console.log("出去")
    }




    toApplyReturn = (record, Index) => {
        console.log(record, Index);
    }


    render() {

      /*  const dataSource = [
            {
                bookid: '15331542',
                bookname: '的法定',
                bookauthor: 'c吃顿饭',
                bookpublish: '臭豆腐干',
                bookstate: 'applyreturnsuccess'
            }
        ];
*/
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
                        {text == 2 && <Button type="primary" onClick={this.toApplyReturn.bind(this, record, Index)}  >申请还书</Button>}
                        {text != 2&& <Button type="primary" onClick={this.toApplyReturn.bind(this, record, Index)}  disabled >申请还书</Button>}
                    </div>
                ),
            },
        ];



        return (
            <Table columns={columns} dataSource={this.state.dataSource} />
        );

    }




}