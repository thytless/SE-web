import React from 'react';
import 'antd/dist/antd.css';
import { Router, Route, Link, hashHistory } from 'react-router'
import { Menu, Icon,Col,Button,Input,Row} from 'antd';
import { Table,Divider } from 'antd';
import { Layout, Breadcrumb,Radio,Modal } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
var tips="";
const columns = [
    {
        title: '标题',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: '发送者',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '日期',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
    <Link to="/userpage/VI" >查看</Link>
    <Divider type="vertical" />

    <Link to="/userpage/NT" onClick={dele}>删除</Link>
    <Divider type="vertical" />

    </span>
),
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];

function dele  ()  {

}
export class Notice extends React.Component {
    state = {

        visible: false

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
<p></p>
<Table columns={columns} dataSource={data} />

</div>
);}
}

export class Viewnotice extends React.Component{
    render(){
        return(
            <div>
            <p>123</p>
            <Button><Link to="/userpage/NT">Back</Link></Button>
            </div>
        );
    }
}
