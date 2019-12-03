module.exports = file => () => import('../views/' + file + '.vue')
// 动态import 是由插件dynamic-import-webpack 支持的，未来es里也会支持