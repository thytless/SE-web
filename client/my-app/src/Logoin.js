/**
 * Created by Admin on 2018/5/25.
 */
import React from 'react';
import {Menu_line} from './Mune_line';
import 'antd/dist/antd.css';
import './logoin.css';
import { Menu,Row,Col,Card } from 'antd';
import fetch2 from './fetch.js';
import {GGG} from './GGG'
import { Router, Route, Link, hashHistory } from 'react-router'
import { Form, Icon, Input, Button, Checkbox,Alert } from 'antd';
import {change_test} from './change'
import {test} from './change'


const FormItem = Form.Item;
var correct="false";

export default function tryit  (...args)  {
    if((args[0]=="admin")&&(args[1]=="123456"))

        correct="true";
    else
        correct="false";
    return correct;
};



export class NormalLoginForm extends React.Component {
   state=
    {

        username:"",
        password:"",
        mycorrect:correct


    }

    handleSubmit = (e) => {
        e.preventDefault();
    this.setState({
        mycorrect:tryit(this.state.username,this.state.password)
    });




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

    if(this.state.mycorrect=="true")
    {   change_test();
        return(
        <div>

            <Menu_line/>

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
{getFieldDecorator('userName', {
    rules: [{ required: true, message: '请输入用户名!' }],
})(
<Input id="user" type="text" value={this.state.username} onChange={this.handleChange1} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
)}
</FormItem>
<FormItem>
{getFieldDecorator('password', {
    rules: [{ required: true, message: '请输入密码!' }],
})(
<Input id="pass"type="text"  value={this.state.password} onChange={this.handleChange2} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="密码"/>
)}
</FormItem>
<FormItem>
{getFieldDecorator('remember', {
    valuePropName: 'checked',
    initialValue: true,
})(
    <p>
<Checkbox>记住我</Checkbox>
    </p>
)}
<p>
<a className="login-form-forgot" href=""><pre>忘记密码    </pre></a>
<Button type="primary" htmlType="submit" className="login-form-button"  onClick={this.handleClick}>
      Log in
</Button>
    </p>
    <p>没有账户？

 <a href="">立即注册！</a>
    </p>

</FormItem>

</Form>

    </div>
);
}
}

}


NormalLoginForm = Form.create()(NormalLoginForm);




