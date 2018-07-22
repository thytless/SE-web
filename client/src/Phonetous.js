import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Menu_line} from "./Mune_line";
import React from 'react'
import fetch2 from './fetch.js';
import { Row, Col,Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const data=[];

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
	componentWillMount() {var opts = {
    method:"GET"
}
fetch('http://localhost:4000/db',opts).then((response) => {
    return response.json();
})
.then((responseText) => {
    //alert(responseText['user'][0]['address']);
    data.push(responseText['phone'][0]['content1']);
	data.push(responseText['phone'][0]['content2']);
	data.push(responseText['phone'][0]['content3']);
	data.push(responseText['phone'][0]['content4']);
	data.push(responseText['phone'][0]['content5']);
	data.push(responseText['phone'][0]['content6']);
	
	//alert(data[0]);
//alert(data[0]['content1']);





})
.catch((error) => {
    alert(error)
});}
    render() {
        return (
        <div>
            <Menu_line/>
            <Row type="flex" justify="center">
            <Col span={4}></Col>
            <Col span={16}>

            <div style={{ padding: 24, background: '#fff', minHeight: 780, }}>
<p style={{color: 'green', fontSize: 'large'}}><center>{data[0]}:{data[3]}</center></p>
<p style={{color: 'green', fontSize: 'large'}}><center>{data[1]}:{data[4]}</center></p>
<p style={{color: 'green', fontSize: 'large'}}><center>{data[2]}:{data[5]}</center></p>
<img  src={require('./pic/cus.jpg')}style={{width:980,height:800}}></img>
        </div>
        </Col>
        <Col span={4}></Col>
        </Row>
        </div>
    )
    }
}
