import {Component, Provide, Vue, Watch} from 'vue-property-decorator';
/** 导入新底层类 模拟 android 思维 */
import {BaseView} from "@/views/baseView";
/** 拿到生命周期 抽象函数 */
import {HookLife} from "@/views/baseClass";
/** 导入 vuex 文件 视情况删除 */
import { Action, Mutation, State, Getter, namespace } from "vuex-class";
/** 创建 model 模块 vuex */
const vuexHomeModel = namespace('vuexHome');

@Component({})
export default class Home extends BaseView implements HookLife{
    
    @Provide()
    
    
    @vuexHomeModel.Getter("getData") public getData: any;
    @vuexHomeModel.Action("setData") public acSetData: any;
    @vuexHomeModel.Mutation("setData") public muSetData: any;
    /* 加载生命周期 */
    created(): void {
        super.created();
    }

    async mounted() {
        super.mounted(()=>{
            /** 获取 底层需要的内容后 在执行 页面初始化 */
            /** 使用 vuex 异步 */
            this.acSetData();
            /** 使用 vuex 同步 */
            this.muSetData();
            /** 获取 vuex 中数据 */
            this.getData();
        });
    }

    destroy(): void {
        super.destroy();
    }
}