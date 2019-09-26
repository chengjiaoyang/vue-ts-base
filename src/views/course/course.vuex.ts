
    import { CourseState } from './course.interface'
    import { GetterTree, MutationTree, ActionTree } from 'vuex'
    // import * as CourseApi from '@/api/course'

    const state: CourseState = {

    };

    // 强制使用getter获取state
    const getters: GetterTree<CourseState, any> = {
        getAuthor: (state: CourseState) => state.author
    };

    // 更改state
    const mutations: MutationTree<CourseState> = {
      // 更新state都用该方法
      UPDATE_STATE(state: CourseState, data: CourseState) {
        for (const key in data) {
          if (!data.hasOwnProperty(key)) { return }
          state[key] = data[key]
        }
      }
    };

    const actions: ActionTree<CourseState, any> = {
      UPDATE_STATE_ASYN({ commit, state: CourseState }, data: CourseState) {
        commit('UPDATE_STATE', data)
      },
      // GET_DATA_ASYN({ commit, state: LoginState }) {
      //   Course.getData()
      // }
    };

    export default {
      state,
      getters,
      mutations,
      actions
    }

