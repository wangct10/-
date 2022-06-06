<template>
  <div style="background: #ccc; height: 50px">
    <span>小明每次花100元</span>
    <button @click="$emit('update:money2', money2 - 100)">花钱</button>
    爸爸还剩{{ money2 }}元
  </div>
</template>

<script>
export default {
  props: ["money2"],
};
</script>

<style>
</style>