// 配置路由的地方

// 引入
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
import store from '@/store'
// import { mapActions } from "vuex";
// mapActions('user', ['getUserInfo'])
// 使用插件
Vue.use(VueRouter)

// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重写push|replace
// 第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）
// 第二个参数：成功回调
// 第三参数：失败回调
// call||apply区别：相同点，都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点：call传递参数用逗号隔开，apply方法执行传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
  // console.log(this);
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}
// 对外暴露VueRouter的实例
// 配置路由
let router = new VueRouter({
  // 配置路由
  routes,
  // 滚动行为 设定刷新或者跳转页面后滚动条所在位置
  scrollBehavior(to, from, scrollBehavior) {
    // 返回这个y=0，代表的滚动条在最上方
    return { y: 0 }
  }
})
// 全局守卫，前置守卫，（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
  // to:可以获取要跳转的路由信息
  // from:可以获取到你从哪个路由来的信息
  // next：放行函数 next(path)放行到指令路由
  // 用户登录了，才会有token，未登录一定没有token
  let token = store.state.user.token;
  // 用户信息
  let name = store.state.user.userInfo.name
  if (token) {
    // 用户已经登录了不能去login,停留在首页
    if (to.path == '/login') {
      next('/home')
    } else {
      // 登陆了，但不是去login页面
      // 如果用户名已有信息
      if (name) {
        next()
      } else {
        // 没有用户信息，派发action让仓库存储用户信息在跳转
        // 获取用户信息在首页显示
        try {
          // 获取用户信息成功
          await store.dispatch('user/getUserInfo')
          next()
        } catch (error) {
          // token失效了获取不到用户信息，重新登录，，清除token
          await store.dispatch('user/UserLogout')
          next('/login')
        }
      }
    }
  } else {
    // 未登录 不能去交易相关（trade），支付相关（pay|paysuccess），用户中心（center） 
    // 未登录去上面这些路由则跳转登录页面

    let toPath = to.path
    // console.log(toPath);
    if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1 || toPath.indexOf('/paysuccess') != -1) {
      // 吧未登录的时候想去而没有去成的信息，存储于地址中【路由】
      next('/login?redirect=' + toPath)
    } else {
      next()
    }

  }

})

export default router