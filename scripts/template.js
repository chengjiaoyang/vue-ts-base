/*
 * @Description: 页面快速生成脚本
 * @Date: 2018-12-06 10:28:08
 * @LastEditTime: 2018-12-10 09:43:50
 */
const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')
const line = ()=>{
    console.log(`-----------`);
};
const dirName = process.argv[2]
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
if (!dirName) {
    console.log('文件夹名称不能为空！')
    console.log(`示例：npm run tep ${capPirName}`)
    process.exit(0)
}
/**
 * @msg: vue页面模版
 */
const template = ()=>{
const VueTep = `
    <template>
          <div class="${dirName}-wrap">
            {{data.pageName}}
          </div>
    </template>
    
    <script lang="ts" src="./${dirName}.ts"></script>
    
    <style lang="scss">
      //@import './${dirName}.scss'
    </style>
    `;

// ts 模版
const tsTep =
`import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { ${capPirName}Data } from './${dirName}.interface'

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter ${dirName}.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: ${capPirName}Data = {
    pageName: '${dirName}'
  }

  created() {
    //
  }
    
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}`;

// scss 模版
const scssTep =
`@import "@/assets/scss/variables.scss";

.${dirName}-wrap {
  width: 100%;
}`;

// interface 模版
const interfaceTep = `
// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  pageName: string
}

// VUEX ${dirName}.State 参数类型
export interface ${capPirName}State {
  data?: any
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

    `;

// vuex 模版
const vuexTep = `
    import { ${capPirName}State } from './${dirName}.interface'
    import { GetterTree, MutationTree, ActionTree } from 'vuex'
    //import * as ${capPirName}Api from '@/api/${dirName}'
    
    const state: ${capPirName}State = {
      ${dirName}: {
       author: undefined
      }
    }
    
    // 强制使用getter获取state
    const getters: GetterTree<${capPirName}State, any> = {
      author: (state: ${capPirName}State) => state.${dirName}.author
    }
    
    // 更改state
    const mutations: MutationTree<${capPirName}State> = {
      // 更新state都用该方法
      UPDATE_STATE(state: ${capPirName}State, data: ${capPirName}State) {
        for (const key in data) {
          if (!data.hasOwnProperty(key)) { return }
          state[key] = data[key]
        }
      }
    }
    
    const actions: ActionTree<${capPirName}State, any> = {
      UPDATE_STATE_ASYN({ commit, state: ${capPirName}State }, data: ${capPirName}State) {
        commit('UPDATE_STATE', data)
      },
      // GET_DATA_ASYN({ commit, state: LoginState }) {
      //   ${capPirName}.getData()
      // }
    }
    
    export default {
      state,
      getters,
      mutations,
      actions
    }

    `;

// api 接口模版
const apiTep = `
/**
 * 导入统一出口 api 文件
 */
import http from '../api';

export const ${dirName}Data = (data: any, config: any) => {
    return http.get('novelApi', data);
};
    
`;
// 校验

fs.mkdirSync(`${basePath}/views/${dirName}`) // mkdir

process.chdir(`${basePath}/views/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue
fs.writeFileSync(`${dirName}.ts`, tsTep) // ts
// fs.writeFileSync(`${dirName}.scss`, scssTep) // scss

// process.chdir(`${basePath}/types/views`); // cd types
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep) // interface 在当前目录写入接口文件

// process.chdir(`${basePath}/store/module`); // cd store
fs.writeFileSync(`${dirName}.vuex.ts`, vuexTep) // vuex 在当前目录写入 需要使用的 vuex 的文件

fs.mkdirSync(`${basePath}/client/${dirName}`) ; // 在当前目录中创建 给目录的 api 文件
process.chdir(`${basePath}/client/${dirName}`); // cd 当前 api 目录中
fs.writeFileSync(`${dirName}.api.ts`, apiTep) // api 在客户端中写入 api 的文件

console.log('创建完成');
process.exit(0)
};

console.log(`校验目录是否存在……`);
fs.stat(`${basePath}/views/${dirName}`, (err,stats)=>{
    line();
    // 只要当前目录不存在就创建当前目录 否则创建 stats 当这个值存在时表示这个文件或文件夹存在
    if(!stats){
        console.log(`目录不存在,正在创建……`);
        template();
    }else {
        console.log(`目录存在,创建失败……`);
    }
    line();
    return false;
});
