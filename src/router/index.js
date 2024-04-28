// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase/index.js';

const routes = [{
    path: '/',
    component: () =>
        import ('@/layouts/default/DefaultView.vue'),
    children: [{
            path: '/',
            name: 'Home',
            component: () =>
                import ('@/views/HomeView.vue'),
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/About',
            name: 'About',
            component: () =>
                import ('@/views/AboutView.vue'),
            meta: {
                requiresAuth: true
            }
        }, {
            path: '/Product',
            name: 'Product',
            component: () =>
                import ('@/views/Product.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Cart',
            name: 'Cart',
            component: () =>
                import ('@/views/CartView.vue'),
            meta: {
                requiresAuth: true
            }

        },
        {
            path: '/Favorite',
            name: 'Favorite',
            component: () =>
                import ('@/views/FavoriteView.vue'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/Details',
            name: 'Details',
            component: () =>
                import ('@/views/DetailsProduct.vue'),
            props: true
        },
        {
            path: '/Detail/:id',
            name: 'Detail',
            component: () =>
                import ('@/views/DetailsProduct.vue'),
            props: true
        },
        {
            path: '/Login',
            name: 'Login',
            component: () =>
                import ('@/views/LoginView.vue'),
        },

        {
            path: '/Register',
            name: 'Register',
            component: () =>
                import ('@/views/SignupView.vue'),
        },
    ],
}]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    const authenticatedUser = auth.currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    if (requiresAuth && !authenticatedUser)
        next({ name: 'Login' });
    else next()
});
export default router