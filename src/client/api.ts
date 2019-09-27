/**
 * 导入 axios 类
 */
import HTTP from "@/utils/axios"

/**
 *  读取外部 配置文件
 */
import globalConfig from '@/project.config';

/**
 * 导出一个 封装好的 方法
 */
export default new HTTP(globalConfig);
