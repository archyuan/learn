import React, { Component } from 'react';
import './MainPageNormal.css';
import { Layout, Menu, Icon } from 'antd';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import ReaderMag from './readerManagement/ReaderMag.jsx'
import ReaderUpd from './readerManagement/ReaderUpd.jsx'
import BookAdd from './bookManagement/BookAdd.jsx'
import BookMag from './bookManagement/BookMag.jsx'
import BookUpd from './bookManagement/BookUpd.jsx'
import BorrowAdd from './borrowManagement/BorrowAdd.jsx'
import BorrowMag from './borrowManagement/BorrowMag.jsx'
import BorrowUpd from './borrowManagement/BorrowUpd.jsx'
import Welcome from './Welcome.jsx'



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class MainPageSuper extends Component {
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
              <Menu.Item key="1">普通管理员</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Layout style={{ padding: '24px 0', background: '#fff' }}>
              <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                  mode="inline"

                  style={{ height: '100%' }}
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" />读者管理</span>}>
                    <Menu.Item key="1"><NavLink to="/normalManager/manageReader">读者信息</NavLink></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="book" /> 图书管理</span>}>
                    <Menu.Item key="2"><NavLink to="/normalManager/addBook">新增图书</NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to="/normalManager/manageBook">图书信息</NavLink></Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="profile" />借阅记录管理</span>}>
                    <Menu.Item key="4"><NavLink to="/normalManager/addBorrow">申请借阅管理</NavLink></Menu.Item>
                    <Menu.Item key="5"><NavLink to="/normalManager/addReturn">归还申请管理</NavLink></Menu.Item>
                    <Menu.Item key="6"><NavLink to="/normalManager/manageBorrow">借阅记录管理</NavLink></Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Content style={{ padding: '0 24px', height:'620px' }}>
                <Switch>
                  <Redirect exact from="/" to="/normalManager" />
                  <Route exact path="/normalManager" component={Welcome} />
                  <Route exact path="/normalManager/manageReader" component={ReaderMag} />
                  <Route exact path="/normalManager/addBook" component={BookAdd} />
                  <Route exact path="/normalManager/manageBook" component={BookMag} />
                  <Route exact path="/normalManager/addBorrow" component={BorrowAdd} />
                  <Route exact path="/normalManager/addReturn" component={BorrowUpd} />
                  <Route exact path="/normalManager/manageBorrow" component={BorrowMag} />
                  <Route exact path="/normalManager/manageReader/updateReader/:id" component={ReaderUpd} />
                  <Route exact path="/normalManager/manageBook/updateBook/:id" component={BookUpd} />
                </Switch>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    );
  }
}

export default MainPageSuper;
