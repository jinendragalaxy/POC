import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate, {Validator} from 'vee-validate'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false


Validator.localize('en', {
  messages: {
    required: (field) => `Please fill in the ${field} field!`,
    email: () => `Please enter a valid email address.`,
    min: (field, [length]) => `${field} should be at least ${length} characters long.`,
  },
  attributes: {
    email: 'Email',
    password: 'Password'
  }
})
Vue.use(VeeValidate)
Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
