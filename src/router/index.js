import React,{Component} from "react";
import { HashRouter as Router,Route,Switch} from "react-router-dom";
import App from "../pages/App";
import signUpPage from "../pages/SignUp/signUpPage";
import signIn from "../pages/SignIn/signIn";

import FlashMessageList from "../components/Flash/FlashMessageList";
import HeaderNav from "../components/HeaderNav";

export default class index extends Component{
    render() {
        return(
            <Router>
                <HeaderNav/>
                <FlashMessageList/>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/signUp" component={signUpPage}></Route>
                    <Route path="/signIn" component={signIn}></Route>
                </Switch>
            </Router>
        )
    }
}