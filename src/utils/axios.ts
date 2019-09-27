import axios from 'axios';
import qs from 'qs';


class Http {
    private service: any = null;
    constructor(config:{url: string, timeout: number, filterCode: Array<number>}) {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        this.service = axios.create({
            baseURL: config.url ? config.url : '',
            timeout: config.timeout || 3000,
            withCredentials:true, // 运行携带 cookie
        });
        this.service.interceptors.request.use((config: { data: any; }) => {
            config.data = qs.stringify(config.data);
            return config;
        }, (error: any) => Promise.reject(error));
        // 过滤业务Code
        this.service.interceptors.response.use((response: { status: number; data: { code: number; }; }) => {
            // console.log('返回参数 ==>', response);
            if (response.status === 200) {
                if (!response.data.code || config.filterCode.includes(response.data.code)) {
                    return Promise.resolve(response.data || true);
                } else {
                    return Promise.reject(response);
                }
            }
        }, (error: any) => {
            return Promise.reject(error);
        });
    }
    public get(url: string, params: any = {}) {
        return this.service.get(`${url}`, { params });
    }
    public post(url: string, data: any = {}, config: any = {}) {
        return this.service.post(`${url}`, data, config);
    }
}

export default Http;
