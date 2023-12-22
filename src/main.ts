import './style.css'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: defineAsyncComponent(() => import('./pages/home.vue')) },
        { path: '/about', component: defineAsyncComponent(() => import('./pages/about.vue')) },
        { path: '/hi/:name', component: defineAsyncComponent(() => import('./pages/hi/[name].vue')), props: true },
    ],
})

// enable redirect from /?name=foo to /hi/foo
router.beforeEach((to, from, next) => {
    if (from.path === '/' && to.query.name) {
        next({ path: `/hi/${to.query.name}` })
        return
    }
    next()
})


createApp(App).use(router).mount('#app')
