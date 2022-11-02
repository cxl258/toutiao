import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'amfe-flexible'
import  'vant/lib/index.css'
// 导入less文件
import './styles/index.less'
import { Button,Form ,Field } from 'vant';

Vue.config.productionTip = false

Vue.use(Vant);
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
