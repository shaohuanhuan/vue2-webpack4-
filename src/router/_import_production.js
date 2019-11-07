module.exports = file => () => import('../views/' + file + '.vue')
// module.exports = file => resolve => require(['../views/' + file + '.vue'], resolve).default
// console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
// module.exports = file => resolve => require.ensure([], () => resolve(require('../views/' + file + '.vue')) )
// module.exports = file => resolve => require(['../views/' + file + '.vue'], resolve).default