import Vue from 'vue';
import Vuex from 'vuex';

/** 导入文件 */
import vuexHome from "@/store/model/vuex-home";
import vuexHome from "@/store/model/vuex-home";
import vuexHome from "@/store/model/vuex-home";
import vuexLogin from "@/store/model/vuex-login";

/** 导入完毕 */

Vue.use(Vuex);

export default new Vuex.Store({
  /** 建立模块 */
  modules: {
     vuexHome,
     vuexHome,
     vuexHome,
     vuexLogin,

  }
  /** 建立完毕 */
});
