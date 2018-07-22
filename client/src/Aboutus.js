import React from 'react';

import 'antd/dist/antd.css';
import { Layout,Menu, Icon,Row,Col,Table,Card,Breadcrumb } from 'antd';
import fetch2 from './fetch.js';
import {About, About1,Message, Inbox } from './Navi/Navi'
import { Router, Route, Link, hashHistory, } from 'react-router'
import {GGG} from './GGG'
import {Menu_line} from './Mune_line'
import {Tabs} from 'antd'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane=Tabs.TabPane
function callback(key) {
    console.log(key);
}

const columns = [{
    title: '证书名称',
    dataIndex: 'name',
    key: 'name',
},  {
    title: '图片预览',
    key: 'img',
    render: (text, record) => (<img style={{width:'60px'}} src={record.img}/>)
}];

const dataList = [{name: 'xx',img:'http://www.chenfangka.com/wp-content/uploads/2017/03/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f70736167534356484f4b515671714e6a6a4d64662e6a7067-250x250.jpeg?imageView/1/w/260/h/260/q/100'},
    {name: 'zz',img:'http://www.chenfangka.com/wp-content/uploads/2017/03/68747470733a2f2f7a6f732e616c697061796f626a656374732e636f6d2f726d73706f7274616c2f70736167534356484f4b515671714e6a6a4d64662e6a7067-250x250.jpeg?imageView/1/w/260/h/260/q/100'}];


const briefintro = [];
const companymate = [];
const expert=[];
const achieve=[];
const data=[];
const abcon=[];
var datanum=0;
var abnum=0;
var opts = {
    method:"GET"
}

export const { Header, Content, Sider } = Layout;


fetch('http://localhost:4000/db',opts).then((response) => {
    return response.json();
})
.then((responseText) => {
    //alert(responseText['user'][0]['address']);
    abcon.push(responseText['briefintro'][0]['content']);
abcon.push(responseText['companymate'][0]['content']);
abcon.push(responseText['expert'][0]['content']);
abcon.push(responseText['achieve'][0]['content']);

data.push(responseText['aboutus'][0]['content1']);
	data.push(responseText['aboutus'][0]['content2']);
	data.push(responseText['aboutus'][0]['content3']);
	data.push(responseText['aboutus'][0]['content4']);
	data.push(responseText['aboutus'][0]['content5']);




})
.catch((error) => {
    alert(error)
});
export  class Aboutus extends React.Component {
    state = {
        nameone:"",
        mynum:0,
    }
    componentWillMount(){
        this.setState({
           mynum:0
        });
    }
    handleClick = (e) => {
    fetch2(this.state.nameone).then(v => {
    this.setState({
                      nameone:this.state.nameone+"a"
});
});
}
handleClick_1=(e)=>{
    this.setState({
        mynum:0
    });
    abnum=0;
    datanum=0;
}
handleClick_2=(e)=>{
    this.setState({
        mynum:1
    });
    abnum=1;
    datanum=1;
}
handleClick_3=(e)=>{
   datanum=2;
}
handleClick_4=(e)=>{
    this.setState({
        mynum:2
    });
    abnum=2;
    datanum=3;
}
handleClick_5=(e)=>{
    this.setState({
        mynum:3
    });
    abnum=3;
    datanum=4;
}
render() {
    return (

        <div>
        <Menu_line/>

        <Row type="flex" justify="center">
        <Col span={4}></Col>
        <Col span={16}>

        <Layout>
        <Sider width={200} style={{ background: '#fff',height:"50%" }} >
<Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', borderRight: 0 }}
>

    <Menu.Item key="2" onClick={this.handleClick_1} style={{color: 'gray', fontSize: 'large'}}><Link to="/aboutus/mylink">{data[0]}</Link></Menu.Item>
    <Menu.Item key="3" onClick={this.handleClick_2} style={{color: 'gray', fontSize: 'large'}}><Link to="/aboutus/mylink">{data[1]}</Link></Menu.Item>
    <Menu.Item key="4" onClick={this.handleClick_3} style={{color: 'gray', fontSize: 'large'}}><Link to="/aboutus/certification">{data[2]}</Link></Menu.Item>
    <Menu.Item key="5" onClick={this.handleClick_4} style={{color: 'gray', fontSize: 'large'}}><Link to="/aboutus/mylink">{data[3]}</Link></Menu.Item>


    <Menu.Item key="6" onClick={this.handleClick_5} style={{color: 'gray', fontSize: 'large'}}><Link to="/aboutus/mylink">{data[4]}</Link></Menu.Item>





    </Menu>
    </Sider>
    <Layout style={{ padding: '0 24px 24px' }}>
<Breadcrumb style={{ margin: '16px 0' }}>
</Breadcrumb>
        <h1 style={{color:"green"}}>{data[datanum]}</h1>
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700 }}>

    {this.props.children}

</Content>
    </Layout>
    </Layout>
    </Col>
    <Col span={4}></Col>
        </Row>
        </div>


);
}
}

export class Mylink extends React.Component{
render(){
    return(
        <p>{abcon[abnum]}</p>
    );
}
}

export class Certification extends React.Component{
    render(){
        return(
            <Table columns={columns} dataSource={dataList} />
        );
    }
}
