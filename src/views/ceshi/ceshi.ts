import { Component, Vue } from "vue-property-decorator"
import { CeshiData } from '@/types/views/ceshi.interface'
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter ceshi.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: CeshiData = {
    pageName: 'ceshi'
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
