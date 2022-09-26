import axios from "axios";
import qs from "qs"

//处理失败的方法
const errorHandle = (status,info)=>{
  switch (status) {
    case 400:
          console.log("400")
          break;
    case 404:
          console.log("404")
          break;
    default:
          console.log(info)
          break;
  }
}

//创建axios实例
const instance = axios.create({
  // baseURL:"http://43.143.121.82:7000",
  timeout: 5000
})


//请求拦截器
instance.interceptors.request.use(
    config=>{
      if (config.method === "post"){
        config.data = qs.stringify(config.data)
      }
      return config;
    },
    error => Promise.reject(error)
)

//响应拦截器
instance.interceptors.response.use(
    response =>response.status === 200 ? Promise.resolve(response):Promise.reject(response),
    error => {
      const {response} = error;
      errorHandle(response.status,response.info);
    }

)

export default instance


















