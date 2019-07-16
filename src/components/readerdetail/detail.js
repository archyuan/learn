import { Layout, Menu,  Icon, Input } from 'antd';
import React, { Component } from 'react';
import axios from 'axios';
import serarch from './readerdetail.moudle.css'
import BookListDetail from '../readerdetail/searchbooklist.js'
import RecordBookWithReader  from './borrowrecordwithreader.js'
const { Header, Content, Footer, Sider } = Layout;



const { Search } = Input;


export default class ReaderDetail extends Component {


  constructor(props) {
    super(props);
    this.state = ({
      booklist: [],
      option: "1"
    });
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


  search = (value) => {
    console.log(value);
    axios.defaults.withCredentials = true;
    axios.post('http://127.0.0.1:3005/book/search', {
      bookname: value
    }).then((data) => {
      this.setState({
        bookList: data.data
      })
      console.log(data.data);

    });
  }


  itemClick = (value) => {
    console.log(value.key);
    this.setState({
      option: value.key
    });
  }

  logout =()=>{

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
    let search;
    console.log(this.state.bookList)
    if (this.state.option == "1") {
      com = <BookListDetail bookList={this.state.bookList}  history={this.props.history} />
      search = <Search placeholder="搜索图书" onSearch={value => this.search(value)}
        style={{ width: 150 }} //#001529
        className={serarch}
      />
    } else if(this.state.option == "2") {
      com = <RecordBookWithReader  history={this.props.history} />;
      search = null;
    }

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" onClick={this.itemClick} >
              <Icon type="desktop" />
              <span>搜索书籍</span>
            </Menu.Item  >
            <Menu.Item key="2" onClick={this.itemClick} >
              <Icon type="desktop" />
              <span>借阅记录</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.logout} >
              <Icon type="desktop" />
              <span>退出登录</span>
            </Menu.Item>

          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
            某某欢迎
                {search}
          </Header>

          <Content style={{ margin: '0 16px' }}>

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