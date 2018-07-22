import 'antd/dist/antd.css';
import { Menu,Row,Icon,Col,Button} from 'antd';
import React from 'react';
import { Table, Divider,Input,message } from 'antd';
import {Link} from "react-router";
const { TextArea } = Input;
export var linkcontent="";
const columns = [
    {
        title: '修改内容',
        dataIndex: 'content',
        key: 'content',

    },
    {
        title:'分类',
        dataIndex:'classify',
        key:'classify'
    },
    {
        title: '申请人',
        dataIndex: 'proposer',
        key: 'proposer',
    },
    {
        title: '申请时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
    <Link to="/userpage/CV">查看</Link>
        <Divider type="vertical" />


        </span>
),
}];

const columns1 = [
    {
        title: '修改内容',
        dataIndex: 'content',
        key: 'content',

    },
    {
        title:'分类',
        dataIndex:'classify',
        key:'classify'
    },
    {
        title: '申请人',
        dataIndex: 'proposer',
        key: 'proposer',
    },
    {
        title: '申请时间',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
    <Link to="/userpage/REWEB">查看</Link>
        <Divider type="vertical" />


        </span>
),
}];
const info = () => {
    message.info("Refuse必须输入理由");
};
const info1 = () => {
    message.info("审核完成，结果：拒绝");
};
const info2=()=>{
    message.info("审核完成，结果：通过");
}
const data = [{
    key: '1',
    content: 'Change 《xxxx》',
    proposer: 'lss',
    time: '2018-07-11',
}, {
    key: '2',
    content: 'Add 《xxxx》',
    proposer: 'lc',
    time: '2018-07-11',
}, {
    key: '3',
    content: 'Delete 《xxxx》',
    proposer: 'sj',
    time: '2018-07-11',
}];
const data1 = [{
    key: '1',
    content: 'Change 《xxxx》',
    proposer: 'lss',
    time: '2018-07-11',
}, {
    key: '2',
    content: 'Add 《xxxx》',
    proposer: 'lc',
    time: '2018-07-11',
}, {
    key: '3',
    content: 'Delete 《xxxx》',
    proposer: 'sj',
    time: '2018-07-11',
}];
export class ReviewContent extends React.Component{
    render() {
        return (
            <div>

        <Table columns={columns} dataSource={data} />
        </div>
    );}
}


export class ReviewWeb extends React.Component{
    render() {
        return (
            <Table columns={columns1} dataSource={data1} />
    );}
}

export class Content extends React.Component{
    state={
        content:"",
        disa:"false"
    }
    handleChange3=(e)=>
{
    if (e.target.value=="")
    this.setState({
        content:e.target.value,
    disa:"false"
                  });
    else
{
    this.setState({
        content:e.target.value,
        disa:""
    });
}

}
handleclick_ac=()=>{
    info2();
}
handleclick_re=()=>{
        if(this.state.content=="")
            info();
    else
        info1();

}
    render(){
        return(
            <div>
            <Row type="flex" justify="center">
            <h1>Header</h1>
            </Row>
            <Row type="flex" justify="center" >
            <Col span={4}>
            <p>proposer:</p>
            </Col>
            <Col span={4}>
            <p>time:</p>
            </Col>
            </Row>
            <Row>
            <p>Content</p>
            </Row>
            <Row>
            <Col>
        < TextArea
        rows = {20}
        placeholder = "正文"
        value = {this.state.content
    }
        onChange = {this.handleChange3
    }
        />
            </Col>
            </Row>
            <Row type="flex" justify="center">
            <Col span={4}>
            <Button>< Link to={linkcontent}>Back</Link></Button>
            </Col>
            <Col span={4}>
            <Button onClick={this.handleclick_ac}><Link to={linkcontent}>Accept</Link></Button>
            </Col>
            <Col span={4}>
            <Button onClick={this.handleclick_re} disabled={this.state.disa}><Link to={linkcontent}>Refuse</Link></Button>
            </Col>
            </Row>
        </div>
        );
    }
}


export class Website extends React.Component{
    state={
        content:"",
        disa:"false"
    }
    handleChange3=(e)=>
{
    if (e.target.value=="")
    this.setState({
                      content:e.target.value,
    disa:"false"
});
else
{
    this.setState({
        content:e.target.value,
        disa:""
    });
}

}
handleclick_ac=()=>{
    info2();
}
handleclick_re=()=>{
    if(this.state.content=="")
        info();
    else
        info1();

}
render(){
    return(
        <div>
        <Row type="flex" justify="center">
        <h1>Header</h1>
        </Row>
        <Row type="flex" justify="center" >
        <Col span={4}>
        <p>proposer:</p>
    </Col>
    <Col span={4}>
        <p>time:</p>
    </Col>
    </Row>
    <Row>
    <p>Content</p>
    </Row>
    <Row>
    <Col>
    < TextArea
    rows = {20}
    placeholder = "正文"
    value = {this.state.content
}
    onChange = {this.handleChange3
}
    />
    </Col>
    </Row>
    <Row type="flex" justify="center">
        <Col span={4}>
        <Button>< Link to={linkcontent}>Back</Link></Button>
    </Col>
    <Col span={4}>
        <Button onClick={this.handleclick_ac}><Link to={linkcontent}>Accept</Link></Button>
    </Col>
    <Col span={4}>
        <Button onClick={this.handleclick_re} disabled={this.state.disa}><Link to={linkcontent}>Refuse</Link></Button>
    </Col>
    </Row>
    </div>
);
}
}



export function changeRC () {
    linkcontent="/userpage/RC";
}
export function changeRW () {
    linkcontent="/userpage/RW";
}
