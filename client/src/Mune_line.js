import React from 'react';
import {test} from './change'
import 'antd/dist/antd.css';
import { Menu, Icon,Button} from 'antd';
import fetch2 from './fetch.js';
import {About, About1 } from './Navi/Navi'
import { Router, Route, Link, hashHistory } from 'react-router'
import {GGG} from './GGG'
import {Aboutus} from './Aboutus'
import {NormalmuenlineForm,user} from './Logoin'
import {Solve}from'./Solve.js'
import {ServiceCenter}from'./servicecenter.js'
import {SuccessfulCase}from'./successfulcase.js'

import { Row, Col } from 'antd';
import {Phonetous} from "./Phonetous";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

var name="kkk";
var icon="lock";
var muenlinelink="/logoin";
const data=[];

export  class Menu_line extends React.Component {

componentWillMount() {var opts = {
    method:"GET"
}
fetch('http://localhost:4000/db',opts).then((response) => {
    return response.json();
})
.then((responseText) => {
    //alert(responseText['user'][0]['address']);
    data.push(responseText['muenline'][0]['content1']);
	data.push(responseText['muenline'][0]['content2']);
	data.push(responseText['muenline'][0]['content3']);
	data.push(responseText['muenline'][0]['content4']);
	data.push(responseText['muenline'][0]['content5']);
	data.push(responseText['muenline'][0]['content6']);
	data.push(responseText['muenline'][0]['content7']);
	data.push(responseText['muenline'][0]['content8']);
	data.push(responseText['muenline'][0]['content9']);
	data.push(responseText['muenline'][0]['content10']);
	data.push(responseText['muenline'][0]['content11']);
	data.push(responseText['muenline'][0]['content12']);
	data.push(responseText['muenline'][0]['content13']);
	data.push(responseText['muenline'][0]['content14']);
	data.push(responseText['muenline'][0]['content15']);
	data.push(responseText['muenline'][0]['content16']);
	data.push(responseText['muenline'][0]['content17']);
	data.push(responseText['muenline'][0]['content18']);
	data.push(responseText['muenline'][0]['content19']);
	this.setState({
                      try1:data
});
	//alert(this.state.try1[0]);
//alert(this.state.try1[0]['content1']);





})
.catch((error) => {
    alert(error)
});}

state={try1:[]}

render() {
    if (test=="out"){name="登录";icon="lock",muenlinelink="logoin"}

    else if (test=="in"){name="user";icon="unlock";muenlinelink="userpage"}
    return (
        <div>
        <Row type="flex" justify="center">
        <Col span={4}></Col>
        <Col span={16}>
        <Menu
    onClick={this.handleClick}
    selectedKeys={[this.state.current]}
    mode="horizontal"
        >


        <Menu.Item key="mail" ><span><Link to="/homepage"><Icon type="home"/>{this.state.try1[1]} </Link></span>
        </Menu.Item>


        <Menu.Item key="app" disabled="true">
        <span>
        <Icon type="folder-open"/>
        {this.state.try1[2]}
        </span>
        </Menu.Item>

        
		<SubMenu title={<span><Link to="/solve"><Icon type="solution"/>{this.state.try1[3]}</Link></span>}>
        <Menu.Item key="setting:3">电子政务系统测评</Menu.Item>
        <Menu.Item key="setting:4">政务系统测评</Menu.Item>
        <Menu.Item key="setting:5">政务app测评</Menu.Item>
        <Menu.Item key="setting:6">系统安全测评</Menu.Item>
        <Menu.Item key="setting:7">项目绩效测评</Menu.Item>
        <Menu.Item key="setting:8">安全风险评估</Menu.Item>
        <Menu.Item key="setting:9">数据中心评测</Menu.Item>

        </SubMenu>

    <Menu.Item key="about_us">
    <span>
        <Link to="/aboutus/mylink">
    <Icon type="smile-o" />
        {this.state.try1[10]}</Link>
    </span>
        </Menu.Item>


        <SubMenu title={<span><Link to="/successfulcase/linktable"><Icon type="like-o" />{this.state.try1[18]}</Link></span>}>
    <Menu.Item key="setting:3">电子政务</Menu.Item>
    <Menu.Item key="setting:4">互联网+政务</Menu.Item>
    <Menu.Item key="setting:5">政府网站</Menu.Item>
    <Menu.Item key="setting:6">大数据</Menu.Item>
    <Menu.Item key="setting:7">信息安全</Menu.Item>
    <Menu.Item key="setting:8">数据中心</Menu.Item>
    <Menu.Item key="setting:9">云计算</Menu.Item>
    <Menu.Item key="setting:10">卫生医疗</Menu.Item>
    <Menu.Item key="setting:11">智慧城市</Menu.Item>
    <Menu.Item key="setting:12">应急管理</Menu.Item>
    <Menu.Item key="setting:13">自主可控</Menu.Item>
    <Menu.Item key="setting:14">移动应用</Menu.Item>
    </SubMenu>


    <Menu.Item key="servicecenter">
        <span>
        <Link to="/servicecenter">
        <Icon type="global" />
        {this.state.try1[15]}</Link>
        </span>
        </Menu.Item>
    <Menu.Item key="connect_us">
        <span>
        <Link to="/phonetous">
        <Icon type="phone" />
        {this.state.try1[16]}</Link>
        </span>
        </Menu.Item>





<Menu.Item ></Menu.Item>
<Menu.Item ></Menu.Item>


        <Menu.Item > < span ><Link to={muenlinelink}> < Icon type = {icon}/ > {user}</Link></span>
            < /Menu.Item>


    </Menu>
</Col>
<Col span={4}></Col>
    </Row>
</div>

);
}
}