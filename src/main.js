import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Paginate from 'vuejs-paginate';
import VueMeta from 'vue-meta';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import localizeFilter from '@/filters/localize.filter';
import messagePlugin from '@/utils/message.plugin';
import tooltipDirective from '@/directives/tooltip.directive';
import Loader from '@/components/app/Loader';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);

Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);

Vue.directive('tooltip', tooltipDirective);

Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

const firebaseConfig = {
    apiKey: "AIzaSyCmaM4_BSUzzqQBcCCFtUf8mbFKqBtFWHc",
    authDomain: "gromkov-vue-crm.firebaseapp.com",
    projectId: "gromkov-vue-crm",
    storageBucket: "gromkov-vue-crm.appspot.com",
    messagingSenderId: "417397974210",
    appId: "1:417397974210:web:7955aecbc29c960180475b"
};
let app;
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
    }
});
