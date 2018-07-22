/**
 * Created by Admin on 2018/5/30.
 */
import 'antd/dist/antd.css';
import {  Menu, Icon,Col,Button,Input,Row,Checkbox} from 'antd';
import { Table,Divider } from 'antd';
import { Upload, Modal,message } from 'antd';
import {Menu_line} from '../Mune_line';
import { Router, Route, Link, hashHistory } from 'react-router'
import React from 'react';
import reqwest from 'reqwest';

var pic_delte=false;
var cel_test=true;
const { TextArea } = Input;
const columns = [
    {
    title: '新闻标题',
    dataIndex: 'name',
    key: 'name',

},
{
        title: '作者',
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
    <Link to="/linkto" onClick={read_news}>查看</Link>
    <Divider type="vertical" />
    <Link to="/userpage/CN" onClick={delete_news}>修改</Link>
    <Divider type="vertical" />
    <Link to="/userpage/DN" onClick={delete_news}>删除</Link>
    <Divider type="vertical" />

    </span>
),
},
{
    title:'状态',
        key:'state',
    dataIndex:'state'
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    state:'1'
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


const columns1 = [
    {
        title: '新闻标题',
        dataIndex: 'name',
        key: 'name',

    },
    {
        title: '作者',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title:'宣传画编号',
        dataIndex:'number',
        key:'number'
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
    <Link to="/linkto" onClick={read_news}>查看</Link>
        <Divider type="vertical" />
        <Link to="/userpage/PIC" onClick={delete_news}>修改</Link>
        <Divider type="vertical" />
        <Link to="/userpage/UP" onClick={delete_news1}>删除</Link>
        <Divider type="vertical" />

        </span>
),
},
{
    title:'状态',
        key:'state',
    dataIndex:'state'
}];
function delete_news1()
{

}
const data1 = [{
    key: '1',
    name: 'John Brown',
    number:"1",
    age: 32,
    address: 'New York No. 1 Lake Park',
    state:'1'
}, {
    key: '2',
    name: 'Jim Green',
    number:"2",
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    number:"3",
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];

export var read_new_title="";
var tips="";
var save_title="";
var save_author="";
var save_content="";
var change_title="";
var change_author="";
var change_content="";
function save_change  (...args)  {
    save_title=args[0];
    save_author= args[1];
    save_content=args[2];
}
function delete_save  ()  {
    save_title="";
    save_author="";
    save_content="";
}
function change  (...args)  {
    change_title=args[0];
    change_author= args[1];
    change_content=args[2];
}
function delete_change  ()  {
    change_title="";
    change_author="";
    change_content="";
}
function delete_news  ()  {

    tips="操作完成，请刷新"
}
function read_news  ()  {


}

function handleChange_pic (){
    if (pic_delte==false)
        pic_delte=true;
    else
        pic_delte=false;
}

const info = () => {
    message.info("提交成功！");
};
const info1 = () => {
    message.info("内容提交成功！插入图片请继操作");
};


class Demo extends React.Component {
    state = {
        fileList: [],
        uploading: false,
    }

    handleUpload = () => {
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('file', file);
    });

    this.setState({
        uploading: true,
    });

    // You can use any AJAX library you like
    reqwest({
        url: 'http://39.108.123.6:8000/upload',
        method: 'post',
        processData: false,
        data: formData,
        success: () => {
        this.setState({
            fileList: [],
            uploading: true,
        });
    message.success('upload successfully.');
},
error: () => {
    this.setState({
        uploading: false,
    });
    message.error('upload failed.');
},
});
}

render() {
    const { uploading } = this.state;
    const props = {
            action: 'http://39.108.123.6:8000/upload',
            onRemove: (file) => {
            this.setState(({ fileList }) => {
            const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    return {
        fileList: newFileList,
    };
});
},
beforeUpload: (file) => {
    this.setState(({ fileList }) => ({
        fileList: [...fileList, file],
}));
return false;
},
fileList: this.state.fileList,
};

return (
    <div>
    <Upload {...props}>
<Button>
<Icon type="upload" /> Select File
</Button>
</Upload>
<Button
className="upload-demo-start"
type="primary"
onClick={this.handleUpload}
disabled={this.state.fileList.length === 0}

>
{uploading ? 'OK' : 'Start Upload' }
</Button>
</div>
);
}
}


export class ChangeNews extends React.Component {

    state = {
        title:change_title,
        author:change_author,
        content:change_content,
        fileList: [],
        uploading: false,
        tips:"",

    }
    handleUpload = () => {
    const { fileList } = this.state;
const formData = new FormData();
fileList.forEach((file) => {
    formData.append('file', file);
});

this.setState({
    uploading: true,
});

reqwest({
    url: 'http://39.108.123.6:8000/upload',
    method: 'post',
    processData: false,
    data: formData,
    success: () => {
    this.setState({
    fileList: [],
    uploading: true,
    dataTyoe:"text",
});
message.success('upload successfully.');
},
error: () => {
    this.setState({
        uploading: false,
    });
    message.error('upload failed.');
},
});
}


handleChange1 = (e) => {
        this.setState({

            title: e.target.value

        });
    };
    handleChange2 = (e) => {
        this.setState({
            author: e.target.value

        });};
    handleChange3 = (e) => {
        this.setState({
            content: e.target.value

        });};

    handleClick1 = (e) => {

        change(this.state.title,this.state.author,this.state.content);
    };
    handleClick2 = (e) => {
        this.setState({
            content: change_content,
            title:change_title,
            author:change_author,

        });};
showModal = () => {
    this.setState({
        visible: true,
    });

}
handleOk = (e) => {
    console.log(e);
    this.setState({
        visible: false,
        judge:"true",

    });
    info1();
}
handleCancel = (e) => {


    console.log(e);
    this.setState({
        visible: false,


    });
    info();

}
handleClick3 = (e) => {
    if(this.state.title==""&&this.state.author=="") {

        this.setState({


            tips:"请输入标题和作者"

        });
    }
    else if(this.state.title==""){
        this.setState({


            tips:"请输入标题"

        });
    }
    else if(this.state.author==""){
        this.setState({


            tips:"请输入作者"

        });
    }
    else {
        //在此函数中向后台传送新闻数据
        this.showModal();
    }
    cel_test=!cel_test;
};

    handleClick4 = (e) => {
        delete_change();
        this.setState({
            content:"",
            title:"",
            author:"",


        });};

    render() {
    const { uploading } = this.state;
    const props = {
        action: 'http://39.108.123.6:8000/upload',
        onRemove: (file) => {
        this.setState(({ fileList }) => {
        const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    return {
        fileList: newFileList,
    };
});
},
    beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
            fileList: [...fileList, file],
    }));
        return false;
    },
    fileList: this.state.fileList,
};

    return (
            <div>
            <Row type="flex" >
        <Col span={5}></Col>
        <Col span={1} style={{color: 'green', fontSize: 'large'}}>
        标题
        </Col>
        <Col span={11}>
        <Input id="bt" type="text" value={this.state.title}placeholder="输入标题" onChange={this.handleChange1} />
</Col>
    <Col span={5}></Col>
</Row>
        <p></p>
<Row type="flex" >
        <Col span={5}></Col>
<Col span={1} style={{color: 'green', fontSize: 'large'}}>
作者
</Col>
<Col span={6}>
<Input id="zz" type="text" value={this.state.author} placeholder="输入作者名" onChange={this.handleChange2} />
</Col>

    <Col span={5}></Col>
</Row>
        <p></p>
<Row type="flex" >
        <Col span={5}></Col>
<Col span={1} style={{color: 'green', fontSize: 'large'}}>
日期
</Col>
<Col span={4}>
<p style={{color: 'green', fontSize: 'large'}}>
{new Date().getMonth()+1}月{new Date().getDate()}日
{new Date().toLocaleTimeString()}
</p>
</Col>
    <Col span={5}>
        <Checkbox onChange={handleChange_pic}>删除图片</Checkbox>
        </Col>
</Row>
        <Row>
        <Col span={5}></Col>
        <Col span={14}>
< TextArea rows={20}placeholder="正文"value={this.state.content} onChange={this.handleChange3}/></Col>
        </Row>
    <p></p>
<Row type="flex">
        <Col span={5}></Col>

<Col span={4}>
<Button type="primary" onClick={this.handleClick1}>保存编辑</Button>
</Col>
<Col span={4}>
<Button type="primary" onClick={this.handleClick2}>查看保存</Button>
</Col>
<Col span={4}>
<Button type="primary" onClick={this.handleClick3}>提交修改</Button>
</Col>
<Col span={4}>
<Button type="primary" onClick={this.handleClick4}>清空</Button>
</Col>
    <
    Modal
    title = "Conditions"
    visible = {this.state.visible
}
    onOk = {this.handleOk
}
    onCancel = {this.handleCancel
}
    okText = "确认"
    cancelText = "取消"
        >
        < p > 是否插入图片
？</
    p >

    < / Modal >
</Row>
<p></p>
        <p></p>
    <Row type="flex" justify="center">
        <Upload {...props}>
<Button disabled={cel_test}>
    <Icon type="upload" /> Select File
    </Button>
    </Upload>
    <Button
    className="upload-demo-start"
    type="primary"
    onClick={this.handleUpload}
    disabled={this.state.fileList.length === 0}

        >
        {uploading ? 'OK' : 'Start Upload' }
        </Button>

        </Row>





</div>

);
}
}




export class DeleteNews extends React.Component{
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
    <p>{read_new_title}</p>
            <Table columns={columns} dataSource={data} />

            </div>
    );}
}


export class PicturesWall extends React.Component {
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
    <p>{read_new_title}</p>
    <Table columns={columns1} dataSource={data1} />

    </div>
);}
}

export class PutNews extends React.Component {

   state = {
        title:"",
        author:"",
        content:"",
        visible: false,
        judge:"false",
        tips:"",


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
            judge:"true",

        });
        info1();
    }
    handleCancel = (e) => {


        console.log(e);
        this.setState({
            visible: false,


        });
        info();

    }

    handleChange1 = (e) => {
    this.setState({

                      title: e.target.value

});
};
handleChange2 = (e) => {
    this.setState({
        author: e.target.value

    });};
handleChange3 = (e) => {
    this.setState({
        content: e.target.value

    });};

handleClick1 = (e) => {

    save_change(this.state.title,this.state.author,this.state.content);
};
handleClick2 = (e) => {
    this.setState({
        content: save_content,
        title:save_title,
        author:save_author,

    });};

handleClick3 = (e) => {
        if(this.state.title==""&&this.state.author=="") {

            this.setState({


                tips:"请输入标题和作者"

            });
        }
        else if(this.state.title==""){
            this.setState({


                tips:"请输入标题"

            });
        }
        else if(this.state.author==""){
            this.setState({


                tips:"请输入作者"

            });
        }
        else {
            //在此函数中向后台传送新闻数据
            this.showModal();
        }
};

handleClick4 = (e) => {
    delete_save();
    this.setState({
        content:"",
        title:"",
        author:"",


    });};

    handleClick5 = (e) =>
    {

        this.setState({

            judge: "false"
        });
    };
render()
    {
        if (this.state.judge == "false") {
            return (
                < div >
                <Row type="flex" justify="center" text-align="center">
            <Col span={8}> </Col>
            <Col span={8}>
            <p style={{color: 'red', fontSize: 'large'}}>{this.state.tips}</p>
    </Col>
    <Col span={8}> </Col>
    </Row>
                < Row
            type = "flex" >
            < Col
            span = {5} > < / Col >
            < Col
            span = {1}
            style = {
            {
                color: 'green', fontSize
            :
                'large'
            }
        }
    >
        标题
        < / Col >
        < Col
        span = {11} >
        < Input
        id = "bt"
        type = "text"
        value = {this.state.title
    }
    placeholder = "输入标题"
    onChange = {this.handleChange1
}
/>
</
Col >
< Col
span = {5} > < / Col >
< / Row >
< p > < / p >
< Row
type = "flex" >
< Col
span = {5} > < / Col >
< Col
span = {1}
style = {
{
    color: 'green', fontSize
:
    'large'
}
}>
作者
< / Col >
< Col
span = {6} >
< Input
id = "zz"
type = "text"
value = {this.state.author
}
placeholder = "输入作者名"
onChange = {this.handleChange2
} />
</
Col >
< Col
span = {5} > < / Col >

< / Row >
< p > < / p >
< Row >
< Col
span = {5} > < / Col >
< Col
span = {1}
style = {
{
    color: 'green', fontSize
:
    'large'
}
}>
日期
< / Col >
< Col
span = {4} >
< p
style = {
{
    color: 'red', fontSize
:
    'large'
}
}>
{
    new Date().getMonth() + 1
}
月
{
    new Date().getDate()
}
日
{
    new Date().toLocaleTimeString()
}
</
p >
< / Col >
< Col
span = {5} > < / Col >
< / Row >
< Row >
< Col
span = {5} > < / Col >
< Col
span = {14} >
< TextArea
rows = {20}
placeholder = "正文"
value = {this.state.content
}
onChange = {this.handleChange3
}
/></
Col >
< / Row >
< p > < / p >

< Row
type = "flex" >
< Col
span = {5} > < / Col >
< Col
span = {4} >
< Button
type = "primary"
onClick = {this.handleClick1
}>
保存新闻 < / Button >
< / Col >
< Col
span = {4} >
< Button
type = "primary"
onClick = {this.handleClick2
}>
查看保存 < / Button >
< / Col >
< Col
span = {4} >
< Button
type = "primary"
onClick = {this.handleClick3
}>
提交新闻 < / Button >
< / Col >
< Col
span = {4} >
< Button
type = "primary"
onClick = {this.handleClick4
}>
清空内容 < / Button >
< / Col >

< / Row >



<
Modal
title = "Conditions"
visible = {this.state.visible
}
onOk = {this.handleOk
}
onCancel = {this.handleCancel
}
okText = "确认"
cancelText = "取消"
>
< p > 是否插入图片
？</
p >

< / Modal >


< / div >

)
;
}
else
{ return (

<div>
<p></p><p></p><p></p><p></p>
    <Row type="flex" justify="center" text-align="center">
<Col span={8}></Col>
<Col span={8}>
<Demo/>
    </Col>
<Col span={8}></Col>
    </Row>
    <p></p>
<Row type="flex" justify="center" text-align="center">
<Col span={8}></Col>
<Col span={8}>
< Button
    type = "primary"
    onClick = {this.handleClick5
}>
返回 < / Button >
</Col>
<Col span={8}></Col>
    </Row>
</div>


);

}
}
}
export class Show_pic extends React.Component{
    state = {
        title:change_title,
        author:change_author,
        content:change_content,
        fileList: [],
        uploading: false,
        tips:"",

    }
    handleUpload = () => {
    const { fileList } = this.state;
const formData = new FormData();
fileList.forEach((file) => {
    formData.append('file', file);
});

this.setState({
    uploading: true,
});

reqwest({
    url: 'http://39.108.123.6:8000/upload',
    method: 'post',
    processData: false,
    data: formData,
    success: () => {
    this.setState({
    fileList: [],
    uploading: true,
    dataTyoe:"text",
});
message.success('upload successfully.');
},
error: () => {
    this.setState({
        uploading: false,
    });
    message.error('upload failed.');
},
});
}


handleChange1 = (e) => {
    this.setState({

        title: e.target.value

    });
};
handleChange2 = (e) => {
    this.setState({
        author: e.target.value

    });};
handleChange3 = (e) => {
    this.setState({
        content: e.target.value

    });};

handleClick1 = (e) => {

    change(this.state.title,this.state.author,this.state.content);
};
handleClick2 = (e) => {
    this.setState({
        content: change_content,
        title:change_title,
        author:change_author,

    });};
showModal = () => {
    this.setState({
        visible: true,
    });

}
handleOk = (e) => {
    console.log(e);
    this.setState({
        visible: false,
        judge:"true",

    });
    info1();
}
handleCancel = (e) => {


    console.log(e);
    this.setState({
        visible: false,


    });
    info();

}
handleClick3 = (e) => {
    if(this.state.title==""&&this.state.author=="") {

        this.setState({


            tips:"请输入标题和作者"

        });
    }
    else if(this.state.title==""){
        this.setState({


            tips:"请输入标题"

        });
    }
    else if(this.state.author==""){
        this.setState({


            tips:"请输入作者"

        });
    }
    else {
        //在此函数中向后台传送新闻数据
        this.showModal();
    }
    cel_test=!cel_test;
};

handleClick4 = (e) => {
    delete_change();
    this.setState({
        content:"",
        title:"",
        author:"",


    });};

render() {
    const { uploading } = this.state;
    const props = {
        action: 'http://39.108.123.6:8000/upload',
        onRemove: (file) => {
        this.setState(({ fileList }) => {
        const index = fileList.indexOf(file);
    const newFileList = fileList.slice();
    newFileList.splice(index, 1);
    return {
        fileList: newFileList,
    };
});
},
    beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
            fileList: [...fileList, file],
    }));
        return false;
    },
    fileList: this.state.fileList,
};

    return (
        <div>
        <Row type="flex" >
        <Col span={5}></Col>
        <Col span={1} style={{color: 'green', fontSize: 'large'}}>
    标题
    </Col>
    <Col span={11}>
        <Input id="bt" type="text" value={this.state.title}placeholder="输入标题" onChange={this.handleChange1} />
    </Col>
    <Col span={5}></Col>
        </Row>
        <p></p>
        <Row type="flex" >
        <Col span={5}></Col>
        <Col span={1} style={{color: 'green', fontSize: 'large'}}>
    作者
    </Col>
    <Col span={6}>
        <Input id="zz" type="text" value={this.state.author} placeholder="输入作者名" onChange={this.handleChange2} />
    </Col>

    <Col span={5}></Col>
        </Row>
        <p></p>
        <Row type="flex" >
        <Col span={5}></Col>
        <Col span={1} style={{color: 'green', fontSize: 'large'}}>
    日期
    </Col>
    <Col span={4}>
        <p style={{color: 'green', fontSize: 'large'}}>
    {new Date().getMonth()+1}月{new Date().getDate()}日
    {new Date().toLocaleTimeString()}
</p>
    </Col>
    <Col span={5}>

        </Col>
        </Row>
        <Row>
        <Col span={5}></Col>
        <Col span={14}>
        < TextArea rows={20}placeholder="正文"value={this.state.content} onChange={this.handleChange3}/></Col>
    </Row>
    <p></p>
    <Row type="flex">
        <Col span={5}></Col>

        <Col span={4}>
        <Button type="primary" onClick={this.handleClick1}>保存编辑</Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick2}>查看保存</Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick3}>提交修改</Button>
    </Col>
    <Col span={4}>
        <Button type="primary" onClick={this.handleClick4}>清空</Button>
    </Col>
    <
    Modal
    title = "Conditions"
    visible = {this.state.visible
}
    onOk = {this.handleOk
}
    onCancel = {this.handleCancel
}
    okText = "确认"
    cancelText = "取消"
        >
        < p > 是否插入图片
？</
    p >

    < / Modal >
    </Row>
    <p></p>
    <p></p>
    <Row type="flex" justify="center">
        <Upload {...props}>
<Button disabled={cel_test}>
        <Icon type="upload" /> Select File
    </Button>
    </Upload>
    <Button
    className="upload-demo-start"
    type="primary"
    onClick={this.handleUpload}
    disabled={this.state.fileList.length === 0}

>
    {uploading ? 'OK' : 'Start Upload' }
</Button>

    </Row>





    </div>

);
}
}
