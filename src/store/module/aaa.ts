import { AaaState } from '@/types/views/aaa.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as AaaApi from '@/api/aaa'

const state: AaaState = {
  aaa: {
   author: undefined
  }
}

// 强制使用getter获取state
const getters: GetterTree<AaaState, any> = {
  author: (state: AaaState) => state.aaa.author
}

// 更改state
const mutations: MutationTree<AaaState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: AaaState, data: AaaState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<AaaState, any> = {
  UPDATE_STATE_ASYN({ commit, state: AaaState }, data: AaaState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Aaa.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

