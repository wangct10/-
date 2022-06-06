// vue插件一定要暴露一个对象
let myPlugins = {}

// myPlugins.install = function (vue, options) {
//   //Vue.prototype.$bus:任何组件都可以使用
//   //Vue.directive
//   // Vue.component
//   // Vue.Filter......
//   // 全局指令
//   Vue.directive(options.name, () => { })
// }

export default myPlugins