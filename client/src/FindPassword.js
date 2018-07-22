/**
 * Created by Admin on 2018/6/11.
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Router, Route, Link, hashHistory } from 'react-router'
import {Menu_line} from './Mune_line'
import {message, Menu, Icon,Col,Button,Input,Row} from 'antd';
import { Table,Divider } from 'antd';
import { Layout, Breadcrumb,Radio } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const RadioGroup = Radio.Group;
var your_id="";
var way="";
var address="";
var email="?";
var phone="?";
const data=[];
const info = () => {
    message.info("修改成功！");
};
const info1 = () => {
    message.info("密码输入不一致！");
};
const info2 = () => {
    message.info("账号错误！");
};
const info3 = () => {
    message.info("验证码错误！");
};
const info4 = () => {
    message.info("身份信息错误！");
};
function submit  (...args)  {

    your_id=args[0];
    way=args[1];
    if(way=="1")
        address="/findpassword/email";
    else if(way=="2")
        address="/findpassword/phone";
    else
        address="/findpassword/id"
}
function save_email  (...args)  {

   email=args[0];
}
function save_phone  (...args)  {

    phone=args[0];
}
class Xuanze extends React.Component {
    state = {
        value: "1",
        id:"",
        check:"false",
		try1:[]
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    handleChange1 = (e) => {


        this.setState({

            id: e.target.value,


        });
    };
    handleClick1 = (e) => {
        if(this.state.id=="")
        {
            info2();
        }
        else {
            this.setState({

                check: ""


            });
            submit(this.state.id, this.state.value)
        }
    };
	componentWillMount() {var opts = {
    method:"GET"
}
fetch('http://localhost:4000/db',opts).then((response) => {
    return response.json();
})
.then((responseText) => {
    //alert(responseText['user'][0]['address']);
    data.push(responseText['findps'][0]['content1']);
	data.push(responseText['findps'][0]['content2']);
	data.push(responseText['findps'][0]['content3']);
	data.push(responseText['findps'][0]['content4']);
	data.push(responseText['findps'][0]['content5']);
	data.push(responseText['findps'][0]['content6']);
	data.push(responseText['findps'][0]['content7']);
	data.push(responseText['findps'][0]['content8']);
	data.push(responseText['findps'][0]['content9']);
	data.push(responseText['findps'][0]['content10']);
	data.push(responseText['findps'][0]['content11']);
	data.push(responseText['findps'][0]['content12']);
	data.push(responseText['findps'][0]['content13']);
	data.push(responseText['findps'][0]['content14']);
	data.push(responseText['findps'][0]['content15']);
	this.setState({
                      try1:data
});
	
	//alert(this.state.try1[0]);
//alert(this.state.try1[0]['content1']);





})
.catch((error) => {
    alert(error)
});}
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
                <div>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
<Radio style={radioStyle}style={{color: 'green', fontSize: 'large'}} value="1">{this.state.try1[0]}
</Radio>
<Radio style={radioStyle}style={{color: 'green', fontSize: 'large'}} value="2">{this.state.try1[1]}
</Radio>
<Radio style={radioStyle}style={{color: 'green', fontSize: 'large'}} value="3">{this.state.try1[2]}
</Radio>

</RadioGroup>

<br/>
<br/>
<p style={{color: 'green', fontSize: 'large'}}>{this.state.try1[3]}</p>
<Row type="flex" >

<Col span={11}>
<Input id="FP" type="text" style={{color: 'green', fontSize: 'large'}}placeholder={this.state.try1[4]} onChange={this.handleChange1} />
</Col>
</Row>
    <br/>
    <Row>
<Col span={3}>
<Button type="primary" onClick={this.handleClick1}>{this.state.try1[5]}</Button>
    </Col>

<Col span={3}>
<Button type="primary" disabled={this.state.check}><Link to={address}>{this.state.try1[6]}</Link></Button>
</Col>
</Row>

</div>


);



}
}


export class FindPassword extends React.Component {

    state = {

        a:"aaaa",
        value:"bbb"

    }


    handleChange = (e) => {
        this.setState({
            value: e.target.value

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

<span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>'FINDPASSWORD'</span>
<span style={{color:'#fff', float:'right', paddingRight:'1%'}}>


</span>
</Header>
<Content style={{ margin: '0 16px' }}>
<Breadcrumb style={{ margin: '12px 0' }}>

</Breadcrumb>
<div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
<p style={{color: 'green', fontSize: 'large'}}>"请选择找回密码方式"</p>

<Xuanze/>
{this.props.children}
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

export class Email extends React.Component {

    state = {
        email:"",
        try1:[],
        judge1:"false",
        judge2:"false",
        yzm:"",
        newps1:"",
        newps2:"",
    }
    componentWillMount()
    {
        this.setState({
            try1:data

        });
    }

    handleChange = (e) => {
        this.setState({
            email: e.target.value

        });
    }

    handleClick = (e) => {
       save_email(this.state.email)
        this.setState({
            judge1:""

        });

    };
    handleClick1 = (e) => {
        if(this.state.yzm=="")
        {
            info3();
        }
        else {
            this.setState({
                judge2: ""

            });
        }
    };

    handleClick2 = (e) => {
        if(this.state.newps1==this.state.newps2)
        {
            info();
        }
        else
        {
            info1();
        }
    };

    handleChange1 = (e) => {
        this.setState({
            yzm: e.target.value

        });
    }

    handleChange2 = (e) => {
        this.setState({
            newps1: e.target.value

        });
    }
    handleChange3 = (e) => {
        this.setState({
            newps2: e.target.value

        });
    }
    render() {
        return (
            <div><br/>
            <p style={{color: 'green', fontSize: 'large'}}>{this.state.try1[8]}</p>

            <Row type="flex" >

        <Col span={11}>
        <Input id="save_email" type="text" style={{color: 'green', fontSize: 'large'}} placeholder={this.state.try1[9]}onChange={this.handleChange} />
</Col>
    </Row>
    <br/>
            <Button type="primary" onClick={this.handleClick}>{this.state.try1[10]}</Button>
<Row>
<br/>
</Row>
<Row type="flex" >

<Col span={11}>
<Input id="phoneyzm" disabled={this.state.judge1} type="text" style={{color: 'green', fontSize: 'large'}} placeholder="请输入验证码" onChange={this.handleChange1} />
</Col>
</Row>
<br/>
<Button type="primary" disabled={this.state.judge1} onClick={this.handleClick1}>确定</Button>
<Row>
<br/>
</Row>
<p style={{color: 'green', fontSize: 'large'}}>请输入新密码</p>
<Row type="flex" >

<Col span={11}>
<Input id="newps" type="text"  disabled={this.state.judge2}style={{color: 'green', fontSize: 'large'}} placeholder="在此输入新密码" onChange={this.handleChange2} />
</Col>
</Row>
<br/>
<Row type="flex" >

<Col span={11}>
<Input id="newps1" type="text" disabled={this.state.judge2}style={{color: 'green', fontSize: 'large'}} placeholder="请再次输入" onChange={this.handleChange3} />
</Col>
</Row>
<br/>
<Button type="primary" disabled={this.state.judge2}onClick={this.handleClick2}>确定更改</Button>
            </div>

);
}
}
export class Phone extends React.Component {

    state = {
    phone:"",
        try1:[],
        judge1:"false",
        judge2:"false",
        yzm:"",
        newps1:"",
        newps2:"",


    }
    componentWillMount()
    {
        this.setState({
            try1:data

        });
    }
    handleClick = (e) => {
        save_phone(this.state.phone)
        this.setState({
            judge1:""

        });
    };

    handleClick1 = (e) => {
        if(this.state.yzm=="")
        {
            info3();
        }
        else {
            this.setState({
                judge2: ""

            });
        }
    };

    handleClick2 = (e) => {
        if(this.state.newps1==this.state.newps2)
        {
            info();
        }
        else
        {
            info1();
        }
    };
    handleChange = (e) => {
        this.setState({
            phone: e.target.value

        });
    }
    handleChange1 = (e) => {
        this.setState({
            yzm: e.target.value

        });
    }

    handleChange2 = (e) => {
        this.setState({
            newps1: e.target.value

        });
    }
    handleChange3 = (e) => {
        this.setState({
            newps2: e.target.value

        });
    }

    render() {
        return (
            <div><br/>
            <p style={{color: 'green', fontSize: 'large'}}>{this.state.try1[11]}</p>

            <Row type="flex" >

        <Col span={11}>
        <Input id="save_phone" type="text" style={{color: 'green', fontSize: 'large'}} placeholder={this.state.try1[12]} onChange={this.handleChange} />
</Col>
    </Row>
    <br/>
    <Button type="primary" onClick={this.handleClick}>{this.state.try1[13]}</Button>
<Row>
<br/>
    </Row>
<Row type="flex" >

<Col span={11}>
<Input id="phoneyzm" disabled={this.state.judge1} type="text" style={{color: 'green', fontSize: 'large'}} placeholder="请输入验证码" onChange={this.handleChange1} />
</Col>
    </Row>
<br/>
<Button type="primary" disabled={this.state.judge1} onClick={this.handleClick1}>确定</Button>
<Row>
<br/>
</Row>
<p style={{color: 'green', fontSize: 'large'}}>请输入新密码</p>
<Row type="flex" >

<Col span={11}>
<Input id="newps" type="text"  disabled={this.state.judge2}style={{color: 'green', fontSize: 'large'}} placeholder="在此输入新密码" onChange={this.handleChange2} />
</Col>
</Row>
    <br/>
<Row type="flex" >

<Col span={11}>
<Input id="newps1" type="text" disabled={this.state.judge2}style={{color: 'green', fontSize: 'large'}} placeholder="请再次输入" onChange={this.handleChange3} />
</Col>
</Row>
<br/>
<Button type="primary" disabled={this.state.judge2}onClick={this.handleClick2}>确定更改</Button>
            </div>

    );
    }
}

export class Id extends React.Component {

    state = {
        name:"",
        email:"",
        phone:"",
        idname:"",
        id:"",

        judge2:"false",
        yzm:"",
        newps1:"",
        newps2:"",


    }



    handleClick1 = (e) => {
        if(this.state.name==""||this.state.phone==""||this.state.email==""||this.state.idname==""||this.state.idnumber=="")
        {
            info4();
        }
        else {
            this.setState({
                judge2: ""

            });
        }
    };

    handleClick2 = (e) => {
        if(this.state.newps1==this.state.newps2)
        {
            info();
        }
        else
        {
            info1();
        }
    };
    handleChange = (e) => {
        this.setState({
            phone: e.target.value

        });
    }
    handleChange1 = (e) => {
        
        this.setState({
            yzm: e.target.value

        });
    }

    handleChange2 = (e) => {
        this.setState({
            newps1: e.target.value

        });
    }
    handleChange3 = (e) => {
        this.setState({
            newps2: e.target.value

        });
    }
    handleChange4 = (e) => {
        this.setState({
            name: e.target.value

        });
    }
    handleChange5 = (e) => {
        this.setState({
            phone: e.target.value

        });
    }
    handleChange6 = (e) => {
        this.setState({
            email: e.target.value

        });
    }
    handleChange7 = (e) => {
        this.setState({
            idname: e.target.value

        });
    }
    handleChange8 = (e) => {
        this.setState({
            idnumber: e.target.value

        });
    }
    render() {
        return (
            <div><br/>
            <p style={{color: 'green', fontSize: 'large'}}>请填写身份信息</p>
    <Row type="flex" >

    <Col span={11}>
    <Input id="nickname" type="text"  style={{color: 'green', fontSize: 'large'}} placeholder="在此输入用户名" onChange={this.handleChange4} />
</Col>
</Row>
<br/>
    <Row type="flex" >

    <Col span={11}>
    <Input id="phone" type="text"  style={{color: 'green', fontSize: 'large'}} placeholder="输入手机号" onChange={this.handleChange5} />
</Col>
</Row>
<br/>
<Row type="flex" >

<Col span={11}>
<Input id="email" type="text" style={{color: 'green', fontSize: 'large'}} placeholder="输入邮箱地址" onChange={this.handleChange6} />
</Col>
</Row>
<br/>
    <Row type="flex" >

    <Col span={11}>
    <Input id="idname" type="text"  style={{color: 'green', fontSize: 'large'}} placeholder="输入真实姓名" onChange={this.handleChange7} />
</Col>
</Row>
<br/>
<Row type="flex" >

<Col span={11}>
<Input id="idnumber" type="text"style={{color: 'green', fontSize: 'large'}} placeholder="输入身份证号" onChange={this.handleChange8} />
</Col>
</Row>
<br/>
<Button type="primary" onClick={this.handleClick1}>验证信息</Button>

<Row>
<br/>
</Row>
<p style={{color: 'green', fontSize: 'large'}}>请输入新密码</p>
<Row type="flex" >

<Col span={11}>
<Input id="newps" type="text"  disabled={this.state.judge2}style={{color: 'green', fontSize: 'large'}} placeholder="在此输入新密码" onChange={this.handleChange2} />
</Col>
</Row>
<br/>
<Row type="flex" >

<Col span={11}>
<Input id="newps1" type="text" disabled={this.state.judge2}style={{color: 'green', fontSize: 'large'}} placeholder="请再次输入" onChange={this.handleChange3} />
</Col>
</Row>
<br/>
<Button type="primary" disabled={this.state.judge2}onClick={this.handleClick2}>确定更改</Button>
</div>

);
}
}