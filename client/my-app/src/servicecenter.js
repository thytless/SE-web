import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Menu_line} from "./Mune_line";
import React from 'react'
import fetch2 from './fetch.js';
import { Tabs, Select } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export  class ServiceCenter extends React.Component {

    state = {
        tabPosition: 'left',
    }
    changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
}
render() {
    return (
        <div>
        <Menu_line/>
        <Tabs tabPosition={this.state.tabPosition}>
<TabPane tab="Tab 1" key="1">dahsjkhcljgl
        shgkjshfkshkjf
        ffghskfshug
        hglfsghuhsdks
        shdvfhfejshd
        hgsuiklfjkehdi
        ahiusvhgesuhilhg
        asiofgfsfild
        gsirhohhfuigh</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
    </Tabs>
    </div>
);
}
}
