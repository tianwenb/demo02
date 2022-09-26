import React,{Component} from "react";
import { HashRouter as Router,Route,Switch} from "react-router-dom";
import App from "../pages/App";
import login from "../pages/SignUp/login";

import HeaderNav from "../components/HeaderNav";

export default class index extends Component{
    render() {
        return(
            <Router>
                <HeaderNav/>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/sign" component={login}></Route>
                </Switch>
            </Router>
        )
    }
}