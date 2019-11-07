(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = file => () => new Promise(resolve => {
  __webpack_require__.e(/* require.ensure */ 3).then((require => {
    resolve(__webpack_require__(9)("./" + file + ".vue"));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
});
// module.exports = file => resolve => require(['../views/' + file + '.vue'], resolve).default
// console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
// module.exports = file => resolve => require.ensure([], () => resolve(require('../views/' + file + '.vue')) )
// module.exports = file => resolve => require(['../views/' + file + '.vue'], resolve).default

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/_vue@2.6.10@vue/dist/vue.js
var vue = __webpack_require__(2);
var vue_default = /*#__PURE__*/__webpack_require__.n(vue);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._v("222333333333\n    "), _c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=7ba5bd90&

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.5@babel-loader/lib??ref--1!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
    name: 'App',
    data() {
        return {};
    }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/_vue-router@3.1.3@vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__(0);

// CONCATENATED MODULE: ./src/router/index.js
// import Vue from 'vue'


// import navList from '@/router/nav.config.json'
const _import = __webpack_require__(4);
// in development env not use Lazy Loading,because Lazy Loading large page will cause webpack hot update too slow
// const map = {}

// const Layout = _import('layout/layout')
// map['modPwd'] = _import('login/mod_pwd')
//账号管理
// map['Driver'] = _import('account/driver')
// map['Dispatcher'] = _import('account/dispatcher')
// map['AlliCarrier'] = _import('account/alli_carrier')
// map['CheckCarrier'] = _import('account/check_carrier')
// map['Operator'] = _import('account/operator_account')
// // 用户管理
// map['Person'] = _import('account/person')
// map['YTO'] = _import('account/yto')
// map['carrierUser'] = _import('account/carrier_user')
// map['carrierDetail'] = _import('account/carrier_detail')
// map['optTrans'] = _import('account/opt_trans')

// // 角色权限管理
// map['Base'] = _import('authority/base_set')
// map['Role'] = _import('authority/role')
// map['roleAdd'] = _import('authority/role_add')

// // 承运商管理
// map['Carrier'] = _import('carrier/carrier')
// map['carrierDetail'] = _import('carrier/carrier_detail')

// // 车辆管理
// map['Car'] = _import('car/kk_car')
// map['CarrierCar'] = _import('car/carrier_car')
// map['CarrierCarDetail'] = _import('car/carrier_car_detail')
// // map['camelCar'] = _import('car/camel_car')
// // map['camelCarAdd'] = _import('car/camel_car_add')

// // 线路管理
// map['Effect'] = _import('line/effect_line')
// map['Line'] = _import('line/kk_line')
// map['camelLine'] = _import('line/camel_line')

//广告管理
// map['advertResource'] = _import('advert/resource')
// map['advertPutin'] = _import('advert/putin')
// map['advertPutinAdd'] = _import('advert/putin_add')
// map['advertCount'] = _import('advert/advert_count')
// map['advertCountDetail'] = _import('advert/count_detail')
// map['advertCountMore'] = _import('advert/count_detail_more')

// 组织管理
// map['Group'] = _import('group/org')
// map['Field'] = _import('group/field')
// const fieldMap = _import('group/map_show')

// 运单
// map['Waybill'] = _import('waybill/waybill')
// map['waybillLog'] = _import('waybill/waybill_log')
// const waybillDetail = _import('waybill/detail')
// const waybillDetailB = _import('waybill/detailB')
// const mapShow = _import('waybill/map_show')

// // 日志
// map['Logs'] = _import('logs/op_logs')

// // 配置
// map['Brand'] = _import('set/brand')
// map['Settlement'] = _import('set/settlement')
// map['Dict'] = _import('set/dict')


// // gps数据分析
// map['Overview'] = _import('gps/overview')
// map['Location'] = _import('gps/location')
// map['Trail'] = _import('gps/trail')
// map['overLocat'] = _import('gps/over_locat_detail')
// map['overMonth'] = _import('gps/over_month_detail')
// map['overCar'] = _import('gps/over_car_detail')
// const mapTrail = _import('gps/map_trail')

// // 系统日志分析
// map['logManage'] = _import('logAnalysis/log_manage')
// map['logParam'] = _import('logAnalysis/log_param')

// // 组织管理
// map['organizeManage'] = _import('basedata/organize')
// map['orgDetail'] = _import('basedata/org_detail')
// map['placeManage'] = _import('basedata/place')

// //协议管理
// map['agreeList'] = _import('agreement/list')
// map['agreeRecord'] = _import('agreement/record')
// // Vue.use(Router)
// // 登录
// const Login = _import('login/login')
// // 找回密码
const findPwd = _import('login/find_pwd');
const routes = [
// {
//     path: '/',
//     redirect: '/account'  // 重定向到默认首页
// },
// {
//     path: '/login',
//     component: Login,
//     name: '登录',
//     meta: {noRequireAuth: true}
// },
// {
//     path: '/account',
//     component: Layout,
//     name: '首页',
//     children: [
//     ]
// },
// {
//     path: '/waybill/detail',
//     component: waybillDetail,
//     name: '详情',
// },
// {
//     path: '/waybill/detailB',
//     component: waybillDetailB,
//     name: 'B运单详情',
// },
// {
//     path: '/waybill/map_show',
//     component: mapShow,
//     name: '地图',
// },
// {
//     path: '/gps/map_trail',
//     component: mapTrail,
//     name: '轨迹查询',
// },
// {
//     path: '/group/map_show',
//     component: fieldMap,
//     name: '场地地图',
// },
{
    path: '/find_pwd',
    component: findPwd,
    name: '找回密码'
}];
// let navListCopy = JSON.parse(JSON.stringify(navList))
// navListCopy.forEach(item => {
//   item.items.forEach(item2 => {
//     if (item2.component) {
//       // 运单
//       if (item2.component === 'Waybill') {
//         item2.path = '/waybill/waybill/:lineType'
//       }
//       item2.component = map[item2.component]
//       routes[2].children.push(item2)
//     }
//   })
// })
/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
    // mode: 'history',
    routes
}));

// {
//   path: '/account/opt_trans',
//   component: optTrans,
//   name: '集运用户管理'
// },
// {
//   path: '/account/yto',
//   component: YTO,
//   name: '圆通用户管理'
// },
// {
//   path: '/account/carrier_user',
//   component: carrierUser,
//   name: '承运商用户管理'
// },
// {
//   path: '/account/carrier_detail',
//   component: carrierDetail,
//   name: '查看详情'
// },
// {
//   path: '/account/person',
//   component: Person,
//   name: '个人用户管理'
// },{
//   path: '/mod_pwd',
//   component: modPwd,
//   name: '修改密码'
// },{
//   name: "基础配置",
//   component: Base,
//   path: "/authority/base_set"
// },{
//   name: "角色权限设置",
//   component: Role,
//   path: "/authority/role"
// },{
//   name: "新增角色权限",
//   component: roleAdd,
//   hidden: true,
//   path: "/authority/role_add"
// },{
//   name: "承运商管理",
//   component: Carrier,
//   path: "/carrier/carrier"
// },{
//   name: "金刚车辆管理",
//   component: Car,
//   path: "/car/kk_car"
// },
// {
//   name: "camel车辆管理",
//   component: camelCar,
//   path: "/car/camel_car"
// },
// {
//   name: "camel车辆新增",
//   "hidden": true,
//   component: camelCarAdd,
//   path: "/car/camel_car_add"
// },
// {
//   name: "组织管理",
//   component: Group,
//   path: "/group/group"
// },
// {
//   name: "场地管理",
//   component: Field,
//   path: "/group/field"
// },
// {
//   name: "路段时效管理",
//   component: Effect,
//   path: "/line/effect_line"
// }, {
//   name: "金刚线路管理",
//   component: Line,
//   path: "/line/kk_line"
// }, {
//   name: "camel线路管理",
//   component: camelLine,
//   path: "/line/camel_line"
// },{
//   name: "A线&无缝对接运单",
//   component: Waybill,
//   path: "/waybill/waybill/A"
// }, {
//   name: "B线运单管理",
//   component: Waybill,
//   path: "/waybill/waybill/B"
// }, {
//   name: "C线运单管理",
//   component: Waybill,
//   path: "/waybill/waybill/C"
// }, {
//   name: "运单日志",
//   hidden: true,
//   component: waybillLog,
//   path: "/waybill/waybill_log"
// }, {
//   name: "操作日志",
//   component: Logs,
//   path: "/logs/op_logs"
// }, {
//   name: "车辆品牌管理",
//   component: Brand,
//   path: "/set/brand"
// }, {
//   name: "结算车型管理",
//   component: Settlement,
//   path: "/set/settlement"
// }
// CONCATENATED MODULE: ./src/main.js
// index.js





vue_default.a.use(vue_router_esm["a" /* default */]);

// const root = document.createElement('div')
// document.body.appendChild(root)

new vue_default.a({
    router: router,
    render: h => h(App)
}).$mount('#app');

/***/ })

},[[8,1,2]]]);