import React from 'react';

import 'antd/dist/antd.css';
import { Menu, Icon,Row,Col,Card } from 'antd';
import fetch2 from './fetch.js';
import {About, About1,Message, Inbox } from './Navi/Navi'
import { Router, Route, Link, hashHistory } from 'react-router'
import {GGG} from './GGG'
import {Menu_line} from './Mune_line'
import {Tabs} from 'antd'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane=Tabs.TabPane
function callback(key) {
    console.log(key);
}
export default class Aboutus extends React.Component {
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


    <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="" key="0"></TabPane>
        <TabPane tab="" key="0"></TabPane>
        <TabPane tab="" key="0"></TabPane>
        <TabPane tab="" key="0"></TabPane>
        <TabPane tab="" key="0"></TabPane>
        <TabPane tab="中心简介" key="1">南大软件测试</TabPane>
    <TabPane tab="合作伙伴" key="2">bilibili</TabPane>
    <TabPane tab="资质证书" key="3"><img src="ngnl_zero.png"/></TabPane>
    <TabPane tab="专家顾问委员会" key="4"> 刘畅大佬 </TabPane>
    <TabPane tab="获得成就" key="5">没有</TabPane>
    </Tabs>

</div>

);
}
}