import React from 'react';
//import temp from '../public/mydoc.docx'
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import fetch2 from './fetch.js';
import {About, About1 } from './Navi/Navi'
import { Router, Route, Link, hashHistory } from 'react-router'
import Aboutus from './Aboutus'
import {Menu_line} from './Mune_line'
import { Input,Button } from 'antd';
import {GGGG}from'./admin/useradmin.js'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export class GGG extends React.Component {

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

        <div
    dangerouslySetInnerHTML={{
        __html: 'asdsadasd<Button>hahhah</Button>asdasd<Button>hsadhjaskdj</Button>'
    }}>
</div>



    </div>

);
}
}




