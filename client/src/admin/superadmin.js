import 'antd/dist/antd.css';
import { Menu,Row,Icon,Col,Button} from 'antd';
import React from 'react';
import { Table, Divider } from 'antd';
import {Link} from "react-router";
import {Modal} from 'antd';
import { Checkbox } from 'antd';



var contentadmin=false;
var websiteadmin=false;
var reviewadmin1=false;
var reviewadmin2=false;
var tips="";
const columns = [
    {
        title: '管理员',
        dataIndex: 'admin',
        key: 'admin',

    },
    {
        title: '权限',
        dataIndex: 'right',
        key: 'right',
    },

    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
         <Button onClick={delete_admin}>删除</Button>
        <Divider type="vertical" />

        </span>
),
}];

function delete_admin()
{

}

const data = [{
    key: '1',
    admin: 'John Brown',
    right:"内容",

}, {
    key: '2',
    admin: 'Jim Green',
    right: "网页",

}, {
    key: '3',
    admin: 'Joe Black',
    right: "审核",

}];

const columns1 = [
    {
        title: '申请人',
        dataIndex: 'admin',
        key: 'admin',

    },
    {
        title: '申请时间',
        dataIndex: 'time',
        key: 'time',
    },

    {
        title: '申请权限',
        dataIndex: 'rights',
        key: 'rights',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
    <Button><Link to="/userpage/BR">查看</Link></Button>
        <Divider type="vertical" />

        </span>
),
}];


const data1 = [{
    key: '1',
    admin: 'John Brown',
    time:"2018-7-13",

}, {
    key: '2',
    admin: 'Jim Green',
    right: "2018-7-13",

}, {
    key: '3',
    admin: 'Joe Black',
    right: "2018-7-13",

}];

const columns2 = [
    {
        title: '管理员',
        dataIndex: 'admin',
        key: 'admin',

    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
    <Button><Link to="/userpage/RI">权限操作</Link></Button>
    <Divider type="vertical" />

        </span>
),
}];


const data2 = [{
    key: '1',
    admin: 'John Brown',


}, {
    key: '2',
    admin: 'Jim Green',

}, {
    key: '3',
    admin: 'Joe Black',

}];

export class Give extends React.Component{
    render() {
        return (
            <div>

            <Table columns={columns2} dataSource={data2} />
        </div>
    );}
}

export class Review extends React.Component{
    render() {
        return (
            <div>

            <Table columns={columns1} dataSource={data1} />
            </div>
    );}
}

export class Minus extends React.Component{

        state = {

            visible:false

        }
        showModal = () => {
            this.setState({
                visible: true,
            });
            tips="";
        }
        handleOk = (e) => {
            console.log(e);
            this.setState({
                visible: false,
            });
            tips="";
        }
        handleCancel = (e) => {
            console.log(e);
            this.setState({
                visible: false,

            });
            tips="";

        }


        render() {

            return (

                <div>
                <p>{tips}
                <Button type="primary" onClick={this.showModal}>刷新</Button>
            </p>
            <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
        >
        <p>导入新列表！</p>

            </Modal>

            <Table columns={columns} dataSource={data} />

            </div>
        );}


}


export class Browse extends React.Component{
    render() {

        return (

            <div>
            <Row type="flex" justify="center">
            <Col span={4}>
            <Button>< Link to="/userpage/RE">Back</Link></Button>
            </Col>
            <Col span={4}>
            <Button>< Link to="/GGG">Accept</Link></Button>
            </Col>
            <Col span={4}>
            <Button>< Link to="/GGG">Refuse</Link></Button>
            </Col>
            </Row>
            </div>
    );}
}

function onChange_content(e) {
    console.log(`checked = ${e.target.checked}`);
    if (contentadmin==false)
        contentadmin=true;
    else contentadmin=false;
}

function onChange_website(e){
    console.log(`checked = ${e.target.checked}`);

    if (websiteadmin==false)
        websiteadmin=true;
    else websiteadmin=false;
}

function onChange_review1(e){
    console.log(`checked = ${e.target.checked}`);
    if (reviewadmin1==false)
        reviewadmin1=true;
    else reviewadmin1=false;
}

function onChange_review2(e){
    console.log(`checked = ${e.target.checked}`);
    if (reviewadmin2==false)
        reviewadmin2=true;
    else reviewadmin2=false;
}

export class RightChange extends React.Component{
    render(){
        return (
            <div>
            <Row type="flex" justify="center">
            <Col span={4}>
            <h1>权限操作</h1>
            </Col>
            </Row>

            <Row type="flex" justify="center">
            <Col span={8}>
            </Col>
            <Col span={2}>
            <Checkbox onChange={onChange_content} defaultChecked={contentadmin}>内容</Checkbox>
            </Col>

            <Col span={2}>
            <Checkbox onChange={onChange_website}defaultChecked={websiteadmin}>网站</Checkbox>
            </Col>

            <Col span={2}>
            <Checkbox onChange={onChange_review1}defaultChecked={reviewadmin1} >审核内容</Checkbox>
            </Col>

            <Col span={2}>
            <Checkbox onChange={onChange_review2}defaultChecked={reviewadmin2} >审核网站</Checkbox>
            </Col>
            <Col span={8}>
            </Col>
            </Row>


            <Row type="flex" justify="center">
            <Col span={9}>
            </Col>
            <Col span={3}>
            <Button><Link to="/userpage/GV">Back</Link></Button>
            </Col>

            <Col span={3}>
            <Button>Accept</Button>
            </Col>
            <Col span={9}>
            </Col>
            </Row>
        </div>
        );
    }
}