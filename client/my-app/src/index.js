/**
 * Created by Admin on 2018/5/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {About,About1 } from './Navi/Navi'
import {GGG}from './GGG'
import { Router, Route, Link, hashHistory } from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Top from './top.js';
import fetch2 from './fetch.js'
import Aboutus from './Aboutus'
import {NormalLoginForm} from './Logoin.js'
import {Solve}from'./Solve.js'
import {ServiceCenter}from'./servicecenter.js'
import {SuccessfulCase}from'./successfulcase.js'
import {Phonetous} from "./Phonetous";

class Counter extends React.Component {
    state = {
        counter: 1
    };

    componentDidMount() {
        fetch2(this.state.counter).then(v => {
            this.setState({
                counter: this.state.counter + 1
            });
        });
    }

    render() {
        return (
            <h1>{this.state.counter}</h1>
        )
    }
}

export const App = (props) => (

<div>
<h1>App</h1>
<ul>
<li><Link to="/about">About</Link></li>
<li><Link to="/inbox">Inbox</Link></li>
<li><Link to="/counter">Counter</Link></li>
</ul>
{props.children}
</div>
)

export const What = (props) =>
(<Router history={hashHistory}>
    <Route path="GGG" component={GGG}></Route>
    <Route path="/" component={Top}> </Route>
<Route path="homepage" component={Top}></Route>
<Route path="about" component={About} ></Route>
<Route path="aboutus" component={Aboutus}></Route>
<Route path="logoin" component={NormalLoginForm}></Route>
<Route path="servicecenter" component={ServiceCenter}></Route>
<Route path="successfulcase" component={SuccessfulCase}></Route>
    <Route path="phonetous" component={Phonetous}></Route>
<Route path="solve" component={Solve}></Route>

</Router>)


ReactDOM.render(<What />, document.getElementById('root'));
registerServiceWorker();
