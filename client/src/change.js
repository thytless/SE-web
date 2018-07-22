import React from 'react';

import 'antd/dist/antd.css';
import { Menu, Icon,Col,Button} from 'antd';
import fetch2 from './fetch.js';
import {About, About1 } from './Navi/Navi'
import { Router, Route, Link, hashHistory } from 'react-router'
import {GGG} from './GGG'
import {Aboutus} from './Aboutus'
import {NormalLoginForm} from './Logoin'
import {Solve}from'./Solve.js'
import {ServiceCenter}from'./servicecenter.js'
import {SuccessfulCase}from'./successfulcase.js'
import {Row} from "antd/lib/index";
import {Phonetous} from "./Phonetous";

export var test="out";

export  function change_test  ()  {
    if (test=="out"){test="in"}
    else
    {
        test="out";
    }

}
