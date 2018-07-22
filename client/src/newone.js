import React from 'react';

import 'antd/dist/antd.css';
import { Button,Menu, Col,Row,Icon ,Layout,Divider,Breadcrumb,Radio} from 'antd';
import fetch2 from './fetch.js';
import {About, About1 } from './Navi/Navi'
import { Router, Route, Link, hashHistory } from 'react-router'
import {GGG} from './GGG'
import {Aboutus} from './Aboutus'
import {Menu_line} from "./Mune_line";
import {url1} from './Navi/Navi.js'
const { Header, Content, Footer, Sider} = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export  class Newsone extends React.Component {
    state = {
        a:"aaaa",
        value:"bbb",
	pic:''

    }
    
componentDidMount() {
	let myHeaders = new Headers({
    'Access-Control-Allow-Origin': '*',
    });
let formData = new FormData();
var data = this.props.location.query.id;
var tempvar="{'id':'"+data+"'}";
formData.append('params', tempvar);

var opts = {
    method:"POST",
	headers: myHeaders,
	mode: 'cors',
	 body: formData
}
fetch(url1+'/home/news/query',opts).then((response) => {
    return response.json();
})
.then((responseText) => {
	
  this.setState({
                      value:responseText['data']['content'],
		a:responseText['data']['name'],
		pic:responseText['data']['picture']
});
	if(!responseText['data'].hasOwnProperty("picture")){
		this.setState({pic :''});
	}
	})
.catch((error) => {
    alert(error)
});
}
render() {
    return (
        <div>
        <Menu_line/>
        <Row type="flex">
        <Col span={4}></Col>
        <Col span={16}>
        <Layout>
        <Header style={{ background: '#000', padding: 0 }}>
<span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>
<Icon

    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
    style={{cursor: 'pointer'}}
    />
    </span>

    <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>NEWS</span>
    <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>


</span>
    </Header>
    <Content style={{ margin: '0 16px' }}>
<Breadcrumb style={{ margin: '12px 0' }}>

</Breadcrumb>
    <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
<Row type="flex" justify="center" text-align="center">
        <Col span={8}>
<h1>{this.state.a}</h1>
        </Col>
        </Row>
        <Row type="flex" justify="center" text-align="center">
        <Col span={15}></Col>
        <Col span={3}>
        <h3>作者:</h3>
                </Col>
                <Col span={6}>
                <h3>日期:</h3>
                        </Col>
                </Row>
        <Divider />
<p>&nbsp;&nbsp;{this.state.value.split('\n').map(function(item) {
                  return (
                    <span>
                      {item}
                      <br/>&nbsp;&nbsp;
                    </span>
                  )
                })} </p>
                <Row type="flex" justify="center" text-align="center">
                <Col span={4}></Col>
                <Col span={16}>
<img src={this.state.pic}></img>
</Col>
<Col span={4}></Col>
</Row>
</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
</Footer>
    </Layout>
    </Col>
    <Col span={4}></Col>
        </Row>

        </div>
);
}
}
