import React, { Component } from 'react';
import axios from 'axios';
import { Descriptions } from 'antd';
import { Button, message } from 'antd';
import './bookdetail.css'
const config = require('../../config/config')
class BookInfo extends Component {

    constructor(props) {
        super(props);
        this.state = ({

            bookdetail: this.props.location.bookdetail

        });

    }

    componentDidMount() {
        console.log("DidMount");
        console.log(this.state.bookdetail);


    }

    UNSAFE_componentWillMount() {

        if (this.state.bookdetail == undefined) {
            this.props.history.replace({ pathname: "/" });
            window.location.reload();
            return;
        }

        axios.defaults.withCredentials = true;
        axios.get(`${config.Front_PATH}/reader/readerislogin`).then((data) => {
            if (data.data.b.match("nologin")) {
                this.props.history.replace({ pathname: "/" });
                window.location.reload();
                return;
            }
            console.log(data.data.b);
        });

    }




    feedbackBookState = () => {

        if (this.state.bookdetail == undefined) {
            this.props.history.replace({ pathname: "/" });
        }
        if (this.state.bookdetail.en == true) {
            message.info('当前书籍您已申请借阅或未归还，不可申请');
            return;
        }
        ///向后台申请借书

        if (this.state.bookdetail != undefined) {
            //this.state.bookdetail.bookid
            axios.defaults.withCredentials = true;
            axios.post(`${config.Front_PATH}/reader/applyabook`, {
                bookid: this.state.bookdetail.bookid
            }).then((data) => {
                console.log(data.data);
                if (data.data.b == 'nologon') {
                    message.error("请您先登录");
                    this.forceUpdate();
                    this.props.history.replace({ pathname: "/" });
                    window.location.reload();
                    return;
                }
                if (data.data.data == "insertsuccess") {
                    message.success("申请成功");
                } else if (data.data.data == "insertfail") {
                    message.error("本书的库存不足");
                } else if (data.data.data == "isBorrowedOrApllying") {
                    message.info('当前书籍您已申请借阅或未归还，不可申请');
                }
            });
        }


        ///

        //alert(this.state.bookdetail.en);

        console.log("书籍详情");
    }

    render() {


        return ( <div >
            <Descriptions title = "图书信息" bordered >
            <Descriptions.Item label = "ISDN" > { this.state.bookdetail == undefined || this.state.bookdetail.bookid } </Descriptions.Item>
             <Descriptions.Item label = "作者" > { this.state.bookdetail == undefined || this.state.bookdetail.bookauthor } </Descriptions.Item> 
            <Descriptions.Item label = "出版社" > { this.state.bookdetail == undefined || this.state.bookdetail.bookpublish } </Descriptions.Item>
             <Descriptions.Item label = "入库时间" > { this.state.bookdetail == undefined || this.state.bookdetail.putdate } </Descriptions.Item> 
            <Descriptions.Item label = "库存" > { this.state.bookdetail == undefined || this.state.bookdetail.booknumber } </Descriptions.Item> 
            <Descriptions.Item label = "书名" > { this.state.bookdetail == undefined || this.state.bookdetail.bookname } </Descriptions.Item>
             <Descriptions.Item label = "类别" > { this.state.bookdetail == undefined || this.state.bookdetail.booktag } </Descriptions.Item>
             <Descriptions.Item label = "简介"
            span = { 3 } > { this.state.bookdetail == undefined || this.state.bookdetail.bookcontent } 
            </Descriptions.Item>
             </Descriptions > 
            <div className = 'buttondiv' > 
            {this.state.bookdetail == undefined || <Button onClick = { this.feedbackBookState } > 申请借阅 </Button> }

            </div>

            </div>

            );
        }
    }

export default BookInfo;