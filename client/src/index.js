/**
 * Created by Admin on 2018/5/22.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {About,About1 } from './Navi/Navi'
import {GGG}from './GGG'
import { Router, Route, Link, hashHistory,IndexRoute } from 'react-router'
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Top from './top.js';
import fetch2 from './fetch.js'
import {Aboutus,Mylink} from './Aboutus'
import {NormalLoginForm} from './Logoin.js'
import {Solve}from'./Solve.js'
import {ServiceCenter}from'./servicecenter.js'
import {SuccessfulCase}from'./successfulcase.js'
import {Phonetous} from "./Phonetous";
import {GGGG}from'./admin/useradmin.js'
import {PutNews,DeleteNews,PicturesWall,ChangeNews,Show_pic}from'./admin/newsadmin.js'
import {ChangeSucesscase,ChangeSolvecase,ChangeAboutus,ChangeService,name_change1,ChangeConnectus,name_change2,Change_inf,Picturesload,Change_help,Change_exp,Change_in,Change_re,Change_sol,Change_qusetion,Change_solinf,Change_service,Change_humservice}from'./admin/websiteadmin.js'
import {SiderDemo}from'./SiderDemo.js'
import {Linkto} from './Linkto'

import {FindPassword,Email,Phone,Id} from './FindPassword.js'
import {RegistrationForm,WrappedRegistrationForm,Register } from "./Register";
import {LinkTable,LinkTableBrowse} from './LinkTable'
import {Changepassword,Changefile} from './admin/usercenter.js'
import {AddSuc,Table_suc,SeeSuc,Finally} from "./admin/websuc";
import {Notice,Viewnotice} from './admin/notice.js'
import {ReviewContent,ReviewWeb,Content,Website} from "./admin/reviewadmin";
import {Browse,Give,Review,Minus,RightChange} from "./admin/superadmin";
import {Certification} from "./Aboutus";
import {Newsone} from "./newone.js";
import {Newsone2} from "./newone2.js";
import {Newsone3} from "./newone3.js";
import {Newsone4} from "./newone4.js";
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
        		<div>
                <p>see it?</p>
            <h1>{this.state.counter}</h1>
    </div>
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
    <Route path="GGG" component={GGG}><Route path="yhgly" component={GGGG}/></Route>
<Route path="/" component={Top}></Route>
<Route path="homepage" component={Top}></Route>
<Route path="about" component={About} ></Route>
<Route path="newsone" component={Newsone} ></Route>
<Route path="newstwo" component={Newsone2} ></Route>
<Route path="newsthree" component={Newsone3} ></Route>
<Route path="newsfour" component={Newsone4} ></Route>
<Route path="aboutus" component={Aboutus}>
    <Route path="mylink" component={Mylink}/>
<Route path="certification" component={Certification}/>
    </Route>
<Route path="logoin" component={NormalLoginForm}>


</Route>

<Route path="userpage" component={SiderDemo}>
        <Route path="yhgly" component={GGGG}/>
        <Route path="PN" component={PutNews}/>
        <Route path="DN" component={DeleteNews}/>
        <Route path="UP" component={PicturesWall}/>
        <Route path="CS" component={ChangeSucesscase}/>
        <Route path="CC" component={ChangeConnectus}/>
        <Route path="CService" component={ChangeService}/>
        <Route path="CA" component={ChangeAboutus}/>
        <Route path="CSolve" component={ChangeSolvecase}/>
        <Route path="CN" component={ChangeNews}/>
        <Route path="RC" component={ReviewContent}/>
        <Route path="RW" component={ReviewWeb}/>
        <Route path="CV" component={Content}/>
        <Route path="CP" component={Changepassword}/>
        <Route path="NT" component={Notice}/>
        <Route path="GV" component={Give}/>
        <Route path="RE" component={Review}/>
        <Route path="MI" component={Minus}/>
        <Route path="BR" component={Browse}/>
        <Route path="CF" component={Changefile}/>
        <Route path="RI" component={RightChange}/>
        <Route path="CINF" component={Change_inf}/>
        <Route path="CHELP" component={Change_help}/>
        <Route path="CEXP" component={Change_exp}/>
        <Route path="CIN" component={Change_in}/>
        <Route path="CRE" component={Change_re}/>
        <Route path="CSOL" component={Change_sol}/>
        <Route path="CSOLINF" component={Change_solinf}/>
        <Route path="CSER" component={Change_service}/>
        <Route path="CHSER" component={Change_humservice}/>
        <Route path="CQUE" component={Change_qusetion}/>
        <Route path="CREADD" component={Picturesload}/>
        <Route path="ADDSUC" component={AddSuc}/>
        <Route path="WEBSUC" component={Table_suc}/>
        <Route path="SEE" component={SeeSuc}/>
        <Route path="FIN" component={Finally}/>
        <Route path="NAME" component={name_change1}/>
        <Route path="NAME1" component={name_change2}/>
        <Route path="VI" component={Viewnotice}/>
        <Route path="PIC" component={Show_pic}/>
<Route path="REWEB" component={Website}/>
</Route>



<Route path="servicecenter" component={ServiceCenter}></Route>
<Route path="successfulcase" component={SuccessfulCase}>
    <Route path="linktable" component={LinkTable}/>
    <Route path="linkbro" component={LinkTableBrowse}/>
    </Route>
    <Route path="phonetous" component={Phonetous}></Route>
<Route path="solve" component={Solve}></Route>
    <Route path="linkto" component={Linkto}></Route>
<Route path="findpassword" component={FindPassword}>
    <Route path="id" component={Id}/>

<Route path="email" component={Email}/>
<Route path="phone" component={Phone}/>
</Route>
<Route path="register" component={Register }></Route>
</Router>)


ReactDOM.render(<What />, document.getElementById('root'));
registerServiceWorker();
