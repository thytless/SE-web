import React from 'react';
import {test} from './change'
import 'antd/dist/antd.css';
import { Menu, Icon,Col,Button} from 'antd';
import fetch2 from './fetch.js';
import {About, About1 } from './Navi/Navi'
import { Router, Route, Link, hashHistory } from 'react-router'
import {GGG} from './GGG'
import {Aboutus} from './Aboutus'
import {NormalLoginForm} from './Logoin'
import {Solve}from'./Solve.js'
import {ServiceCenter}from'./servicecenter.js'
import {SuccessfulCase}from'./successfulcase.js'
import {Row} from "antd/lib/index";
import {Phonetous} from "./Phonetous";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

var name="kkk";
var icon="lock";
export  class Menu_line extends React.Component {

state={}

render() {
    if (test=="11"){name="登录";}
    else if (test=="22"){name="user";icon="unlock";}
    return (
        <div>

        <Menu
    onClick={this.handleClick}
    selectedKeys={[this.state.current]}
    mode="horizontal"
        >
        <Menu.Item > </Menu.Item>
        <Menu.Item > </Menu.Item>
        <Menu.Item > </Menu.Item>
        <Menu.Item > </Menu.Item>
        <Menu.Item > </Menu.Item>
        <Menu.Item > </Menu.Item>

        <Menu.Item key="mail" ><span><Icon type="home"/><Link to="/homepage">首页</Link></span>
        </Menu.Item>


        <Menu.Item key="app"  Icon="home">
        <span>
        <Icon type="folder-open"/>
        <Link to="/GGG">项目</Link>
        </span>
        </Menu.Item>

        <SubMenu title={<span><Icon type="solution"/><Link to="/solve">解决方案</Link></span>}>
        <MenuItemGroup title="电子政务工程">
        <Menu.Item key="setting:1">电子政务云设计</Menu.Item>
    <Menu.Item key="setting:2">涉密工程监理</Menu.Item>
    </MenuItemGroup>
    <MenuItemGroup title="政府门户网站">
        <Menu.Item key="场景式服务与民生领域综合服务专题建设">场景式服务与民生领域综合服务专题建设</Menu.Item>
    <Menu.Item key="公众互动知识库规划设计">公众互动知识库规划设计</Menu.Item>
    </MenuItemGroup>
    </SubMenu>

    <Menu.Item key="about_us">
    <span>
    <Icon type="smile-o" />
        <Link to="/aboutus">关于我们</Link>
    </span>
        </Menu.Item>


        <SubMenu title={<span><Icon type="like-o" /><Link to="/successfulcase">成功案例</Link></span>}>
        <Menu.Item key="setting:1">测试业务</Menu.Item>
    <Menu.Item key="setting:2">安全业务</Menu.Item>
        <Menu.Item key="setting:3">监理业务</Menu.Item>
    <Menu.Item key="setting:4">认证业务</Menu.Item>
    </SubMenu>

    <SubMenu title={<span><Icon type="setting"/><Link to="/servicecenter">服务中心</Link></span>}>
        <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
    <Menu.Item key="setting:2">Option 2</Menu.Item>
    </MenuItemGroup>
    <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
    <Menu.Item key="setting:4">Option 4</Menu.Item>
    </MenuItemGroup>
    </SubMenu>
    <Menu.Item key="about_us">
        <span>
        <Icon type="phone" />
        <Link to="/phonetous">联系我们</Link>
        </span>
        </Menu.Item>



    <SubMenu title={<span><Icon type="user" />用户中心</span>}>
        <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
    <Menu.Item key="setting:2">Option 2</Menu.Item>
    </MenuItemGroup>
    <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
    <Menu.Item key="setting:4">Option 4</Menu.Item>
    </MenuItemGroup>
    </SubMenu>

<Menu.Item ></Menu.Item>
<Menu.Item ></Menu.Item>


        <Menu.Item > < span > < Icon type = {icon}/ > <Link to="/logoin">{name}</Link></span>
            < /Menu.Item>


    </Menu>


</div>

);
}
}