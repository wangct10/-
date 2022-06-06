<template>
  <div>
    <h1>组件间通信高级（非常重要。面试必备）</h1>
    <router-link
      to="/communication/eventtest"
      custom
      v-slot="{ navigate, isActive }"
    >
      <span @click="navigate" :class="isActive ? 'wangactive' : ''">
        <span>Event事件深入</span>
      </span>
    </router-link>

    <router-link
      to="/communication/modeltest"
      custom
      v-slot="{ navigate, isActive }"
    >
      <span @click="navigate" :class="isActive ? 'wangactive' : ''">
        <span>v-model深入</span>
      </span>
    </router-link>

    <router-link
      to="/communication/synctest"
      custom
      v-slot="{ navigate, isActive }"
    >
      <span @click="navigate" :class="isActive ? 'wangactive' : ''">
        <span>属性修饰符sync</span>
      </span>
    </router-link>

    <router-link
      to="/communication/attrslistenerstest"
      custom
      v-slot="{ navigate, isActive }"
    >
      <span @click="navigate" :class="isActive ? 'wangactive' : ''">
        <span>$attrs与$listeners</span>
      </span>
    </router-link>

    <router-link
      to="/communication/childrenparenttest"
      custom
      v-slot="{ navigate, isActive }"
    >
      <span @click="navigate" :class="isActive ? 'wangactive' : ''">
        <span>$children与$parent</span>
      </span>
    </router-link>

    <router-link
      to="/communication/scopeslottest"
      custom
      v-slot="{ navigate, isActive }"
    >
      <span @click="navigate" :class="isActive ? 'wangactive' : ''">
        <span>作用域插槽scope-slot</span>
      </span>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
span {
  display: inline-block;
  margin: 5px 2px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
.wangactive {
  color: red;
}
</style>