import {Api} from '@/utils/request'

console.log(Api);
export const getData = () => {
  return Api.getData()
}
export interface AboutState {
  data?: object
  name : string
}

