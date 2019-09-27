import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { HomeData } from './home.interface'

class Person {
  constructor(name:boolean,children:Array<number>){
    this.name = name
    this.children = children;
    this.greeting = "message";
  }

  @format("Hello")
  greeting: string;
}

function format(formatString: string) {
  console.log(formatString);
  return formatString;
}

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter home.author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: HomeData = {
    pageName: 'home'
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
