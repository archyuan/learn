import { Layout, Menu, Breadcrumb, Icon,Input } from 'antd';
import React, { Component } from 'react';
import axios from 'axios';
import serarch from './readerdetail.moudle.css'
import BookListDetail from '../readerdetail/searchbooklist.js'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const { Search } = Input;


 export default class ReaderDetail extends Component {


      constructor(props){
        super(props);
        this.state=({
          booklist:[],
          option:1
        });
      }
    
  UNSAFE_componentWillMount(){
    axios.defaults.withCredentials=true;
    axios.get('http://127.0.0.1:3005/reader/readerislogin').then((data)=>{
        if(data.data.b.match("nologin")){
                this.props.history.replace({pathname:"/"});
        }
        console.log(data.data.b);
    });
}


  search =(value)=>{
    console.log(value);
    axios.defaults.withCredentials = true;
    axios.post('http://127.0.0.1:3005/book/search',{
      bookname:value
    }).then((data)=>{
      console.log(data.data);
      this.setState({
        booklist:data.data,
        option:1
      });
      
    });
  }


    state = {
      collapsed: false,
    };
  
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
  
    render() {
       let com;
      if(this.state.option==1){
        com=<BookListDetail booklist={this.state.booklist} />
      }

      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
              
                <span><Search placeholder="搜索图书" onSearch={value => this.search(value)} 
                style={{ width: 150 }} //#001529
                className={serarch}
              />
         
          </span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
             
            
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} >
                某某欢迎
            </Header>

            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                 {com}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      );
    }
  }