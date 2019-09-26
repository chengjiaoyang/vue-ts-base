import {Api} from '@/utils/request'

console.log(Api);

export const getData = () => {
  return Api.getData()
}

// 默认导出一个 设置本地的工具类的内容
export default class Storage{

  public static getItem(key:string):any {
    return localStorage.getItem(key);
  }

  public static setItem(key:string,value:any):void{
    localStorage.setItem(key,value);
  }

  public static removeItem(key:string):void{
    localStorage.removeItem(key);
  }


}

