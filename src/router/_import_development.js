// 未按需加载
module.exports = file => resolve => require(['../views/' + file + '.vue'], resolve).default
// module.exports = file => resolve => require.ensure([], () => resolve(require('../views/' + file + '.vue')), '')
// 按需加载
// module.exports = file => () => import('../views/' + file + '.vue')