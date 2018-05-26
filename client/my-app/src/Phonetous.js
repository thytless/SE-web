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

export  class Phonetous extends React.Component {
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
            <Tabs onChange={callback} type="card">
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
        </div>
    )
    }
}
