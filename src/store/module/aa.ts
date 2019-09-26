import { AaState } from '@/types/views/aa.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as AaApi from '@/api/other/aa'

const state: AaState = {
  aa: {
   author: undefined
  }
}

// 强制使用getter获取state
const getters: GetterTree<AaState, any> = {
  author: (state: AaState) => state.aa.author
}

// 更改state
const mutations: MutationTree<AaState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: AaState, data: AaState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<AaState, any> = {
  UPDATE_STATE_ASYN({ commit, state: AaState }, data: AaState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Aa.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

