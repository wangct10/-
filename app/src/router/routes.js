// 引入路由组件
import Home from '@/pages/Home'
// import Login from '@/pages/Login'
import Register from '@/pages/Register'
// import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import Communication from '@/pages/communication/communication.vue'
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
import EventTest from '@/pages/communication/EventTest/EventTest'
import ModelTest from '@/pages/communication/ModelTest/ModelTest.vue'


// 路由懒加载
// const foo = () => {
//   return import('@/pages/Home');
// }
// 使用捆绑器构建应用程序时，JavaScript 捆绑包可能会变得非常大，从而影响页面加载时间。如果我们能够将每个路由的组件拆分为单独的块，并且仅在访问路由时才加载它们，则会更有效率。
// 整理路由信息
export default [
  {
    path: "/communication",
    component: Communication,
    meta: { show: true },
    // 二级路由组件
    children: [
      {
        path: "eventtest",
        component: EventTest,
      },
      {
        path: "modeltest",
        component: ModelTest,
      },
      {
        path: "synctest",
        component: () => import("@/pages/communication/SyncTest/SyncTest.vue")
      },
      {
        path: "childrenparenttest",
        component: () => import("@/pages/communication/ChildrenParentTest/ChildrenParentTest.vue")
      },
      {
        path: "attrslistenerstest",
        component: () => import("@/pages/communication/AttrsListenersTest/AttrsListenersTest.vue")
      },
      {
        path: "scopeslottest",
        component: () => import("@/pages/communication/ScopeSlotTest/ScopeSlotTest.vue")
      },
    ]
  },
  {
    path: "/center",
    component: Center,
    meta: { show: true },
    // 二级路由组件
    children: [
      {
        path: 'myorder',
        component: MyOrder
      },
      {
        path: 'grouporder',
        component: GroupOrder
      },
      {
        path: '/center',
        redirect: '/center/myorder'
      }
    ]
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { show: true },
    // beforeEnter: (to, from, next) => {
    //   // 去支付成功页面，必须从支付页面而来
    //   if (from.path == "/pay") {
    //     next()
    //   } else {
    //     // 其他的路由组价而来，停留在当前
    //     next(false)
    //   }
    // }
  },
  {
    path: "/pay",
    component: Pay,
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      // 去支付页面，必须从交易页面而来
      if (from.path == "/trade") {
        next()
      } else {
        // 其他的路由组价而来，停留在当前
        next(false)
      }
    }
  },
  {
    path: "/trade",
    component: Trade,
    meta: { show: true },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // 去交易页面，必须从购物车而来
      if (from.path == "/shopcart") {
        next()
      } else {
        // 其他的路由组价而来，停留在当前
        next(false)
      }
    }
  },

  {
    path: "/shopcart",
    component: ShopCart,
    meta: { show: true }
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { show: true }
  },
  {
    path: "/addcartsuccess",
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true }
  },
  {
    path: "/detail/:skuid",//动态二级路由
    component: Detail,
    meta: { show: true }
  },
  {
    path: "/home",
    component: Home,
    meta: { show: true }
  },
  {
    path: "/login",

    component: () => import("@/pages/Login"),//路由懒加载
    meta: { show: false }
  },
  {
    path: "/register",
    component: Register,
    meta: { show: false }
  },
  {
    path: "/search/:keyword?",//占位的后面加上一个问号【表明params可传递可不传递】
    component: () => import("@/pages/Search"),
    meta: { show: true },
    name: "search",
    // 路由组件能不能传递props数据？
    // 1.布尔值写法:params
    // props: true,
    // 2.对象写法：额外给路由组件传递一些props
    // props: {
    //   a: 1, b: 2,
    // }
    // 3.函数写法：可以params参数，query参数，通过props传递给路由组件
    // props: ($route) => {
    //   return {
    //     keyword: $route.params.keyword,
    //     m: $route.query.m
    //   }
    // }
  },
  // 重定向，定向想默认的网页
  {
    path: '*',
    redirect: "/home"
  }
]