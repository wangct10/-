<template>
  <div>
    <h2>爸爸有存款：{{ money }}</h2>
    <button @click="borrowMoneyFromXm(100)">找小明借钱100</button>
    <br />
    <button @click="borrowMoneyFromXH(150)">找小红借钱150</button>
    <br />
    <button @click="borrowMoneyFromAll(200)">找所有孩子借钱200</button>
    <br />
    <!-- ref:获取节点（组件标签） -->
    <!-- 在vue组件当中可以通过ref获取子组件，就可以进行操作子组件数据与方法 -->
    <Son ref="xm"></Son>
    <br />
    <Daughter ref="xh"></Daughter>
  </div>
</template>

<script>
import Son from "./Son.vue";
import Daughter from "./Daughter.vue";
export default {
  data() {
    return {
      money: 1000,
    };
  },
  methods: {
    // 向儿子小明借钱
    borrowMoneyFromXm(money) {
      // 父组件的钱数累加100元
      this.money += money;
      // 子组件son的钱数累减100元
      // ref可以获取真实的DOM节点，当然也可以获取子组件标签（操作子组件的数据与方法）
      this.$refs.xm.money -= money;
    },
    // 向女儿小红借钱
    borrowMoneyFromXH(money) {
      // 父组件的钱数累加150元
      this.money += money;
      // 子组件Daughter的钱数累减150元
      this.$refs.xh.money -= money;
      // console.log(this);
      // console.log(this.$children);
      // console.log(this.$refs);
    },
    // 向所有孩子借钱
    borrowMoneyFromAll(money) {
      this.money += 2 * money;
      // 组件实例自身拥有一个属性$children,可以获取到当前组件当中，全部子组件

      this.$children.forEach((item) => {
        item.money -= 200;

        // 切记别这样写：如果子组件过多，第0项可能不是小明,用ref最好
        // this.$children[0].money -= 200;
        // this.$children[1].money -= 200;
      });
    },
  },
  components: {
    Son,
    Daughter,
  },
};
</script>

<style>
</style>