import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu,message} from 'antd';
import fetch2 from './fetch.js';
import {About, About1 } from './Navi/Navi'
import { Router, Route, Link, hashHistory, } from 'react-router'
import {GGG} from './GGG'
import {Aboutus} from './Aboutus'
import {Menu_line} from "./Mune_line";
import { Form, Input, Tooltip, Icon,Cascader, Modal,Select, Row, Col, Checkbox, Button, AutoComplete,Layout,Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
var contentadmin=false;
var websiteadmin=false;
var reviewadmin1=false;
var reviewadmin2=false;
var con="";
var web="";
var rcon="";
var rweb="";
var agree=false
var e_mail="";
var name="";
var password="";
var id_code="";
var phone_number="";
var nickname="";
var myDate=new Date();

var create_time="";
function create_mytime()
{
    create_time=myDate.getTime();
}
const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];
const info = () => {
    message.info('Choose your rights');
};
const info2 = () => {
    message.info('Please read the agreement');
};

export class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        name:"",
        email:"",
        password:"",
        id_code:"",
        phone_number:"",
        nickname:"",
        visible:false,
        turn:"",
    };

    showModal = () => {
    this.setState({
                      visible: true,
                  });
}

handleOk = (e) => {
    console.log(e);
    this.setState({
        visible: false,
    });
}

handleCancel = (e) => {
    console.log(e);
    this.setState({
        visible: false,
    });
}
    handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
    console.log('Received values of form: ', values);

}

});
}
handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
}
compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
    } else {
        callback();
    }
}
validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
    }
    callback();
}
handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
        autoCompleteResult = [];
    } else {
        autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });


    }

handleclick=()=>
{
    if (contentadmin==false&&
        websiteadmin==false&&
        reviewadmin1==false&&
        reviewadmin2==false)
    {
      info();
    }
    else if (agree==false)
    {
        info2()
    }
    else {
        name = this.state.name;
        id_code = this.state.id_code;
        e_mail = this.state.email;
        phone_number = this.state.phone_number;
        password = this.state.password;
        nickname = this.state.nickname;
        create_mytime();
    }
}
handleChange_email=(e)=>
{
    this.setState({
       email:e.target.value
    });
}
handleChange_password=(e)=>
{
    this.setState({
        password:e.target.value
    })
}
handleChange_number=(e)=>
{
    this.setState({
        phone_number:e.target.value
    })
}
handleChange_idcode=(e)=>
{
    this.setState({
        id_code:e.target.value
    })
}
handleChange_name=(e)=>
{
    this.setState({
        name:e.target.value
    })
}
handleChange_nickname=(e)=>
{
    this.setState({
        nickname:e.target.value
    })
}

handleChange_content=(e) =>{
    console.log(`checked = ${e.target.checked}`);
    if (contentadmin==false) {
        contentadmin = true;
        rcon="true";
    }
    else {
        contentadmin=false;
        rcon="";
    }
    this.setState({
        turn:"1"
    });
}



handleChange_website=(e)=>{
    console.log(`checked = ${e.target.checked}`);

    if (websiteadmin==false) {
        websiteadmin = true;
        rweb="true";
    }
    else {
        websiteadmin=false;
        rweb="";
    }
    this.setState({
        turn:"1"
});
}

handleChange_review1=(e)=>{
    console.log(`checked = ${e.target.checked}`);
    if (reviewadmin1==false) {
        reviewadmin1 = true;
        con="true";
    }
    else {
        reviewadmin1=false;
        con="";
    }
    this.setState({
        turn:"1"
});
}

handleChange_review2=(e)=>{
    console.log(`checked = ${e.target.checked}`);
    if (reviewadmin2==false) {
        reviewadmin2 = true;
        web="true";
    }
    else {
        reviewadmin2=false;
        web="";
    }
    this.setState({
        turn:"1"
});
}

render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
        <Select style={{ width: 70 }}>
<Option value="86">+86</Option>
        <Option value="87">+87</Option>
        </Select>
);

    const websiteOptions = autoCompleteResult.map(website => (
        <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
));

    return (
        <div>
        <Row type="flex" >
        <Col span={4}>
        </Col>
        <Col spam={3}>
        <p>*Right:</p>
        </Col>
        <Col span={2}>
        </Col>
        <Col span={2}>
        <Checkbox onChange={this.handleChange_content} defaultChecked={contentadmin} disabled={con}>内容</Checkbox>
        </Col>

        <Col span={2}>
        <Checkbox onChange={this.handleChange_website}defaultChecked={websiteadmin} disabled={web}>网站</Checkbox>
        </Col>

        <Col span={3}>
        <Checkbox onChange={this.handleChange_review1}defaultChecked={reviewadmin1} disabled={rcon}>审核内容</Checkbox>
        </Col>

        <Col span={3}>
        <Checkbox onChange={this.handleChange_review2}defaultChecked={reviewadmin2} disabled={rweb}>审核网站</Checkbox>
        </Col>
        <Col span={3}>
        </Col>
        </Row>
        <Row type="flex" justify="left">
        <Col span={16}>
        <Form onSubmit={this.handleSubmit}>
<FormItem
    {...formItemLayout}
    label="E-mail"
        >
        {getFieldDecorator('email', {
        rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
        }, {
            required: true, message: 'Please input your E-mail!',
        }],
    })(
    <Input value={this.state.email} onChange={this.handleChange_email} />
)}
</FormItem>
    <FormItem
    {...formItemLayout}
    label="Password"
        >
        {getFieldDecorator('password', {
        rules: [{
            required: true, message: 'Please input your password!',
        }, {
            validator: this.validateToNextPassword,
        }],
    })(
    <Input type="password" />
)}
</FormItem>
    <FormItem
    {...formItemLayout}
    label="Confirm Password"
        >
        {getFieldDecorator('confirm', {
        rules: [{
            required: true, message: 'Please confirm your password!',
        }, {
            validator: this.compareToFirstPassword,
        }],
    })(
    <Input type="password" onBlur={this.handleConfirmBlur}value={this.state.password} onChange={this.handleChange_password}  />
)}
</FormItem>


    <FormItem
    {...formItemLayout}
    label={(
        <span>
        Nickname&nbsp;
<Tooltip title="What do you want others to call you?">
        <Icon type="question-circle-o" />
        </Tooltip>
        </span>
)}
>
    {getFieldDecorator('nickname', {
        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
    })(
    <Input value={this.state.nickname} onChange={this.handleChange_nickname}  />
    )}
</FormItem>

    <FormItem
    {...formItemLayout}
    label="Phone Number"
        >
        {getFieldDecorator('phone', {
        rules: [{ required: true, message: 'Please input your phone number!' }],
    })(
    <Input addonBefore={prefixSelector} style={{ width: '100%' }} value={this.state.phone_number} onChange={this.handleChange_number}  />
)}
</FormItem>
    <FormItem
    {...formItemLayout}
    label="Name"
        >
        {getFieldDecorator('name', {
        rules: [{ required: true, message: 'Please input your name!' }],
    })(

        <Input value={this.state.name} onChange={this.handleChange_name} />

)}
</FormItem>
    <FormItem
    {...formItemLayout}
    label="ID Code"
        >
        {getFieldDecorator('id code', {
        rules: [{ required: true, message: 'Please input ID code!' }],
    })(

        <Input value={this.state.id_code} onChange={this.handleChange_idcode} />

)}
</FormItem>
    <FormItem {...tailFormItemLayout}>
    {getFieldDecorator('agreement', {
        valuePropName: 'checked',
    })(
    <Checkbox onChange={change_agree}>I have read the  <Button type="primary" onClick={this.showModal}>agreement</Button>
    <Modal
        title="Agreement"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
    >
    <p>有问题自己百度,别找管理员</p>
    <p>百度找不到就问google</p>
    <p>上不了谷歌就去翻墙</p>
    </Modal>
    </Checkbox>
    )}
</FormItem>
    <FormItem {...tailFormItemLayout}>
<Button type="primary" htmlType="submit" onClick={this.handleclick}>Register</Button>
        </FormItem>
        </Form>
    </Col>
    </Row>



</div>
);
}
}
const WrappedRegistrationForm = Form.create()(RegistrationForm);
export { WrappedRegistrationForm}

function onChange_content(e) {
    console.log(`checked = ${e.target.checked}`);
    if (contentadmin==false) {
        contentadmin = true;
        rcon="true";
    }
    else {
        contentadmin=false;
        rcon="";
    }
}

function change_agree(e) {
    console.log(`checked = ${e.target.checked}`);
    if (agree==false)
        agree=true;
    else agree=false;
}

function onChange_website(e){
    console.log(`checked = ${e.target.checked}`);

    if (websiteadmin==false) {
        websiteadmin = true;
        rweb="true";
    }
    else {
        websiteadmin=false;
        rweb="";
    }

}

function onChange_review1(e){
    console.log(`checked = ${e.target.checked}`);
    if (reviewadmin1==false) {
        reviewadmin1 = true;
        con="true";
    }
    else {
        reviewadmin1=false;
        con="";
    }
}

function onChange_review2(e){
    console.log(`checked = ${e.target.checked}`);
    if (reviewadmin2==false) {
        reviewadmin2 = true;
        web="true";
    }
    else {
        reviewadmin2=false;
        web="";
    }
}


export class Register extends React.Component {

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

    <span style={{color:'#fff', paddingLeft:'2%', fontSize:'1.4em'}}>REGISTER</span>
    <span style={{color:'#fff', float:'right', paddingRight:'1%'}}>


</span>
    </Header>
    <Content style={{ margin: '0 16px' }}>
<Breadcrumb style={{ margin: '12px 0' }}>

</Breadcrumb>
    <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>

<WrappedRegistrationForm/>

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