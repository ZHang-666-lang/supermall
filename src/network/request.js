import axios from 'axios'

//方法三
export function request(config) {
    // 1、创建axios实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    // 2、axios拦截器 
    instance.interceptors.request.use(config => {
        // console.log(config,'发送响应成功')
        // 某些网络请求(比如登录token)，当没有token时让用户登录
        return config
    },err =>{
        console.log(err)
    })
    // 2.2响应拦截
    instance.interceptors.response.use(res => {
        console.log(res)
        return res.data
    },err => {
        console.log(err)
    })
    // 3、发送真正的网络请求 返回一个promise
    return instance(config)
}