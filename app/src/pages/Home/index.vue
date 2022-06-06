<template>
  <div>
    <!-- 三级联动全局组件，三级联动已经注册为全局组件，因此不需要再引入 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <!-- Floor自己在组件内部没有发请求的，数据是父组件给的 -->
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"> </Floor>

    <Brand></Brand>
  </div>
</template>

<script>
//引入其余组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    this.getFloorList();
  },
  methods: {
    ...mapActions("home", ["getFloorList"]),
  },
  computed: {
    ...mapState("home", ["floorList"]),
  },
};
</script>

<style>
</style>