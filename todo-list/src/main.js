import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"
import '../public/css/Todolist.css'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    filterTodolistItem: (item) => item,
    inputTaskName: '',
    todolist: []
  },
  mutations: {

  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
