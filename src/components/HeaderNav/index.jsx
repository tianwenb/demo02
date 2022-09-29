import React,{Component} from "react";
import {Link} from "react-router-dom";
// import login from "../../pages/SignUp/login";
import "./style.css"
import logo from "./navImg/logo512.png"

export default class HeaderNav extends Component{
    render() {
        return(
            /*——————navbar————
            可以创建一个标准的导航栏，若要创建响应式的导航栏，可以在类 .navbar 的基础上添加类 .navbar-expand-xx
            ————————————————*/
            /*——————navbar-expand-xx——————————
            用于响应式布局
            navbar-expand-sm：屏幕>576px时水平铺开，否则垂直堆叠
            navbar-expand-md：屏幕>768px时水平铺开，否则垂直堆叠
            navbar-expand-lg：屏幕>992px时水平铺开，否则垂直堆叠
            navbar-expand-xl：屏幕>1200px时水平铺开，否则垂直堆叠
            ————————————————————————————————*/
            /*——————navbar-light和bg-light——————————
            导航栏文本颜色和导航栏背景颜色
            bg-light navbar-light 灰底黑字
            bg-primary navbar-dark 蓝底白字
           ————————————————————————————————*/
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                {/*.navbar-brand 类用于高亮显示品牌/Logo*/}
                {/*<a className="navbar-brand" href="/public/boot01.html">Navbar</a>*/}
                <a className="navbar-brand" href="#/">
                    <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                        酷盖
                </a>
                {/*navbar-toggler 响应式布局 与navbar-expand-md配合 自动折叠导航栏*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>



                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#/">Home <span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#/signUp">SignUp</a>
                                <a className="dropdown-item" href="#/signIn">SignIn</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}