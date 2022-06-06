// 封装JS
export default {
  // 对外暴露的对象，可以放置组件重复JS业务逻辑
  methods: {
    // 给爸爸钱的回调函数
    giveMoney(money) {
      this.money -= money;
      // 需要在子组件内部，获取到父组件，让父组件的数据加上50
      // console.log(this);
      this.$parent.money += money;
    },
  },
}