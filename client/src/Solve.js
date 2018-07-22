import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Menu_line} from "./Mune_line";
import React from 'react'
import fetch2 from './fetch.js';
import { Row, Col, Tabs,Button} from 'antd';
const TabPane = Tabs.TabPane;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function callback(key) {
    console.log(key);
}
const introl= [];
const solve1 = [];
const relate1=[];
var opts = {
    method:"GET"
}




const data=[];

fetch('http://localhost:4000/db',opts).then((response) => {
    return response.json();
})
.then((responseText) => {
    //alert(responseText['user'][0]['address']);

    introl.push(responseText['intro1'][0]['content']);
    introl.push(responseText['intro1'][1]['content']);
introl.push(responseText['intro1'][2]['content']);
introl.push(responseText['intro1'][3]['content']);
introl.push(responseText['intro1'][4]['content']);
introl.push(responseText['intro1'][5]['content']);
introl.push(responseText['intro1'][6]['content']);
    for(let i=0;i<responseText['solve1'].length;i++)
    {solve1.push(responseText['solve1'][i]['content']);}

    //solve1.push(responseText['solve1'][0]['content']);
    relate1.push(responseText['relate1'][0]['content']);
	data.push(responseText['solve'][0]['content1']);
	data.push(responseText['solve'][0]['content2']);
	data.push(responseText['solve'][0]['content3']);
	data.push(responseText['solve'][0]['content4']);
	data.push(responseText['solve'][0]['content5']);
	data.push(responseText['solve'][0]['content6']);
	data.push(responseText['solve'][0]['content7']);
	data.push(responseText['solve'][0]['content8']);
	data.push(responseText['solve'][0]['content9']);






})
.catch((error) => {
    alert(error)
});


export  class Solve extends React.Component {
    state = {
       try:solve1[0],
        tryit:introl[0],
        num:0,
    }
    handleClick1 = (e) => {

    this.setState({
                      try:solve1[0],
                        tryit:introl[0],
        num:0
});

}
    handleClick2 = (e) => {

        this.setState({
            try:solve1[1],tryit:introl[1],
            num:1
        });

    }
    handleClick3 = (e) => {

        this.setState({
            try:solve1[2],
            tryit:introl[2],
            num:2
        });

    }
    handleClick4 = (e) => {

        this.setState({
            try:solve1[3],
            tryit:introl[3],
            num:3
        });

    }
    handleClick5 = (e) => {

        this.setState({
            try:solve1[4],
            tryit:introl[4],
            num:4
        });

    }
    handleClick6 = (e) => {

        this.setState({
            try:solve1[5],
            tryit:introl[5],
            num:5
        });

    }
    handleClick7 = (e) => {

        this.setState({
            try:solve1[6],
            tryit:introl[6],
            num:6
        });

    }
render() {
    return (
        <div>
        <Menu_line/>

        <Row type="flex" justify="center">
        <Col span={4}></Col>
        <Col span={16}>
        <Layout>
        <Sider width={200} style={{ height:"50%",background: '#fff' }}>
<Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: "100%", borderRight: 0 }}
>
        <Menu.Item key="6" onClick={this.handleClick1} style={{color: 'gray', fontSize: 'large'}}>{data[0]}</Menu.Item>
        <Menu.Item key="7" onClick={this.handleClick2} style={{color: 'gray', fontSize: 'large'}}>{data[1]}</Menu.Item>
        <Menu.Item key="8" onClick={this.handleClick3} style={{color: 'gray', fontSize: 'large'}}>{data[2]}</Menu.Item>
        <Menu.Item key="9" onClick={this.handleClick4} style={{color: 'gray', fontSize: 'large'}}>{data[3]}</Menu.Item>
        <Menu.Item key="10" onClick={this.handleClick5} style={{color: 'gray', fontSize: 'large'}}>{data[4]}</Menu.Item>
        <Menu.Item key="11" onClick={this.handleClick6} style={{color: 'gray', fontSize: 'large'}}>{data[5]}</Menu.Item>
        <Menu.Item key="12" onClick={this.handleClick7} style={{color: 'gray', fontSize: 'large'}}>{data[6]}</Menu.Item>

        </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
<Breadcrumb style={{ margin: '16px 0' }}>
</Breadcrumb>
        <h1 style={{color:"green"}}>{data[this.state.num]}</h1>
    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700 }}>
<Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab={data[7]} key="1"><div>

{this.state.tryit}</div></TabPane>
        <TabPane tab={data[8]} key="2">{this.state.try}</TabPane>

    </Tabs>
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