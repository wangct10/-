复习：
昨天支付（elementUi+qrcode）+个人中心（二级路由）

1)个人中心完成
面试：是否封装过组件、分页器、日历
个人中心：分页器

2）全局守卫
未登录访问，交易相关（trade），支付相关（pay，paysyccess），用户中心（center）相关跳转到登录页面

3)组件独享守卫
只有从购物车界面才能跳转交易页面（创建订单）
只有从交易页面（创建订单）才能跳转到支付页面
只有从支付页面才能跳转到支付成功页面

4)图片懒加载
https://www.npmjs.com/package/vue-lazyload
自定义插件

5)vee-validate 基本使用
第一步：插件安装与引入
npm i vee-validate@2 --save 安装的插件2版本
第二步：提示信息 
VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: (field) => ` ${field}必须与密码相同`
    // 修改内置规则的 message，让确认密码和密码相同 },
  },
  attributes: {
    // 给校验的 field 属性名映射中文名称 
    phone: '手机号',
    code: '验证码',
    password: '密码',
    password1: '确认密码',
    isCheck: '协议'
  }
})
第三步：基本使用
 <input
          placeholder="请输入你的手机号"
          v-model="phone"
          name="phone"
          v-validate="{ required: true, regex: /^1\d{10}$/ }"
          :class="{ invalid: errors.has('phone') }"
        />
 <span class="error-msg">{{ errors.first("phone") }}</span>
const success = await this.$validator.validateAll(); //全部表单验证
//自定义校验规则
//定义协议必须打勾同意
VeeValidate.Validator.extend('agree', {
validate: value => {
return value
},
getMessage: field => field + '必须同意'
})

6）路由懒加载

7)打包上线
6.1 打包npm run build
项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错
有了map，就可以像未加密的代码一样，准确的输出是哪一行那一列有错
所以该文件如果项目不需要是可以去除掉
vue.config.js配置
productionSourceMap：false

6.2购买云服务器
1：阿里云，腾讯云等等
2：设置安全组，让服务器一些端口号打开
3：利用xhsell工具登录服务器
6.3安全组设置
6.4xshell 链接服务器与linux指令
linux /更目录
Linux常用指令：cd跳转目录  ls查看 mkdir创建文件夹 pwd查看绝对路径

6.5nginx反向代理
6.6nginx
1：为什么访问服务器ip地址就可以访问到咱们项目？---配置一些东西
2：项目的数据来自于http://gmall-h5-api.atguigu.cn

nginx配置：
1.xshell进入根目录/etc
2:在etc目录，这个目录下有一个nginx目录，进入到这个目录【已经安装过nginx:如果没有安装过，四五个文件】
3：如果想安装nginx  yum install nginx
4：安装完nginx服务器以后，会发现nginx目录下多了一个nginx.conf文件，在这个文件中进行配置
5：vim nginx.conf进行编辑，主要添加如下两项
解决第一个问题
location / {
  root  /root/..../dist;
  index index.html;
  try_files $uri/ $uri/ /index.html
}
解决第二个问题
loc /api{
  proxy_pass http://gmall-h5-api.atguigu.cn;
}
6:nginx服务器跑起来
service nginx start