复习：
1）商品分类的三级列表由静态变为动态形式【获取服务器数据：解决跨域问题】
2）函数防抖与节流【面试频率很好】
3）路由跳转：声明式导航（router-link）、编程式导航
编程式导航解决问题：自定义属性

1:开发Search模块中的TypeNav商品分类菜单（过渡动画效果）
过渡动画：前提组件|元素务必要有v-if|v-show指令才可以进行过渡动画

2:对商品分类三级列表可以进行优化
在App根组件当中发请求【根组件mounted】执行一次

3:合并params与query参数

4：开发Home首页当中ListContainer组件与Floor组件？
但是服务器返回的数据（接口）只有商品分类菜单分类数据，对于ListContainer组件与Floor组件数据服务器没有提供
mock数据（模拟）：如果你想mock数据，需要用到一个插件mock.js
使用步骤：
1）在项目当中src文件夹中创建mock文件夹
2)准备JSON数据（mock文件夹中创建相应的JSON的文件）---格式化，别留空格（跑不起来）
3）把mock数据需要的图片放置到public文件夹中【public文件夹在打包的时候，会把相应的资源原封不动打包到dist文件夹中】
4）创建mockServer.js通过mockjs插件实现模拟数据
5)mockServer.js文件在入口文件中会引入（至少需要执行一次，才能模拟数据）

5：ListContainer组件开发重点
安装Swiper插件：最新版本6，安装版本swiper@5
npm install --save swiper@5
<!-- 第一步：引包 -->
<!-- 第一步：页面中结构务必要有-->
<!-- 第三步：页面当中务必要有结构 ：new Swiper实例【轮播图添加动态效果】-->