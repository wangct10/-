<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// 引入
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";
import { mapActions } from "vuex";
export default {
  components: {
    Header,
    Footer,
  },
  methods: {
    ...mapActions("home", ["categoryList"]),
  },
  mounted() {
    // 派发一个action|获取商品分类的三级列表的数据
    // 通知vuex发请求，获取数据，存储于仓库当中
    // 根组件只加载一次，减轻服务器压力
    this.categoryList();
  },
};
</script>

<style>
</style>
