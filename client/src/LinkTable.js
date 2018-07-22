import { Layout, Menu,Divider, Breadcrumb, Icon,Row,Col,Button } from 'antd';
import {Menu_line} from "./Mune_line";
import React from 'react'
import fetch2 from './fetch.js';
import { Tabs } from 'antd';
import { Table } from 'antd';
import {Link} from 'react-router';
import {data,columns,data1,data1num,tablecolumns,tabledata} from './successfulcase'
export const TabPane = Tabs.TabPane;
export const { SubMenu } = Menu;
export const { Header, Content, Sider } = Layout;
export class LinkTable extends React.Component {
    state={
        linkword:[],
        linknum:1
    }

    render(){
        return (
        <div>

            <Table columns={tablecolumns} dataSource={tabledata} />

        </div>
    )
    }

}

export class LinkTableBrowse extends React.Component{
    render(){
        return(
            <div>

            <Row type="flex" justify="center">
            <Col span={8}>
            <h1>Header</h1>
            </Col>
            </Row>
            <Row>
            <Col>
            <p>Time</p>
            </Col>
            </Row>
            <Row>
            <Col>
            <p>Content</p>
            </Col>
            </Row>
            <Row type="flex" justify="center">
            <Col span={4}>
            <Button>< Link to="/successfulcase/linktable">Back</Link></Button>
            </Col>
            </Row>
            </div>
        );

    }
}