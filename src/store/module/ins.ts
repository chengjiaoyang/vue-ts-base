import { InsState } from '@/types/views/ins.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as InsApi from '@/api/ins'

const state: InsState = {
  ins: {
   author: undefined
  }
}

// 强制使用getter获取state
const getters: GetterTree<InsState, any> = {
  author: (state: InsState) => state.ins.author
}

// 更改state
const mutations: MutationTree<InsState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: InsState, data: InsState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<InsState, any> = {
  UPDATE_STATE_ASYN({ commit, state: InsState }, data: InsState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Ins.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

