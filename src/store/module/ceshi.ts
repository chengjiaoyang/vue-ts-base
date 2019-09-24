import { CeshiState } from '@/types/views/ceshi.interface'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as CeshiApi from '@/api/ceshi'

const state: CeshiState = {
  ceshi: {
   author: undefined
  }
}

// 强制使用getter获取state
const getters: GetterTree<CeshiState, any> = {
  author: (state: CeshiState) => state.ceshi.author
}

// 更改state
const mutations: MutationTree<CeshiState> = {
  // 更新state都用该方法
  UPDATE_STATE(state: CeshiState, data: CeshiState) {
    for (const key in data) {
      if (!data.hasOwnProperty(key)) { return }
      state[key] = data[key]
    }
  }
}

const actions: ActionTree<CeshiState, any> = {
  UPDATE_STATE_ASYN({ commit, state: CeshiState }, data: CeshiState) {
    commit('UPDATE_STATE', data)
  },
  // GET_DATA_ASYN({ commit, state: LoginState }) {
  //   Ceshi.getData()
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}

