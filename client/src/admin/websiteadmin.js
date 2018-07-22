/**
 * Created by Admin on 2018/6/13.
 */
import 'antd/dist/antd.css';
import { Menu, Icon,Col,Button,Row,Input,Modal,Upload,message} from 'antd';
import React from 'react';
import { Table, Divider } from 'antd';
import { Router, Route, Link, hashHistory,IndexRoute } from 'react-router'
var x="uad weaf safdasf";

const columns = [
    {
        title: '成功案例分类',
        dataIndex: 'name',
        key: 'name',
        width:650,
    },

    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
    <Button><Link to="/userpage/WEBSUC">进入该分类</Link></Button>
    <Divider type="vertical" />
    <Button><Link to="userpage/ADDSUC">新增内容</Link></Button>

        <Divider type="vertical" />
        <Button><Link to="/userpage/NAME">修改分类名字</Link></Button>
    <Divider type="vertical" />
    </span>
),
}];

const data = [{
    key: '1',

        name:"电子政务"
}, {
    key: '2',
    name:"互联网+政务"
}, {
    key: '3',

    name:"政府网站"
}, {
    key: '4',

    name:"大数据"
}, {
    key: '5',

    name:"信息安全"
}, {
    key: '6',

    name:"数据中心"
}, {
    key: '7',

    name:"云计算"
}, {
    key: '8',

    name:"卫生医疗"
}, {
    key: '9',

    name:"智慧城市"
}, {
    key: '10',

    name:"应急管理"
}, {
    key: '11',

    name:"自主可控"
}, {
    key: '12',

    name:"移动应用"
}];

const columns1= [
    {
        title: '分类',
        dataIndex: 'name',
        key: 'name',

    },


    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
    <Button><Link to="/userpage/CSOL">修改解决方案</Link></Button>
        <Divider type="vertical" />
        <Button><Link to="/userpage/CSOLINF">修改简介</Link></Button>

        <Divider type="vertical" />
        <Button><Link to="/userpage/NAME1">修改分类名字</Link></Button>

    <Divider type="vertical" />
        </span>
),
},
{
    title:'状态',
        key:'state',
    dataIndex:'state'
}];

const data1 = [{
    key: '1',
    name:"电子政务系统测评"

}, {
    key: '2',

    name:"政务系统测评"
}, {
    key: '3',

    name:"政务app测评"
}, {
    key: '4',

    name:"系统安全测评"
}, {
    key: '5',

    name:"项目绩效测评"
}, {
    key: '6',

    name:"安全风险评估"
}, {
    key: '7',
    name:"数据中心评测"

}
];

const columns2 = [
    {
        title: '资质证书名称',
        dataIndex: 'name',
        key: 'name',

    },

    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
    <Button onClick={delete_req}>删除该证书</Button>
        <Divider type="vertical" />


        </span>
),
}];
function delete_req(){

}
const data2 = [{
    key: '1',

    name:"证书A"
}, {
    key: '2',

    name:"证书B"
}, {
    key: '3',

   name:"证书C"
}];

export class ChangeSucesscase extends React.Component{
    render() {
        return (
                <div>

            <Table columns={columns} dataSource={data} />
        </div>
);}
}

export class ChangeAboutus extends React.Component{
    render() {
        return (
            <div>

            <Row type="flex" justify="center">
            <Col span={3}>
            <Button type="primary" size="large"><Link to="/userpage/CINF">修改简介</Link></Button>
            </Col>
            </Row>
            <p></p>
            <p></p>
            <p></p>
            <Row type="flex" justify="center">
            <Col span={3}>
            <Button type="primary" size="large"><Link to="/userpage/CHELP">修改合作伙伴</Link></Button>
            </Col>
            </Row>
            <p></p>
            <p></p>
            <p></p>
            <Row type="flex" justify="center">
            <Col span={3}>
            <Button type="primary" size="large"><Link to="/userpage/CRE">修改资质证书</Link></Button>
            </Col>
            </Row>
            <p></p>
            <p></p>
            <p></p>
            <Row type="flex" justify="center">
            <Col span={3}>
            <Button type="primary" size="large"><Link to="/userpage/CEXP">修改专家团</Link></Button>
            </Col>
            </Row>
            <p></p>
            <p></p>
            <p></p>
            <Row type="flex" justify="center">
            <Col span={3}>
            <Button type="primary" size="large"><Link to="/userpage/CIN">修改获得成就</Link></Button>
            </Col>
            </Row>
            </div>
);}
}

export class ChangeSolvecase extends React.Component{
    render() {
        return (
            <div>
            <Table columns={columns1} dataSource={data1} />

    </div>
);}
}

export class ChangeService extends React.Component{
    render() {
        return (
            <div>
            <div>

            <Row type="flex" justify="center">
            <Col span={3}>
        <Button type="primary" size="large"><Link to="/userpage/CSER">修改服务流程文字</Link></Button>
        </Col>
        <Col span={3}>
            <Button type="primary" size="large"><Link to="/userpage/CREADD">修改服务流程图片</Link></Button>
        </Col>
            </Row>
            <p></p>
            <p></p>
            <p></p>
            <Row type="flex" justify="center">
            <Col span={3}>
            <Button type="primary" size="large"><Link to="/userpage/CHSER">修改人工服务</Link></Button>
            </Col>
            </Row>
            <p></p>
            <p></p>
            <p></p>
            <Row type="flex" justify="center">
            <Col span={3}>
            <Button type="primary" size="large"><Link to="/userpage/CQUE">修改问题反馈</Link></Button>
            </Col>
            </Row>
            <p></p>
            <p></p>
            <p></p>

            </div>

        </div>
);}
}

export class ChangeConnectus extends React.Component{

            state={
                content:"cc"
            };
        handleChange3=(e)=>{
            this.setState({
                content:e.target.value
            });
            text_content=this.state.content;
        };
        handleClick=(e)=>{

        }
        render(){
            return (
                <div>
                <Row type="flex" justify="center">
                <Col span={16}>
                < TextArea rows={20}placeholder={this.state.content} value={this.state.content} onChange={this.handleChange3}/>
            </Col>
            </Row>
            <p></p>
            <Row type="flex" justify="center">


            <Col span={4}>
                <Button type="primary" onClick={this.handleClick}>Accept</Button>
            </Col>
            </Row>
            </div>
        );
        }

}
var text_content="";
const { TextArea } = Input;

export class Change_inf extends React.Component{
    state={
        content:"cinf"
    };
    handleChange3=(e)=>{
        this.setState({
            content:e.target.value
    });
        text_content=this.state.content;
};
    handleClick=(e)=>{

}
    render(){
        return (
            <div>
            <Row type="flex" justify="center">
            <Col span={16}>
            < TextArea rows={20}placeholder={this.state.content} value={this.state.content} onChange={this.handleChange3}/>
            </Col>
            </Row>
        <p></p>
            <Row type="flex" justify="center">
            <Col span={4}>
            <Button type="primary"><Link to="/userpage/CA">Back</Link></Button>
            </Col>
            <Col span={4}>
            <Button type="primary" onClick={this.handleClick}>Accept</Button>
            </Col>
            </Row>
</div>
        );
    }
}

export class Change_help extends React.Component{
    state={
        content:"chelp"
    };
    handleChange3=(e)=>{
    this.setState({
                      content:e.target.value
});
text_content=this.state.content;
};
handleClick=(e)=>{

}
render(){
    return (
        <div>
        <Row type="flex" justify="center">
        <Col span={16}>
        < TextArea rows={20}placeholder={this.state.content} value={this.state.content} onChange={this.handleChange3}/>
    </Col>
    </Row>
    <p></p>
    <Row type="flex" justify="center">
        <Col span={4}>
        <Button type="primary"><Link to="/userpage/CA">Back</Link></Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick}>Accept</Button>
    </Col>
    </Row>
    </div>
);
}
}

export class Change_exp extends React.Component{
    state={
        content:"cexp"
    };
    handleChange3=(e)=>{
    this.setState({
                      content:e.target.value
});
text_content=this.state.content;
};
handleClick=(e)=>{

}
render(){
    return (
        <div>
        <Row type="flex" justify="center">
        <Col span={16}>
        < TextArea rows={20}placeholder={this.state.content} value={this.state.content} onChange={this.handleChange3}/>
    </Col>
    </Row>
    <p></p>
    <Row type="flex" justify="center">
        <Col span={4}>
        <Button type="primary"><Link to="/userpage/CA">Back</Link></Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick}>Accept</Button>
    </Col>
    </Row>
    </div>
);
}
}

export class Change_in extends React.Component{
    state={
        content:"cin"
    };
    handleChange3=(e)=>{
    this.setState({
                      content:e.target.value
});
text_content=this.state.content;
};
handleClick=(e)=>{

}
render(){
    return (
        <div>
        <Row type="flex" justify="center">
        <Col span={16}>
        < TextArea rows={20}placeholder={this.state.content} value={this.state.content} onChange={this.handleChange3}/>
    </Col>
    </Row>
    <p></p>
    <Row type="flex" justify="center">
        <Col span={4}>
        <Button type="primary"><Link to="/userpage/CA">Back</Link></Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick}>Accept</Button>
    </Col>
    </Row>
    </div>
);
}
}

export class Change_re extends React.Component{

    state = {

        visible: false

    }
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


render() {

    return (

        <div>
        <Row>
        <Col span={4}>
        <p>
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
        </Col>
        <Col span={4}>
        <Button type="primary"><Link to="/userpage/CREADD">Add</Link></Button>
        </Col>
        </Row>
    <p></p>
        <Row>
        <Col>
    <Table columns={columns2} dataSource={data2} />
        </Col>
        </Row>

    </div>
);}
}

export class Change_sol extends React.Component{
    state={
        content:"csol"
    };
    handleChange3=(e)=>{
    this.setState({
                      content:e.target.value
});
text_content=this.state.content;
};
handleClick=(e)=>{

}
render(){
    return (
        <div>
        <Row type="flex" justify="center">
        <Col span={16}>
        < TextArea rows={20}placeholder={this.state.content} value={this.state.content} onChange={this.handleChange3}/>
    </Col>
    </Row>
    <p></p>
    <Row type="flex" justify="center">
        <Col span={4}>
        <Button type="primary"><Link to="/userpage/CSolve">Back</Link></Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick}>Accept</Button>
    </Col>
    </Row>
    </div>
);
}
}

export class Change_solinf extends React.Component{
    state={
        content:"csolinf"
    };
    handleChange3=(e)=>{
    this.setState({
                      content:e.target.value
});
text_content=this.state.content;
};
handleClick=(e)=>{

}
render(){
    return (
        <div>
        <Row type="flex" justify="center">
        <Col span={16}>
        < TextArea rows={20}placeholder={this.state.content} value={this.state.content} onChange={this.handleChange3}/>
    </Col>
    </Row>
    <p></p>
    <Row type="flex" justify="center">
        <Col span={4}>
        <Button type="primary"><Link to="/userpage/CSolve">Back</Link></Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick}>Accept</Button>
    </Col>
    </Row>
    </div>
);
}
}

export class Change_service extends React.Component{
    state={
        content:"cser"
    };
    handleChange3=(e)=>{
    this.setState({
                      content:e.target.value
});
text_content=this.state.content;
};
handleClick=(e)=>{

}
render(){
    return (
        <div>
        <Row type="flex" justify="center">
        <Col span={16}>
        < TextArea rows={20}placeholder={this.state.content} value={this.state.content} onChange={this.handleChange3}/>
    </Col>
    </Row>
    <p></p>
    <Row type="flex" justify="center">
        <Col span={4}>
        <Button type="primary"><Link to="/userpage/CService">Back</Link></Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick}>Accept</Button>
    </Col>
    </Row>
    </div>
);
}
}

export class Change_humservice extends React.Component{
    state={
        content:"chser"
    };
    handleChange3=(e)=>{
    this.setState({
                      content:e.target.value
});
text_content=this.state.content;
};
handleClick=(e)=>{

}
render(){
    return (
        <div>
        <Row type="flex" justify="center">
        <Col span={16}>
        < TextArea rows={20}placeholder={this.state.content} value={this.state.content} onChange={this.handleChange3}/>
    </Col>
    </Row>
    <p></p>
    <Row type="flex" justify="center">
        <Col span={4}>
        <Button type="primary"><Link to="/userpage/CService">Back</Link></Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick}>Accept</Button>
    </Col>
    </Row>
    </div>
);
}
}

export class Change_qusetion extends React.Component{
    state={
        content:"cques"
    };
    handleChange3=(e)=>{
    this.setState({
                      content:e.target.value
});
text_content=this.state.content;
};
handleClick=(e)=>{

}
render(){
    return (
        <div>
        <Row type="flex" justify="center">
        <Col span={16}>
        < TextArea rows={20}placeholder={this.state.content} value={this.state.content} onChange={this.handleChange3}/>
    </Col>
    </Row>
    <p></p>
    <Row type="flex" justify="center">
        <Col span={4}>
        <Button type="primary"><Link to="/userpage/CService">Back</Link></Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick}>Accept</Button>
    </Col>
    </Row>
    </div>
);
}
}

export class Picturesload extends React.Component {
    state = {

        previewVisible: false,
        previewImage: '',
        fileList: [],
    };

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {

    this.setState({
                      previewImage: file.url || file.thumbUrl,
    previewVisible: true,

});
}

handleChange = ({ fileList }) => {

    this.setState({
        fileList

    });

}
render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
        <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
        </div>
);
    return (
        <div className="clearfix">
        <Upload
    action="http://39.108.123.6:8000/upload"
    listType="picture-card"
    fileList={fileList}
    onPreview={this.handlePreview}
    onChange={this.handleChange}
>
    {fileList.length >= 1 ? null : uploadButton}
</Upload>
    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
<img alt="picture" style={{ width: '100%' }} src={previewImage} />
    </Modal>

    <p>{this.state.test}</p>
    </div>
);
}
}

export class name_change1 extends React.Component{
    state={
        vaule:"",
    }
    componentWillMount(){
        this.setState({
            value:"xxxxx"
        });
    }
    render(){
        return (
            <div>
            <Row type="flex" justify="center">
            <Col span={8}>
            <p>输入新名字</p>
            <Input placeholder={this.state.value} />
        </Col>
        </Row>
        <p></p>
        <Row type="flex" justify="center">
            <Col span={4}>
            <Button>Accept</Button>
            </Col>
            <Col span={4}>
            <Button><Link to="/userpage/CS">Back</Link></Button>
        </Col>
        </Row>
        </div>
    );
    }
}

export class name_change2 extends React.Component{
    state={
        vaule:"",
    }
    componentWillMount(){
        this.setState({
            value:"xxxxx"
        });
    }
    render(){
        return (
            <div>
            <Row type="flex" justify="center">
            <Col span={8}>
            <p>输入新名字</p>
            <Input placeholder={this.state.value} />
        </Col>
        </Row>
        <p></p>
        <Row type="flex" justify="center">
            <Col span={4}>
            <Button>Accept</Button>
            </Col>
            <Col span={4}>
            <Button><Link to="/userpage/CSolve">Back</Link></Button>
        </Col>
        </Row>
        </div>
    );
    }
}

