import axios from "../utils/request";

//网络请求路径
const base = {
    baseURL:'web_login',
    signUpPath:'/private/user/sign-up',
    signInPath:'/private/user/sign-in',
}

//请求方法
const api ={
    signUp(params){
        return axios.post(base.baseURL+base.signUpPath,params)
    },
    signIn(params){
        return axios.get(base.baseURL+base.signInPath+'?account='+params.account+'&password='+params.password)
    }
}

export default api;