import { Layout, Menu, Breadcrumb,Button,Divider, Icon } from 'antd';
import {Menu_line} from "./Mune_line";
import React from 'react'
import fetch2 from './fetch.js';
import { Row, Col,Tabs } from 'antd';
import { Table } from 'antd';
import { Router, Route, Link, hashHistory } from 'react-router'
export const columns = [{
    title: 'Name',
    dataIndex: 'name',
    width: 500,
},  {
    title: 'Time',
    dataIndex: 'address',
}];

export const data = [];
var opts = {
    method:"GET"
}
export const data1 = [];
export var data1num=1;

export const tablecolumns = [
    {
        title: '成功案例分类',
        dataIndex: 'name',
        key: 'name',
        width:450,
    },
    {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
        width:200,
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
    <Button><Link to="/successfulcase/linkbro">查看</Link></Button>
    <Divider type="vertical" />

        </span>
),
}];

export const tabledata=[
    {key: '1',

    name:"电子政务",
    time:"2018-07-16"
}, {
    key: '2',
        name:"互联网+政务",
        time:"2018-07-16"
}, {
    key: '3',


        name:"政府网站",
        time:"2018-07-16"
}, {
    key: '4',

        name:"大数据",
        time:"2018-07-16"
}, {
    key: '5',

        name:"信息安全",
        time:"2018-07-16"
}, {
    key: '6',

        name:"数据中心",
        time:"2018-07-16"
}, {
    key: '7',

        name:"云计算",
        time:"2018-07-16"
}, {
    key: '8',

        name:"卫生医疗",
        time:"2018-07-16"
}, {
    key: '9',

        name:"智慧城市",
        time:"2018-07-16"
}, {
    key: '10',

        name:"应急管理",
        time:"2018-07-16"
}, {
    key: '11',

        name:"自主可控",
        time:"2018-07-16"
}, {
    key: '12',

        name:"移动应用",
        time:"2018-07-16"
}];




export const TabPane = Tabs.TabPane;
export const { SubMenu } = Menu;
export const { Header, Content, Sider } = Layout;
function callback(key) {
    console.log(key);
}
fetch('http://localhost:4000/db',opts).then((response) => {
    return response.json();
})
.then((responseText) => {
    //alert(responseText['user'][0]['address']);

    data.splice(0,data.length);
    for (let i=0;i<responseText['success'].length;i++) {

        data.push({
                key: i,
                name: responseText['success'][i]['name'],
                address: responseText['success'][i]['address']
            }
        )
    }
	data1.push(responseText['scase'][0]['content1']);
	data1.push(responseText['scase'][0]['content2']);
	data1.push(responseText['scase'][0]['content3']);
	data1.push(responseText['scase'][0]['content4']);
	data1.push(responseText['scase'][0]['content5']);
	data1.push(responseText['scase'][0]['content6']);
	data1.push(responseText['scase'][0]['content7']);
	data1.push(responseText['scase'][0]['content8']);
	data1.push(responseText['scase'][0]['content9']);
	data1.push(responseText['scase'][0]['content10']);
	data1.push(responseText['scase'][0]['content11']);
	data1.push(responseText['scase'][0]['content12']);
    data1.push(responseText['scase'][0]['content13']);



})
.catch((error) => {
    alert(error)
});


export  class SuccessfulCase extends React.Component {
    state = {
        //imgsrc[]:"";
        wordsrc:[],
        wordnum:1,

    }
    componentWillMount(){
        this.setState({
            wordsrc:data1
        });
    }

    handleClick = (e) => {
    fetch2(this.state.nameone).then(v => {
    this.setState({
                      nameone:this.state.nameone+"a"
});
});
}
allclick=(e)=>{
    fetch('http://localhost:4000/db',opts).then((response) => {
        return response.json();
})
.then((responseText) => {
        //alert(responseText['user'][0]['address']);

        data.splice(0,data.length);
    for (let i=0;i<responseText['success'].length;i++) {

        data.push({
                key: i,
                name: responseText['success'][i]['name'],
                address: responseText['success'][i]['address']
            }
        )
    }




})
.catch((error) => {
        alert(error)
    });
    data1num=1;
}
handleClick_1=(e)=>{

    this.setState({
        wordnum:1
    });
    data1num=1;
}
handleClick_2=(e)=>{


    this.setState({
        wordnum:2
    });
    data1num=2;

}

handleClick_3=(e)=>{
    this.setState({
        wordnum:3
    });
    data1num=3;
}

handleClick_4=(e)=>{
    this.setState({
        wordnum:4
    });
    data1num=4;
}

handleClick_5=(e)=>{
    this.setState({
        wordnum:5
    });
    data1num=5;
}

handleClick_6=(e)=>{
    this.setState({
        wordnum:6
    });
    data1num=6;
}

handleClick_7=(e)=>{
    this.setState({
        wordnum:7
    });
    data1num=7;
}

handleClick_8=(e)=>{
    this.setState({
        wordnum:8
    });
    data1num=8;
}

handleClick_9=(e)=>{
    this.setState({
        wordnum:9
    });
    data1num=9;
}

handleClick_10=(e)=>{
    this.setState({
        wordnum:10
    });
    data1num=10;
}

handleClick_11=(e)=>{
    this.setState({
        wordnum:11
    });
    data1num=11;
}

handleClick_12=(e)=>{
    this.setState({
        wordnum:12
    });
    data1num=12;
}


render() {
    return (
        <div>
        <Menu_line/>

        <Row type="flex" justify="center">
    <Col span={4}></Col>
    <Col span={16}>

        <Layout>
        <Sider width={200} style={{ background: '#fff',height:"50%" }}>
<Menu
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['sub1']}
    style={{ height: '100%', borderRight: 0 }}
>

        <Menu.Item key="2" onClick={this.handleClick_1} style={{color: 'gray', fontSize: 'large'}}><Link to="/successfulcase/linktable">{data1[1]}</Link></Menu.Item>
        <Menu.Item key="3" onClick={this.handleClick_2} style={{color: 'gray', fontSize: 'large'}}><Link to="/successfulcase/linktable">{data1[2]}</Link></Menu.Item>
        <Menu.Item key="4" onClick={this.handleClick_3} style={{color: 'gray', fontSize: 'large'}}><Link to="/successfulcase/linktable">{data1[3]}</Link></Menu.Item>
        <Menu.Item key="5" onClick={this.handleClick_4} style={{color: 'gray', fontSize: 'large'}}><Link to="/successfulcase/linktable">{data1[4]}</Link></Menu.Item>


        <Menu.Item key="6" onClick={this.handleClick_5} style={{color: 'gray', fontSize: 'large'}}><Link to="/successfulcase/linktable">{data1[5]}</Link></Menu.Item>
        <Menu.Item key="7" onClick={this.handleClick_6} style={{color: 'gray', fontSize: 'large'}}><Link to="/successfulcase/linktable">{data1[6]}</Link></Menu.Item>
        <Menu.Item key="8" onClick={this.handleClick_7} style={{color: 'gray', fontSize: 'large'}}><Link to="/successfulcase/linktable">{data1[7]}</Link></Menu.Item>
        <Menu.Item key="9" onClick={this.handleClick_8}style={{color: 'gray', fontSize: 'large'}} ><Link to="/successfulcase/linktable">{data1[8]}</Link></Menu.Item>


        <Menu.Item key="10" onClick={this.handleClick_9} style={{color: 'gray', fontSize: 'large'}}><Link to="/successfulcase/linktable">{data1[9]}</Link></Menu.Item>
        <Menu.Item key="11" onClick={this.handleClick_10} style={{color: 'gray', fontSize: 'large'}}><Link to="/successfulcase/linktable">{data1[10]}</Link></Menu.Item>
        <Menu.Item key="12" onClick={this.handleClick_11} style={{color: 'gray', fontSize: 'large'}} ><Link to="/successfulcase/linktable">{data1[11]}</Link></Menu.Item>
        <Menu.Item key="13" onClick={this.handleClick_12} style={{color: 'gray', fontSize: 'large'}}><Link to="/successfulcase/linktable">{data1[12]}</Link></Menu.Item>




        </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
<Breadcrumb style={{ margin: '16px 0' }}>
    </Breadcrumb>
    <h1 style={{color:"green"}}  size="large">{data1[data1num]}</h1>

    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 700 }}>

   <Table columns={tablecolumns} dataSource={tabledata}/>

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