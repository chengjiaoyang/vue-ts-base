import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { TestData } from '@/types/views/test.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter test.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: TestData = {
    pageName: 'test'
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
    
}
