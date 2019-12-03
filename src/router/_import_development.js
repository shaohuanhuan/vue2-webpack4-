// 未按需加载
module.exports = file => resolve => require(['../views/' + file + '.vue'], resolve).default
// .default 是require和commonJs 2种加载方式的转换