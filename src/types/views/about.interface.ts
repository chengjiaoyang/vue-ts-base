// about.Data 参数类型
export interface AboutData {
  pageName: string
}

// VUEX about.State 参数类型
export interface AboutState {
  data?: object
  name : string
}

/* abstract */
export enum aboutStates {
  a="string",
  b="number",
}

export default class Api extends Storage{

}
// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

