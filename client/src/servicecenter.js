import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Menu_line} from "./Mune_line";
import React from 'react'
import fetch2 from './fetch.js';

import { Row, Col,Tabs, Select } from 'antd';
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

    introl.push(responseText['scenter'][0]['content4']);
introl.push(responseText['scenter'][0]['content5']);
introl.push(responseText['scenter'][0]['content6']);

for(let i=0;i<responseText['solve1'].length;i++)
{solve1.push(responseText['solve1'][i]['content']);}

//solve1.push(responseText['solve1'][0]['content']);
relate1.push(responseText['relate1'][0]['content']);
data.push(responseText['scenter'][0]['content1']);
data.push(responseText['scenter'][0]['content2']);
data.push(responseText['scenter'][0]['content3']);







})
.catch((error) => {
    alert(error)
});


export  class ServiceCenter extends React.Component {
    state = {
        pic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531721263685&di=6cfefa2e83a1ef5f6bd6aeb6db88f6ab&imgtype=0&src=http%3A%2F%2Fwww.anyunchina.com%2Fuploadfile%2F20140915094513475.jpg",
        tryit:introl[0],
        num:0,
    }
    handleClick1 = (e) => {

        this.setState({
            pic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531721263685&di=6cfefa2e83a1ef5f6bd6aeb6db88f6ab&imgtype=0&src=http%3A%2F%2Fwww.anyunchina.com%2Fuploadfile%2F20140915094513475.jpg",
            tryit:introl[0],
            num:0,

        });

    }
    handleClick2 = (e) => {

        this.setState({
            pic:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2599496968,2261399187&fm=27&gp=0.jpg",
            tryit:introl[1],
            num:1
        });

    }
    handleClick3 = (e) => {

        this.setState({
            pic:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531721421347&di=f0656f106fbb17391b4e51dc3e16176a&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D411591231%2C3682127927%26fm%3D214%26gp%3D0.jpg",
            tryit:introl[2],
            num:2
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
<Menu.Item key="6"  style={{color: 'gray', fontSize: 'large'}} onClick={this.handleClick1}>{data[0]}</Menu.Item>
<Menu.Item key="7" style={{color: 'gray', fontSize: 'large'}} onClick={this.handleClick2} disabled={true}>{data[1]}</Menu.Item>
<Menu.Item key="8"style={{color: 'gray', fontSize: 'large'}}  onClick={this.handleClick3} disabled={true}>{data[2]}</Menu.Item>


</Menu>
</Sider>
<Layout style={{ padding: '0 24px 24px' }}>
<Breadcrumb style={{ margin: '16px 0' }}>
</Breadcrumb>
<h1 style={{color:"green"}}>{data[this.state.num]}</h1>
<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700 }}>

<div>
<p style={{color: 'gray', fontSize: 'large'}}>
{this.state.tryit}
</p>
<img  src={this.state.pic} style={{width:700,height:600}}></img>
</div>



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