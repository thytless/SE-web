import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import { List, Card } from 'antd';
import { Row, Col } from 'antd';
import {Link} from 'react-router'
import './Navi.css'
import { Table, Icon, Divider } from 'antd';
const columns = [{
        title: '新闻标题',
        dataIndex: 'name',
        width: 300,
}, {
        title: '发布日期',
        dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
        data.push({
                key: i,
                name: `Edward King ${i}`,
        age: 32,
            address: `2018-05-24 ${i}`,
});
}
export const About = () => (
<Carousel autoplay>
<div><h3><img src="3.jpg"></img></h3></div>
<div><h3><img src="2.jpg"></img></h3></div>
<div><h3><img src="3.jpg"></img></h3></div>
<div><h3><img src="4.jpg"></img></h3></div>
</Carousel>
)

export const About1 = () => (
<div>
<Row type="flex" justify="center" text-align="center">
<Col span={8}>
<Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 530 }} />
</Col>

<Col span={8}>
<Card title="简介" extra={<Link to ="/aboutus">more</Link>} style={{ width:500 }}>
<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
</Card><Card title="合作伙伴" extra={<Link to="/aboutus">more</Link>} style={{ width:500 }}>
<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
<p>Card content</p>
</Card>
</Col>

</Row>
</div>
)

