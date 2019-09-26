
    import { Component, Vue } from "vue-property-decorator"
    import { Getter, Action } from "vuex-class"
    import { CourseData } from './course.interface'
    import state from './course.vuex'
    import getters from './course.vuex'
    import mutations from './course.vuex'
    import actions from './course.vuex'
    console.log(state);
    console.log(getters);
    console.log(mutations);
    console.log(actions);
    // import {  } from "@/components" // 组件

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
