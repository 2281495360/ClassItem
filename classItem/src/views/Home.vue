<template>
  <div>
    <Header></Header>
    <NavSwiper></NavSwiper>
    <NewGoodCourse></NewGoodCourse>
    <RecommendGoodCourse></RecommendGoodCourse>
    <Foot></Foot>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";
import NavSwiper from "../components/home/NavSwiper.vue";
import NewGoodCourse from "../components/home/NewGoodCourse.vue";
import Foot from "../components/common/Foot.vue";
import RecommendGoodCourse from "../components/home/recommendGoodCourse.vue";
</script>