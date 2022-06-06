<template>
  <div>
    <h1>EventTest事件</h1>
    <!-- 原生DOM绑定系统事件 -->
    <button @click="handler">原生Dom绑定原生事件</button>

    <!-- Event1组件:Event1非原生DOM节点，而绑定的click事件并非原生DOM事件，而是自定义事件@click，@click.native可以把自定义事件变为原生DOM事件，当前原生DOMclick事件，其实是给子组件的根节点绑定了点击事件---利用到事件委派 -->
    <Event1 @click.native="handler1"></Event1>

    <!-- 下面的写法是给原生DOM绑定自定义事件，给原生DOM绑定自定义事件是没有任何意义的，因为没有办法触发$emit函数 -->
    <button @xxx="handler2">原生Dom绑定原生事件</button>

    <!-- 该@click和@xxx属于自定义事件 -->
    <Event2 @click="handler3" @xxx="handler3"></Event2>
  </div>
</template>

<script>
import Event1 from "./Event1.vue";
import Event2 from "./Event2.vue";
export default {
  components: {
    Event1,
    Event2,
  },
  methods: {
    // 原生DOMbutton的事件回调
    handler(event) {
      console.log("原生DOM单击事件", Event);
    },
    // Event1的组件回调
    handler1() {
      console.log("原生DOM单击事件");
    },
    // 原生DOM绑定自定义事件
    handler2() {
      console.log("原生DOM单击事件");
    },
    // Event2自定义事件回调
    handler3(params) {
      console.log("原生DOM单击事件", params);
    },
  },
};
</script>

<style>
</style>