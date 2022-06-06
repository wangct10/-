1：编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated的警告错误？
--路由跳转有两种形式：声明式导航、编程式导航
--声明式导航没有这类问题的，因为vue-router底层已经处理好了
1.1：为什么编程式导航进行路由跳转的时候，就有这种警告错误？
  "vue-router": "^3.5.3"：最新的vue-router引入promise
1.2:通过给push方法传递相应的成功、失败的回调函数，可以捕获到当前错误，可以解决
1.3：通过底部的代码，可以实现解决错误
  this.$router.push(
        {
          name: "search",
          params: { keyword: this.keyword },
          query: { m: this.keyword.toUpperCase() },
        },
        () => {},
        () => {}
      );
这种写法：治标不治本，将来在别的组件当中push|replace，编程式导航还有类似错误
1.4:
this:当前组件实例（header）
this.$router属性：当前这个属性，属性值VueRouter类的一个实例，当在入口文件注册路由的时候，给组件实例添加$router|$route属性
push是VueRouter类的一个原型方法
$router是VueRouter类的实例，类的实例可以直接调用原型方法，所以对原型方法push进行修改，修改结果就会作用于组件实例的$router实例

原型链
function VueRouter(){}
<!-- 原型对象的方法 -->
VueRouter.prototype.push=function(){
<!-- 函数为上下文为VueRouter类的一个实例 -->
}
let $router = new VueRouter();
$router.push(xxx);
this.$router.push();


2：Home模块的拆分
--先把静态页面完成
--拆分出静态组件
--获取服务器的数据进行展示
--动态业务


3：三级联动组件完成
---由于三级联动，在Home、Search、Detail，把三级联动注册为全局组件
好处：只需要注册一次，就可以在项目任何地方使用

4:完成其余静态组件
HTML + CSS + 图片资源【结构、样式、图片资源】

5：POSTMAN测试接口
--经过postman测试接口
--如果服务器返回的数据code字段200，代表服务器返回数据成功
--整个项目，接口前缀都有/api字样

6：axios二次封装
XMLHttpRequest、fetch、JQ、axios
6.1：为什么需要进行二次封装axios？
请求拦截器：可以在发请求之前处理一些业务、响应拦截器，当服务器数据返回以后，可以处理一些事情
响应拦截器：相应请求拦截
6.2：在项目当中经常API文件夹【axios】
接口当中：路径都带有/api
 baseURL: "/api"
6.3:若axios基础不好，可以参考git|NPM关于axios文档

7:接口统一管理
项目很小：完全可以在组件的生命周期函数中发请求
项目大：axios.get('xxx')
7.1:跨域问题
什么是跨域：协议、域名、端口号不同请求，称之为跨域
http://localhost:8081/#/home----前端项目本地服务器
接口地址：http://gmall-h5-api.atguigu.cn----后台服务器
JSONP、CROS、代理

8：nprogress进度条的使用
start:进度条开始 done：进度条结束
进度条颜色可以修改，当然需要修改css样式

9:vuex状态管理库
9.1：vuex是什么
vuex是官方提供的一个插件，状态管理库，集中式管理项目中组件共用的数据
切记，并不是所有项目都需要vuex，如果项目很小，完全不需要vuex，如果项目很大，组件很多，数据很多，数据维护很费劲，Vuex是一个很好的插件工具。
state:仓库存储数据的地方
mutations:修改state唯一手段
actions：:处理action，可以书写自己的业务逻辑，也可以处理异步
getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
modules
9.2：vuex基本使用
9.3: vuex实现模块式开发
如果项目过大，组件过多，接口也很多，数据也很多,可以让Vuex实现模块式开发
模拟state存储数据
｛
 home:{},
 search:{}
｝

10:完成TypeNav三级联动展示数据业务
categoryList：
[
  {
    id:1,
    name:"图书、音像、电子书刊"，
    child:[{
      id:1,name:"电子书刊"，child：[
        {
          id:1,name:"电子书"
        }
        ]
    }
    ]
  }
]
