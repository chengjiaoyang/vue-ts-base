import axios from "axios";
import {API} from "./url.interface";

let url : API = {
    apiUrl:"",
    netUrl:""
}
// 创建axios实例
let service: any = {};
service = axios.create({
    url:url.apiUrl,
    baseURL: "/api", // api的base_url
    timeout: 50000 // 请求超时时间
});

// request拦截器 axios的一些配置
service.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: any) => {
        // Do something with request error
        console.error("error:", error); // for debug
        Promise.reject(error);
    }
);

// respone拦截器 axios的一些配置
service.interceptors.response.use(
    (response: any) => {
        // 在 status 正常的情况下 将 response 已 Promise 的方式 回传至页面中
        return Promise.resolve(response);
    },
    (error: any) => {
        console.error("error:" + error); // for debug
        return Promise.reject(error);
    }
);

export default service;
