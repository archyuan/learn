import React, { Component } from 'react';
import './MainPageSuper.css';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import ManagerAdd from './mangerManagement/ManagerAdd.jsx'
import ManagerMag from './mangerManagement/ManagerMag.jsx'
import ManagerUpdate from './mangerManagement/ManagerUpdate.jsx'
import Statistic from './Statistic.jsx'
import Welcome from './Welcome.jsx'
import axios from 'axios';
const config = require('../config/config.js')

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class MainPageSuper extends Component {
  
  constructor(props){
    super(props);
    this.state={
      managername:''
    }
  }

  logout=()=>{
    axios.defaults.withCredentials = true;
    axios.post(`${config.Front_PATH}/admin/logout`).then((data)=>{
      if(data.data.islogout=='success'){
        this.props.history.replace("/admin");
      }
    });
  };

  componentDidMount(){

    axios.defaults.withCredentials = true;
    axios.post(`${config.Front_PATH}/admin/islogin`).then((data)=>{
      if(data.data.islogin=="nologin"){
        this.props.history.replace("/admin");
      }else{
        this.setState({
          managername:data.data.islogin
        });
      }
    });

  }
  
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">{`超级管理员:${this.state.managername}`}</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"
                  style={{ height: '100%' }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" />管理员管理</span>}>
                    <Menu.Item key="1"><NavLink to="/superManager/addManager">新增管理员</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to="/superManager/manageManager">管理员信息</NavLink></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="calculator" /><NavLink to="/superManager/statistic">统计分析</NavLink></span>}>
                  </SubMenu>
                  <Menu.Item >
                    <p  onClick={this.logout} >退出登录</p>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', height:'650px' }}>
                <Switch>
                  <Redirect exact from="/" to="/superManager" />
                  <Route exact path="/superManager" component={Welcome} />
                  <Route exact path="/superManager/addManager" component={ManagerAdd} />
                  <Route exact path="/superManager/manageManager" component={ManagerMag} />
                  <Route exact path="/superManager/statistic" component={Statistic} />
                  <Route exact path="/superManager/manageManager/updateManager/:id" component={ManagerUpdate} />
                </Switch>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>图书管理系统</Footer>
        </Layout>
      </Router>
    );
  }
}

export default MainPageSuper;
