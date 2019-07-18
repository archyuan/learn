import React, { Component } from 'react';
import { Table, Button,message } from 'antd';
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
        
/*        axios.post('http://127.0.0.1:3005/reader/getbookwithborrowed').then((data)=>{
            console.log(data.data);
            console.log("进入");
            console.log("DidMount");
            this.setState({
                dataSource:data.data
            });
        });
        console.log("出去")*/
        this.getList();
    }


    componentDidUpdate(){

     /*   axios.post('http://127.0.0.1:3005/reader/getbookwithborrowed').then((data)=>{
            console.log(data.data);
            console.log("进入");
            console.log("componentWillUpdate");
            this.setState({
                dataSource:data.data
            });
        });*/
    }
    
    getList=()=>{
        axios.post('http://127.0.0.1:3005/reader/getbookwithborrowed').then((data)=>{
            console.log(data.data);
            console.log("进入");
            console.log("componentWillUpdate");
            this.setState({
                dataSource:data.data
            });
        });
    }


    toApplyReturn = (record, Index) => {
        console.log(record, Index);
        axios.defaults.withCredentials = true;
        //判断是否已登录
        axios.get('http://127.0.0.1:3005/reader/readerislogin').then((data)=>{
            if(data.data.b=='nologin'){
                this.props.history.replace("/");
                console.log("未登录");
                window.location.reload();
            }
        });


        axios.post('http://127.0.0.1:3005/reader/applytoreturn',{
            bookid:record.bookid
        }).then((data)=>{
            ///处理一下
            if(data.data.state=="success"){
                console.log("操作成功");
                console.log(this);
                this.getList();
               /* this.state.dataSource[Index].booksate=4;
             
                this.setState({
                   dataSource: this.state.dataSource
                });*/
               // message.success("操作成功");
               
            }else if(data.data.state=="fail"){
                message.error("操作失败");
            }else if(data.data.state=="noexist"){
                message.info("该书籍处于其他状态");
            }
        });

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