// 将 api 挂在至 vue 生命周期中
import  Vue, {  PluginFunction } from "vue";

class API {
    public static api = 1;
    static install: PluginFunction<never>
}

Vue.use(API);
