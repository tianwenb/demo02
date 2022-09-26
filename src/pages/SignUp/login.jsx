import React,{Component} from "react";
import "./style.scss";
import api from "../../api";
import axios from "axios";

export default class login extends Component{
    //受控组件
    constructor() {
        super();
        this.state={
            username:'',
            password:'',
            email:'',
            phone:'',
        }
    }
    changeHandle=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        let data = {
            phone:this.state.phone,
            account:this.state.username,
            password:this.state.password
        }
      /*  axios.post("http://localhost:7000/private/user/login",data).then(res => {
            console.log(res.data)
        })*/


        api.login(data).then(res=>{
            console.log(res.data)
        }).catch(e=>{
            console.log(e)
        })
    }
    render() {
        const {username,password,phone} = this.state;
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="segment">
                        <h1>Sign up</h1>
                    </div>
                    <div className="input-group">
                        <label>
                            <input type="text" name="phone" placeholder="User Phone" value={phone} onChange={this.changeHandle}/>
                        </label>
                        <button className="unit" type="button"><i className="icon ion-md-search"></i></button>
                    </div>
                    <label>
                        <input type="text" name="username" placeholder="User Name" value={username} onChange={this.changeHandle}/>
                    </label>
                    <label>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandle}/>
                    </label>
                    <button className="red" type="submit"><i className="icon ion-md-lock"></i> Log in</button>
                    <div className="segment">
                        <button className="unit" type="button"><i className="icon ion-md-arrow-back"></i></button>
                        <button className="unit" type="button"><i className="icon ion-md-bookmark"></i></button>
                        <button className="unit" type="button"><i className="icon ion-md-settings"></i></button>
                    </div>
                </form>
            </div>
        )
    }
}