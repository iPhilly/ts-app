import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Footer } = Layout;
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Guard from '../../Guard/Guard';
import Home from '../../Home/Home';
import House from '../../House/House';
import Setting from '../../Setting/Setting';

export default class HeaderOnlyLayout extends React.Component {
    public render() {
        return (
            <Router>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">
                                <Link to='/guard'>门禁</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to='/house'>房屋</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to='/setting'>设置</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Route path='/home' exact={true} component={Home} />
                        <Route path='/house' component={House} />
                        <Route path='/setting' component={Setting} />
                        <Route path='/guard' component={Guard} />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                </Footer>
                </Layout>);
            </Router>
        )
    }
}