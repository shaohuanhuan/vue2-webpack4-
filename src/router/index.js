import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

const findPwd = _import('login/find_pwd')
const Reset = _import('login/reset')
const routes = [
    {
        path: '/find_pwd',
        component: findPwd,
        name: '找回密码',
    },
    {
      path: '/reset',
      component: Reset,
      name: '重置',
    }

]
export default new Router({
  // mode: 'history',
  routes
})
