
/**
 * 导入统一出口 api 文件
 */
import http from '../api';

export const homeData = (data: any, config: any) => {
    return http.get('novelApi', data);
};
    
