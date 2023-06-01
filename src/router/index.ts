import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import routes from './routes'
const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: routes as RouteRecordRaw[]
})
router.beforeEach((to, from) => {
  NProgress.start()
  console.log(to, from)
})
router.afterEach(() => {
  NProgress.done()
})
export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
