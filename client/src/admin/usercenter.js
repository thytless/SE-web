import React from 'react';
import 'antd/dist/antd.css';
import { Router, Route, Link, hashHistory } from 'react-router'
import { Menu, Icon,Col,Button,Input,Row} from 'antd';
import { Table,Divider } from 'antd';
import { Layout, Breadcrumb,Radio } from 'antd';
import { change_ps,ps} from '../Logoin.js';
const { Header, Content, Footer, Sider } = Layout;
var tips="请输入旧密码";
var noti="请输入新密码";
var noti1="请再次输入"
var it="false";

var yourname="用户名：";
var youremail="邮箱：";
var yourphone="手机号：";
var idname="真实姓名：";
var  id="身份证：";

var oldname="yxt";
var oldemail="1071@qq.com";
var oldphone="156xxx";
var oldidname="yang";
var  oldid="342626"

function judgeit  (...args) {
    if(args[0]==ps) {
        it = "";
        return "correct";
    }
    else {
        it = "false";
        return " error";
    }
}
function save_user_file  (...args)  {
    oldname=args[0];
    oldemail=args[1];
    oldphone=args[2];
}

export class Changepassword extends React.Component {

    state = {
        oldps:"",
        newps:"",
        newps1:"",
        res:"",
        res1:"",
        dis:"false"
    }


    handleChange = (e) => {
        this.setState({
            oldps: e.target.value

        });
    }
    handleChange1 = (e) => {
        this.setState({
        newps: e.target.value

    });
}

    handleChange2 = (e) => {
        this.setState({
            newps1: e.target.value

        });
    }
    handleClick = (e) => {

        this.setState({
            res:judgeit(this.state.oldps),
            dis:""
        });
    }
    handleClick1 = (e) => {

        this.setState({
            res1:change_ps(this.state.newps,this.state.newps1)

        });
        it="false";

    }
    render() {
        return (
            <div>
            <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
        <p style={{color: 'green', fontSize: 'large'}}>{tips}</p>
                <p  style={{color: 'red', fontSize: 'large'}}>{this.state.res}</p>
            </Col>
            </Row>
            <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
            <Input id="try"type="text" value={this.state.oldps} onChange={this.handleChange} />
            </Col>
            </Row>
            <p></p>
            <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
            <Button type="primary" onClick={this.handleClick}>检查</Button>
            </Col>
            </Row>
            <p></p>
            <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
<p style={{color: 'green', fontSize: 'large'}}>{noti}</p>
            </Col>
            </Row>
            <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
            <Input disabled={it}id="what" type="text"  value={this.state.newps} onChange={this.handleChange1} />
            </Col>
            </Row>
            <p></p>
        <Row type="flex" justify="center" text-align="center">
        <Col span={8}>
<p style={{color: 'green', fontSize: 'large'}}>{noti1}</p>
        </Col>
        </Row>
        <Row type="flex" justify="center" text-align="center">
        <Col span={8}>
        <Input disabled={it}id="what1" type="text"  value={this.state.newps1} onChange={this.handleChange2} />
        </Col>
        </Row>

<Row type="flex" justify="center" text-align="center">
<Col span={8}>

<p  style={{color: 'red', fontSize: 'large'}}>{this.state.res1}</p>
</Col>
</Row>
            <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
            <Button type="primary" onClick={this.handleClick1} disabled={it}>确认</Button>
             </Col>
            </Row>

</div>

);
}
}

export class Changefile extends React.Component {

    state = {
        name:oldname,
        email:oldemail,
        phone:oldphone,
        idname:oldidname,
        id:oldid,
        it:"false",
        button:"修改",
        button1:"重置"
    }


    handleChange = (e) => {
        this.setState({
            name: e.target.value

        });
    }
    handleChange1 = (e) => {
        this.setState({
            email: e.target.value

        });
    }
    handleChange2 = (e) => {
        this.setState({
            phone: e.target.value

        });
    }

    handleClick = (e) => {
        if(this.state.it=="false") {
            this.setState({
                it:"",
                button:"确认"
            });
        }
        else
        {   save_user_file(this.state.name,this.state.email,this.state.phone);
            this.setState({
                it: "false",
                button:"修改"
            });

        }

    }

    handleClick1 = (e) => {

            this.setState({
                name:oldname,
                email:oldemail,
                phone:oldphone,
                idname:oldidname,
                id:oldid,
            });


    }
    render() {

            return (
                < div >
                <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
                <p style={{color: 'green', fontSize: 'large'}}>{yourname}</p>
            </Col>
            </Row>
        <Row type="flex" justify="center" text-align="center">
        <Col span={8}>
        <Input disabled={this.state.it}id="what2" type="text"  value={this.state.name} onChange={this.handleChange} />
</Col>
</Row>
    <p></p>
            <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
                <p style={{color: 'green', fontSize: 'large'}}>{youremail}</p>
            </Col>
            </Row>
<Row type="flex" justify="center" text-align="center">
<Col span={8}>
<Input disabled={this.state.it}id="what3" type="text"  value={this.state.email} onChange={this.handleChange1} />
</Col>
</Row> <p></p>
            <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
                <p style={{color: 'green', fontSize: 'large'}}>{yourphone}</p>
            </Col>
            </Row>

<Row type="flex" justify="center" text-align="center">
<Col span={8}>
<Input disabled={this.state.it}id="what4" type="text"  value={this.state.phone} onChange={this.handleChange2} />
</Col>
</Row> <p></p>
            <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
                 <p style={{color: 'green', fontSize: 'large'}}>{idname}</p>
            </Col>
            </Row>
<Row type="flex" justify="center" text-align="center">
<Col span={8}>
<Input disabled="false"id="what5" type="text"  value={this.state.idname}  />
</Col>
</Row> <p></p>
            <Row type="flex" justify="center" text-align="center">
            <Col span={8}>
                <p style={{color: 'green', fontSize: 'large'}}>{id}</p>
            </Col>
            </Row>
<Row type="flex" justify="center" text-align="center">
<Col span={8}>
<Input disabled="false"id="what6" type="text"  value={this.state.id}  />
</Col>
</Row>
    <p></p>
<Row >
<Col span={8}></Col>
<Col span={4}>
<Button type="primary" onClick={this.handleClick}>{this.state.button}</Button>
</Col>
<Col span={8} >
<Button type="primary" disabled={this.state.it} onClick={this.handleClick1}>{this.state.button1}</Button>
</Col>
</Row>
                < / div >

        )
            ;

}

}
