import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import {AboutData, AboutState, aboutStates} from '@/types/views/about.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter about.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: AboutData = {
    pageName: 'about'
  };
  // @ts-ignore
  data1 : AboutState = {
    data : {
      a:1,
      b:2
    },
    name:"11"
  };

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
    console.log(aboutStates);
  }

  // 初始化函数
  init() {
    //
  }

}
