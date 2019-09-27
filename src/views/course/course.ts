import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { CourseData } from './course.interface'

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter course.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: CourseData = {
    pageName: 'course'
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