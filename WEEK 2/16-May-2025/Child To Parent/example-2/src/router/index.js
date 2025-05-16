import ContactPage from '@/components/ContactPage.vue';
import InfoPage from '@/components/InfoPage.vue';
import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  mode: 'history', // optional, for clean URLs
  routes: [
    {
      path: '/info',
      name: 'InfoPage',
      component: InfoPage,
      props: true  // route props allow passing data via route
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage,
      props: true
    },
    {
      path: '*',
      redirect: '/contact' // default route
    }
  ]
});
