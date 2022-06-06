<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <!-- 但用户在使用我们封装的按钮时候，需要向HintButton组件传递相应的参数 （el-button进行二次封装） -->
    <HintButton
      type="success"
      icon="el-icon-plus"
      size="mini"
      title="提示按钮"
      @click="handler"
      >按钮</HintButton
    >
  </div>
</template>

<script>
import HintButton from "./HintButton";
export default {
  components: {
    HintButton,
  },
  methods: {
    // 点击事件回调
    handler() {
      alert("点击成功");
      // console.log("点击成功");
    },
  },
};
</script>

<style>
</style>