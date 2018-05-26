import React from 'react';

import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import fetch2 from './fetch.js';
import {About, About1 } from './Navi/Navi'
import { Router, Route, Link, hashHistory } from 'react-router'
import {GGG} from './GGG'
import {Aboutus} from './Aboutus'
import {Menu_line} from "./Mune_line";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Top extends React.Component {
    state = {
        nameone:""

    }
    handleClick = (e) => {
        fetch2(this.state.nameone).then(v => {
            this.setState({
                nameone:this.state.nameone+"a"
            });
    });
    }
    render() {
        return (
<div>
<Menu_line/>

<About/>
        <About1/>
{this.props.children};
    </div>

);
}
}
