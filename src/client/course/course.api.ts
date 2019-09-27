
/**
 * 导入统一出口 api 文件
 */
import http from '../api';

export const courseData = (data: any, config: any) => {
    return http.get('novelApi', data);
};
    
