<template>
  <div>
    小明的爸爸现在有{{ money1 }}元
    <h2>不使用sync修改符</h2>
    <!-- 
      :money 父组件给子组件传递props
      @update_money 给子组件绑定的自定义事件只不过名字叫做update_money
      目前现在这种操作，起始和v-model很相似，可以实现父子组件数据同步
     -->
    <Child :money="money1" @update:money="money1 = $event"></Child>
    <h2>使用sync修改符</h2>
    <!-- ：money.sync:第一，动态绑定属性 父组件给字符串传递props money
    第二，给当前子组件绑定了一个自定义事件，而且事件名称即为update：money -->
    <Child2 :money2.sync="money1"></Child2>
  </div>
</template>

<script>
import Child from "./Child.vue";
import Child2 from "./Child2.vue";
export default {
  data() {
    return {
      money1: 10000,
    };
  },
  components: {
    Child,
    Child2,
  },
};
</script>

<style>
</style>