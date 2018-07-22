/**
 * Created by Admin on 2018/5/25.
 */
import React from 'react';
import {Menu_line} from './Mune_line';
import 'antd/dist/antd.css';
import './logoin.css';
import { Menu,Row,Col,Card ,message} from 'antd';
import fetch2 from './fetch.js';
import {GGG} from './GGG'
import { Router, Route, Link, hashHistory } from 'react-router'
import { Form, Icon, Input, Button, Checkbox,Alert } from 'antd';
import {change_test} from './change'
import {test} from './change'
import {SiderDemo} from './SiderDemo.js'
import {FindPassword} from './FindPassword.js'
const data=[];
var opts = {
    method:"GET"
}


export var user="登陆";
const info = () => {
    message.info("账号或密码错误！");
};
fetch('http://localhost:4000/db',opts).then((response) => {
    return response.json();
})
.then((responseText) => {
    //alert(responseText['user'][0]['address']);
    data.push(responseText['login'][0]['content1']);
	data.push(responseText['login'][0]['content2']);
	data.push(responseText['login'][0]['content3']);
	data.push(responseText['login'][0]['content4']);
	data.push(responseText['login'][0]['content5']);
	data.push(responseText['login'][0]['content6']);
	data.push(responseText['login'][0]['content7']);
	data.push(responseText['login'][0]['content8']);
	data.push(responseText['login'][0]['content9']);
	data.push(responseText['login'][0]['content10']);
	data.push(responseText['login'][0]['content11']);
	data.push(responseText['login'][0]['content12']);
	data.push(responseText['login'][0]['content13']);
	user=data[1];
	//alert(data[0]);
//alert(data[0]['content1']);





})
.catch((error) => {
    alert(error)
});
const FormItem = Form.Item;
export var correct="false";
export var user_name="";
var tips="请登录："
//var tips=data[0];
export var ps="1";
export var identity=["true","true","true","true","true","true","true"];
export default function tryit  (...args)  {
    if((args[0]=="yxt")&&(args[1]==ps)) {
        correct = "true";
        user=args[0];
        identity=["","","","","","",""];
    }
    else if((args[0]=="lc")&&(args[1]==ps)) {
        correct = "true";
        user=args[0];
        identity[0]="";
    }
    else if((args[0]=="czy")&&(args[1]==ps)) {
        correct = "true";
        user=args[0];
        identity[1]="";
    }
    else if((args[0]=="sj")&&(args[1]==ps)) {
        correct = "true";
        user=args[0];
        identity[2]="";
    }
    else if((args[0]=="lss")&&(args[1]==ps)) {
        correct = "true";
        user=args[0];
        identity[3]="";
        identity[5]="";

    }

    else if((args[0]=="admin")&&(args[1]==ps)) {
        correct = "true";
        user=args[0];
        identity[3]="";
        identity[6]="";

    }

    else {
        correct = "false";
        tips=data[2];
    }
    return correct;
};

export  function change_ps  (...args)  {
if(args[0]==args[1])
{ps=args[0];
    return "修改成功";}
else
    return "密码输入不一致";

}

export  function change_correct  ()  {
    if (correct=="true"){correct="false",user=data[1],identity=["true","true","true","true"];}
    else change_test();


}

export class NormalLoginForm extends React.Component {



   state=
    {

        username:"",
        password:"",
        mycorrect:correct,



    }

    handleSubmit = (e) => {
        e.preventDefault();
    this.setState({
        mycorrect:tryit(this.state.username,this.state.password),


    }
    );
  if (tryit(this.state.username,this.state.password)=="false")
  {

    info();
  }
 else
  {  user_name=this.state.username;  }
}









handleChange1 = (e) => {
    this.setState({
        username: e.target.value

    });
}
handleChange2 = (e) => {
    this.setState({
        password: e.target.value

    });
}


render() {

	tips=data[0];
	//user=data[1];
    if(this.state.mycorrect=="true")
    {   change_test();
        return(
        <div>
                <Menu_line/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Row type="flex" justify="center">
            <Col span={8}></Col>

          <Col span={8}><Alert
        message="Success Tips"
        description={data[3]}
        type="success"
        showIcon

        /></Col>
            <Col span={8}></Col>
         </Row>
     <Row type="flex" justify="center">
        <Col span={10}></Col>

         <Col span={4}><Button size="large" type="primary" ><Link to="/userpage/NT">{data[4]}</Link></Button></Col>
        <Col span={8}></Col>
     </Row>






    </div>


        )

    }
    else
    {
    const { getFieldDecorator } = this.props.form;
    return (
            <div class="bc">

            <Menu_line/>

        <Form onSubmit={this.handleSubmit} className="login-form">
<FormItem>
            <p  style={{color: 'red', fontSize: 'large'}}>{tips}</p>
{getFieldDecorator('userName', {
    rules: [{ required: true, message: data[5] }],
})(
<Input id="user" type="text" value={this.state.username} onChange={this.handleChange1} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={data[6]} />
)}
</FormItem>
<FormItem>
{getFieldDecorator('password', {
    rules: [{ required: true, message: data[7] }],
})(
<Input id="pass"type="password"  value={this.state.password} onChange={this.handleChange2} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder={data[8]}/>
)}
</FormItem>
<FormItem>
{getFieldDecorator('remember', {
    valuePropName: 'checked',
    initialValue: true,
})(
    <p>
<Checkbox>{data[9]}</Checkbox>
    </p>
)}
<p>
<a className="login-form-forgot"><Link to="/findpassword"><pre>{data[10]}    </pre></Link></a>
<Button type="primary" htmlType="submit" className="login-form-button"  onClick={this.handleClick}>
      Log in
</Button>
    </p>
    <p>{data[11]}？

<Link to="/register">{data[12]}</Link>
    </p>

</FormItem>

</Form>

    </div>
);
}
}

}


NormalLoginForm = Form.create()(NormalLoginForm);




