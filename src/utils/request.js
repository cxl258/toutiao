/**
 * 封装 axios 请求模块
 */
 import axios from "axios"

 const request = axios.create({
   baseURL: "http://toutiao.itheima.net/v1_0" // 基础路径
 })
 
 export default request
