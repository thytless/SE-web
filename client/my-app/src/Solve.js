import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Menu_line} from "./Mune_line";
import React from 'react'
import fetch2 from './fetch.js';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function callback(key) {
    console.log(key);
}



export  class Solve extends React.Component {
    state = {
        nameone:""

    }
    handleClick = (e) => {
    fetch2(this.state.nameone).then(v => {
    this.setState({
                      nameone:this.state.nameone+"a"
});
});
}
render() {
    return (
        <div>
        <Menu_line/>


        <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
<Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', borderRight: 0 }}
>
<SubMenu key="sub1" title={<span><Icon type="user" />电子政务工程</span>}>
        <Menu.Item key="1">电子政务云设计</Menu.Item>
        <Menu.Item key="2">涉密工程监理</Menu.Item>
        <Menu.Item key="3">电子政务工程监理</Menu.Item>
        <Menu.Item key="4">工程运维监理与咨询</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
    <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
    <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
        </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
<Breadcrumb style={{ margin: '16px 0' }}>
</Breadcrumb>
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700 }}>
<Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="简介" key="1">1</TabPane>
        <TabPane tab="解决方案" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="相关案例" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>
    </Content>
    </Layout>
    </Layout>

    </div>

);
}
}