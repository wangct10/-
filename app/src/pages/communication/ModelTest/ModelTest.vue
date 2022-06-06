<template>
  <div>
    <h2>深入v-model</h2>
    <input type="text" v-model="msg" />
    <span>{{ msg }}</span>
    <br />
    <h2>v-model实现原理</h2>
    <!-- 原生DOM当中是有oninput事件，它经常结合表单元素一起使用，当表单元素文本内容发生变化的时候就会触发一次回调
    Vue2：可以通过value与input事件实现v-model功能
     -->
    <input type="text" :value="msg" @input="msg = $event.target.value" />
    <span>{{ msg }}</span>
    <!--深入学习v-model:实现父子组件数据同步（实现父子组件通信）  -->
    <!-- value是父传子props用的 -->
    <!-- @input到底是什么？非原生DOM事件，而是自定义事件 -->
    <CustomInput :value="msg" @input="msg = $event" />
    <!-- 组件v-model 子组件要绑定value和@input -->
    <CustomInput v-model="msg" />
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";
export default {
  components: {
    CustomInput,
  },
  data() {
    return {
      msg: "我爱你",
    };
  },
};
</script>

<style>
</style>