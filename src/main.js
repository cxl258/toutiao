import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入less文件
import './styles/index.less'
//导入vant  按钮等
import { Button } from 'vant';
Vue.config.productionTip = false


Vue.use(Vant)
Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
