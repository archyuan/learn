import React, { Component } from 'react';
import axios from 'axios';
import { Descriptions } from 'antd';
import { Button,message } from 'antd';
import './bookdetail.css'
class BookInfo extends Component {

    constructor(props){
        super(props);
        this.state=({
            
            bookdetail:this.props.location.bookdetail
            
        });
     
    }

    componentDidMount(){
        console.log("DidMount");
        console.log(this.state.bookdetail);
      
       
    }

    UNSAFE_componentWillMount() {

        axios.defaults.withCredentials = true;
        axios.get('http://127.0.0.1:3005/reader/readerislogin').then((data) => {
            if (data.data.b.match("nologin")) {
                this.props.history.replace({ pathname: "/" });

            }
            console.log(data.data.b);
        });
     
    }

    componentDidCatch() {
        this.props.history.replace({ pathname: "/" });
    }


    feedbackBookState=()=>{
           
            if(this.state.bookdetail==undefined){
                this.props.history.replace({ pathname: "/" });
            }
            if(this.state.bookdetail.en==true){
                message.info('当前书籍您已申请借阅或未归还，不可申请');
            }
            //alert(this.state.bookdetail.en);
           
            console.log("书籍详情");
    }

    render() {
     
     
        return (
            <div>
                <Descriptions title="图书信息" bordered>
                    <Descriptions.Item label="ISDN">{ this.state.bookdetail==undefined || this.state.bookdetail.bookid }</Descriptions.Item>
                    <Descriptions.Item label="作者">{ this.state.bookdetail==undefined || this.state.bookdetail.bookauthor }</Descriptions.Item>
                    <Descriptions.Item label="出版社">{ this.state.bookdetail==undefined ||  this.state.bookdetail.bookpublish }</Descriptions.Item>
                    <Descriptions.Item label="入库时间">{ this.state.bookdetail==undefined ||  this.state.bookdetail.putdate }</Descriptions.Item>
                    <Descriptions.Item label="库存" >{  this.state.bookdetail==undefined ||  this.state.bookdetail.booknumber }</Descriptions.Item>
                    <Descriptions.Item label="书名">{ this.state.bookdetail==undefined ||  this.state.bookdetail.bookname }</Descriptions.Item>
                    <Descriptions.Item label="类别">{ this.state.bookdetail==undefined ||  this.state.bookdetail.booktag }</Descriptions.Item>
                    <Descriptions.Item label="简介" span={3}>{ this.state.bookdetail==undefined ||  this.state.bookdetail.bookcontent }</Descriptions.Item>
                </Descriptions>
                <div className='buttondiv' >
                 {  this.state.bookdetail==undefined ||  <Button   onClick={this.feedbackBookState} >申请借阅</Button> }
                
                </div>
             
            </div>
               
        );
    }
}
export default BookInfo;