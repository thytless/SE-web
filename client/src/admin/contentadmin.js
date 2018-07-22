/**
 * Created by Admin on 2018/5/30.
 */
import 'antd/dist/antd.css';
import { Menu, Icon,Col,Button,Input,Row} from 'antd';
import {Menu_line} from '../Mune_line';
import React from 'react';
const { TextArea } = Input;
export class Test extends React.Component {

    state = {
        a:"在此输入新闻标题",
        value:"在此输入正文",
        b:"在此输入作者名",


    }


    handleChange1 = (e) => {
        this.setState({
            a:"",
            a: e.target.value

        });
    };
    handleChange2 = (e) => {
        this.setState({
            b: e.target.value

        });};
    handleChange3 = (e) => {
        this.setState({
            value: e.target.value

        });};

    render() {
        return (
            <div>
            <Row type="flex" >
        <Col span={1}>
             标题
        </Col>
        <Col span={11}>
            <Input id="bt" type="text" placeholder="输入标题" onChange={this.handleChange1} />
        </Col>
        </Row>
    <Row type="flex">
    <Col span={1}>
    作者
    </Col>
    <Col span={6}>
    <Input id="zz" type="text"  placeholder="输入作者名" onChange={this.handleChange2} />
    </Col>


    </Row>
    <Row>
<Col span={1}>
日期
</Col>
<Col span={4}>
<p>
{new Date().getMonth()+1}月{new Date().getDate()}日
{new Date().toLocaleTimeString()}
</p>
</Col>
</Row>
           < TextArea rows={20}placeholder="正文" onChange={this.handleChange3}/>




</div>

);
}
}
