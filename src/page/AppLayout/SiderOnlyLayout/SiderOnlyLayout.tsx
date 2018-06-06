import { Breadcrumb, Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Guard from '../../Guard/Guard';
import Home from '../../Home/Home';
import House from '../../House/House';
import Setting from '../../Setting/Setting';
import { Test } from '../../TestComp';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export interface IPropsSiderOnlyLayout {
    collapsed: boolean;
}

export interface IStateSiderOnlyLayout {
    collapsed: boolean;
}

export default class SiderOnlyLayout extends React.Component<IPropsSiderOnlyLayout, IStateSiderOnlyLayout> {

    constructor(props: IPropsSiderOnlyLayout) {
        super(props)
        this.state = {
            collapsed: this.props.collapsed
        }
    }
    public onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    public render() {
        return (
            <BrowserRouter>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible={true}
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

                            <Menu.Item key="1">
                                <Link to='./home'>
                                    <Icon type="search" />
                                    <span>搜索</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to='/house'>
                                    <Icon type="home" />
                                    <span>房屋</span>
                                </Link>
                            </Menu.Item>

                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>人员</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>

                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="setting" /><span>设置</span></span>}
                            >
                                <Menu.Item key="6"><Link to='/setting'>选项1</Link></Menu.Item>
                                <Menu.Item key="8"><Link to='/setting'>选项2</Link></Menu.Item>
                            </SubMenu>

                            <Menu.Item key="9">
                                <Link to='/test'>
                                    <Icon type="edit" />
                                    <span>测试</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0, textAlign: 'center' }}>
                            <h1>Maybe I'm a faker header :)</h1>
                        </Header>
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <Route path='/home' exact={true} component={Home} />
                            <Route path='/house' component={House} />
                            <Route path='/setting' component={Setting} />
                            <Route path='/guard' component={Guard} />
                            <Route path='/test' component={Test} />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2016 Created by Ant UED
                    </Footer>
                    </Layout>
                </Layout>
            </BrowserRouter>
        );
    }
}