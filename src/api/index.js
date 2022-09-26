import axios from "../utils/request";

//网络请求路径
const base = {
    baseURL:'web_login',
    serverPath:'/private/user/sign-up',
}

//请求方法
const api ={
    login(params){
        return axios.post(base.baseURL+base.serverPath,params)
    }
}

export default api;