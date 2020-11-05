import Vue from 'vue'
import App from './App.vue'
import router from './router' //导入的路径是一个文件夹 编译的时候回自动寻找该文件夹下的index.js文件

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
