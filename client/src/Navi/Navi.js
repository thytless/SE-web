import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { List, Card } from 'antd';
import { Row, Col } from 'antd';
import {Link} from 'react-router'
import '../pic/main_bc.jpg'
import './Navi.css'
import { Table, Icon, Divider } from 'antd';
import {Linkto} from '../Linkto'
export var url1="";

const data1=[]
const columns = [{
        title: '新闻标题',
        dataIndex: 'name',
        width: 300,
    render:text=><Link to="/linkto">{text}</Link>
}, {
        title: '发布日期',
        dataIndex: 'address',
}];

const data = [];
const Intro = [];
const mate=[];




export const About = () => (
<Row type="flex" justify="center">
<Col span={4}></Col>
<Col span={16}>
<Carousel autoplay>
<div><Link to="/newsone"><img  src={require('../pic/1.jpg')}></img></Link></div>
<div><Link to="/newstwo"><img  src={require('../pic/2.jpg')}></img></Link></div>
<div><Link to="/newsthree"><img  src={require('../pic/3.jpg')}></img></Link></div>
<div><Link to="/newsfour"><img  src={require('../pic/4.jpg')}></img></Link></div>
</Carousel>
</Col>
<Col span={4}></Col>
</Row>
)
export class About1 extends React.Component {
state={try1:[]}
componentWillMount() {var opts = {
    method:"GET"
}




fetch('http://localhost:4000/db',opts).then((response) => {
    return response.json();
})
.then((responseText) => {
    //alert(responseText['user'][0]['address']);
        data.splice(0,data.length);
    for(let i = 0; i < responseText['news'].length; i++)
{
    data.push({

        name: responseText['news'][i]['name'],

        address: responseText['news'][i]['address'],
    });}
Intro.push(responseText['introduction'][0]['content']);
mate.push(responseText['mate'][0]['content']);



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
<Row type="flex" justify="center" text-align="center" >
<Col span={8}>
<Table columns={columns} dataSource={data} pagination={{ pageSize: 4 }} scroll={{ y: 530 }} />
</Col>

<Col span={8}>
<Card title='简介' style={{maxHeight:400}} extra={<Link to ="/aboutus">more</Link>} >


<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
     <p>Card content</p>
     <p>Card content</p>
     <p>Card content</p>
     <p>Card content</p>
     <p>Card content</p>

     <p>Card content</p>
     <p>Card content</p>
     <p>Card content</p>
     <p>Card content</p>

</Card>
</Col>
<Row>


         </Row>
</Row>

</div>
)}}

