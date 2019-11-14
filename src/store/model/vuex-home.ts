import { Commit, ActionContext } from 'vuex';
import {home} from "@/store/api/api-home";

interface State  {
    /* 示例 */
    data:any[]
}
const state: State = {
    data:[]
};
/* 获得当前 data 的值 */
const getters : any= {
    getData : (state:any) => state.data,
};
/* 同步设置 data 的值 */
const mutations = {
    setData(states: {deviceStatus:any}, data: number) {
        states.deviceStatus = data;
    },
};
/* 异步设置 data 的值 */
const actions = {
    async setData({commit}:any,data: number){
        commit('setData',data)
    },
};
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};