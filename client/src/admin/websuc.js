import 'antd/dist/antd.css';
import { Menu, Icon,Col,Button,Row,Input,Modal,Upload,message} from 'antd';
import React from 'react';
import { Table, Divider } from 'antd';
import { Router, Route, Link, hashHistory,IndexRoute } from 'react-router'
import reqwest from 'reqwest';
const { TextArea } = Input;
export var read_new_title="";


const columns = [
    {
        title: '案例名称',
        dataIndex: 'name',
        key: 'name',

    },

    {
        title: '日期',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
    <span>
    <Link to="/userpage/SEE" onClick={read_news}>查看</Link>
        <Divider type="vertical" />
        <Link to="/userpage/FIN" onClick={delete_news}>修改</Link>
        <Divider type="vertical" />
        <Link to="/userpage/WEBSUC" onClick={delete_news}>删除</Link>
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
    name: '成功案例1',

    time:'2018-07-14'
}, {
    key: '2',
    name: '成功案例2',
    time:'2018-07-14'

}, {
    key: '3',
    name: '成功案例3',
    time:'2018-07-14'
}];


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
    uploading: false,
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





export class AddSuc extends React.Component{
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
     if(this.state.title==""){
        this.setState({


            tips:"请输入标题"

        });
    }

    else {
        //在此函数中向后台传送新闻数据
        console.log(e);
        this.setState({
            visible: false,


        });
        info();
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
        </Col >

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
        保存案例 < / Button >
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
        提交案例 < / Button >
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
        ><Link to="/userpage/CS">
        提交案例 </Link></ Button >
        </Col>
        <Col span={8}></Col>
        </Row>
        </div>


    );

    }
}
}

export class Table_suc extends React.Component {
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
        <Row>
        <Col span={6}>
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
        </Col>
        <Col span={4}>
        <Button type="primary" ><Link to="/userpage/CS">Back</Link></Button>
        </Col>
        </Row>
    <p></p>
    <Table columns={columns} dataSource={data} />

    </div>
);}
}

export class SeeSuc extends React.Component{
    render(){
        return (
            <div>

            <Row type="flex" justify="center">
            <Col span={8}>
            <h1>Header</h1>
            </Col>
            </Row>
            <Row>
            <Col>
            <p>Time</p>
            </Col>
            </Row>
            <Row>
            <Col>
            <p>Content</p>
            </Col>
            </Row>
            <Row type="flex" justify="center">
            <Col span={4}>
            <Button type="primary"><Link to="/userpage/WEBSUC">Back</Link></Button>
        </Col>
        </Row>


            </div>
        );
    }
}

export class Finally extends React.Component{
    state = {
        title:change_title,
        author:change_author,
        content:change_content,
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

reqwest({
    url: 'http://39.108.123.6:8000/upload',
    method: 'post',
    processData: false,
    data: formData,
    success: () => {
    this.setState({
    fileList: [],
    uploading: false,
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

handleClick3 = (e) => {

    info();
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
    <Col span={5}></Col>
        </Row>
        <Row>
        <Col span={5}></Col>
        <Col span={14}>
        < TextArea rows={20}placeholder="正文"value={this.state.content} onChange={this.handleChange3}/></Col>
    </Row>
    <p></p>
    <Row type="flex">
        <Col span={4}></Col>

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
    <Col span={4}>
        <Button type="primary"><Link to="/userpage/WEBSUC">Back</Link></Button>
    </Col>
    </Row>
    <p></p>
    <p></p>
    <Row type="flex" justify="center">


        </Row>





        </div>

);
}
}