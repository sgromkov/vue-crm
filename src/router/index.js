import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app';

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        meta: { layout: 'EmptyLayout' },
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/register',
        name: 'register',
        meta: { layout: 'EmptyLayout' },
        component: () => import('../views/RegisterView.vue')
    },
    {
        path: '/',
        name: 'home',
        meta: { layout: 'MainLayout', auth: true },
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/categories',
        name: 'categories',
        meta: { layout: 'MainLayout', auth: true },
        component: () => import('../views/CategoriesView.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        meta: { layout: 'MainLayout', auth: true },
        component: () => import('../views/DetailView.vue')
    },
    {
        path: '/history',
        name: 'history',
        meta: { layout: 'MainLayout', auth: true },
        component: () => import('../views/HistoryView.vue')
    },
    {
        path: '/planning',
        name: 'planning',
        meta: { layout: 'MainLayout', auth: true },
        component: () => import('../views/PlanningView.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        meta: { layout: 'MainLayout', auth: true },
        component: () => import('../views/ProfileView.vue')
    },
    {
        path: '/record',
        name: 'record',
        meta: { layout: 'MainLayout', auth: true },
        component: () => import('../views/RecordView.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser;

    const requireAuth = to.matched.some(record => record.meta.auth);

    if (requireAuth && !currentUser) {
        next('/login?message=login');
    } else {
        next();
    }
});

export default router;
