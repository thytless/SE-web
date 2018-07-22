/**
 * Created by Admin on 2018/5/29.
 */
import { Layout,Button, Menu, Breadcrumb, Icon } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import {GGGG} from'./admin/useradmin.js';
import {PutNews,DeleteNews} from'./admin/newsadmin.js';
import {Counter} from'./index.js';
import './SiderDemo.css'
import { Router, Route,IndexLink, Link, hashHistory } from 'react-router'
import {About,About1 } from './Navi/Navi'
import {Menu_line} from './Mune_line'
import {identity} from'./Logoin.js';
import {change_test} from './change.js'
import {change_correct}from'./Logoin.js'
import {ChangeSucesscase,ChangeSolvecase,ChangeAboutus,ChangeService,ChangeConnectus}from'./admin/websiteadmin.js'
import {changeRC,changeRW} from "./admin/reviewadmin";
import {user_name} from "./Logoin";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const data=[];
export class SiderDemo extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
		try1:[]


    };
    handleClickRC=()=>
{
    changeRC();
}
handleClickRW=()=>
{
    changeRW();
}
    handleClick = (e) =>
    {
        e.preventDefault();
        change_test();
        change_correct();
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
	componentWillMount() {var opts = {
    method:"GET"
}
fetch('http://localhost:4000/db',opts).then((response) => {
    return response.json();
})
.then((responseText) => {
    //alert(responseText['user'][0]['address']);
    data.push(responseText['sider'][0]['content1']);
	data.push(responseText['sider'][0]['content2']);
	data.push(responseText['sider'][0]['content3']);
	data.push(responseText['sider'][0]['content4']);
	data.push(responseText['sider'][0]['content5']);
	data.push(responseText['sider'][0]['content6']);
	data.push(responseText['sider'][0]['content7']);
	data.push(responseText['sider'][0]['content8']);
	data.push(responseText['sider'][0]['content9']);
	data.push(responseText['sider'][0]['content10']);
	data.push(responseText['sider'][0]['content11']);
	data.push(responseText['sider'][0]['content12']);
	data.push(responseText['sider'][0]['content13']);
	data.push(responseText['sider'][0]['content14']);
	data.push(responseText['sider'][0]['content15']);
	data.push(responseText['sider'][0]['content16']);
	data.push(responseText['sider'][0]['content17']);
	data.push(responseText['sider'][0]['content18']);
	data.push(responseText['sider'][0]['content19']);
	data.push(responseText['sider'][0]['content20']);
	data.push(responseText['sider'][0]['content21']);
	data.push(responseText['sider'][0]['content22']);
	data.push(responseText['sider'][0]['content23']);
	data.push(responseText['sider'][0]['content24']);
	data.push(responseText['sider'][0]['content25']);
	
	//alert(this.state.try1[0]);
//alert(this.state.try1[0]['content1']);

this.setState({
                      try1:data
});



})
.catch((error) => {
    alert(error)
});}
    render() {
        return (
                <div>

            <Layout>
            <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
>
<div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>


        <Menu.Item key="0"><Link to="/userpage/NT"><Icon type="smile-o" />{this.state.try1[0]}</Link></Menu.Item>



<SubMenu key="sub1" disabled={identity[0]}  title={<span><Icon type="user" /><span>{this.state.try1[1]}</span></span>}>
<Menu.Item key="1"><Link to="/userpage/CF">{this.state.try1[2]}</Link></Menu.Item>

<Menu.Item key="4"><Link to="/userpage/CP">{this.state.try1[5]}</Link></Menu.Item>
</SubMenu>

<SubMenu key="sub2"  disabled={identity[1]} title={<span><Icon type="solution" /><span>{this.state.try1[6]}</span></span>}>
<Menu.Item key="5"><Link to="/userpage/PN">{this.state.try1[7]}</Link></Menu.Item>
<Menu.Item key="6"><Link to="/userpage/DN">{this.state.try1[8]}</Link></Menu.Item>
<Menu.Item key="7"><Link to="/userpage/UP">{this.state.try1[9]}</Link></Menu.Item>

</SubMenu>

<SubMenu key="sub3"  disabled={identity[2]} title={<span><Icon type="global" /><span>{this.state.try1[10]}</span></span>}>
<Menu.Item key="8"><Link to="/userpage/CS">{this.state.try1[11]}</Link></Menu.Item>
<Menu.Item key="81"><Link to="/userpage/CA">{this.state.try1[12]}</Link></Menu.Item>
<Menu.Item key="82"><Link to="/userpage/CSolve">{this.state.try1[13]}</Link></Menu.Item>
<Menu.Item key="83"><Link to="/userpage/CService">{this.state.try1[14]}</Link></Menu.Item>
<Menu.Item key="84"><Link to="/userpage/CC">{this.state.try1[15]}</Link></Menu.Item>
</SubMenu>

<SubMenu key="sub4"  disabled={identity[3]} title={<span><Icon type="edit" /><span>{this.state.try1[16]}</span></span>}>
<Menu.Item key="9" disabled={identity[5]} onClick={this.handleClickRC}><Link to="/userpage/RC">{this.state.try1[17]}</Link></Menu.Item>
<Menu.Item key="999" disabled={identity[6]} onClick={this.handleClickRW}><Link to="/userpage/RW">{this.state.try1[18]}</Link></Menu.Item>
</SubMenu>



<SubMenu key="sub5" disabled={identity[4]} title={<span><Icon type="star" /><span>{this.state.try1[19]}</span></span>}>
<Menu.Item key="13"><Link to="/userpage/GV">{this.state.try1[20]}</Link></Menu.Item>
<Menu.Item key="14"><Link to="/userpage/RE">{this.state.try1[21]}</Link></Menu.Item>
<Menu.Item key="15"><Link to="/userpage/MI">{this.state.try1[22]}</Link></Menu.Item>
</SubMenu>

</Menu>

</Sider>
<Layout>
<Header style={{ background: '#000', padding: 0 }}>
<span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
<Icon
className="trigger"
type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
onClick={this.toggle}
style={{cursor: 'pointer'}}
/>
</span>

<span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>{this.state.try1[23]}</span>
        <span style={{color:"#fff",paddingLeft:'70%'}}><Button Icon type="home"><Link to="/homepage">返回首页</Link></Button></span>
<span style={{color:'#fff', float:'right', paddingRight:'1%'}}>
<Button Icon type="export" onClick={this.handleClick}><Link to="/homepage">{this.state.try1[24]}</Link></Button>

</span>
</Header>
<Content style={{ margin: '0 16px' }}>
<Breadcrumb style={{ margin: '12px 0' }}>

</Breadcrumb>
<div style={{ padding: 24, background: '#fff', minHeight: 780 }}>

{this.props.children}

</div>
</Content>
<Footer style={{ textAlign: 'center' }}>
Ant Design ©2016 Created by Ant UED
</Footer>
</Layout>
</Layout>


    </div>
);
}
}

