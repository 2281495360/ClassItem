<template>
  <div>
    <Header></Header>
    <NavSwiper></NavSwiper>
    <div ref="target">
      <NewGoodCourse v-if="targetIsVisible"></NewGoodCourse>
    </div>
    <div ref="targetRecommend">
      <RecommendGoodCourse
        v-if="targetRecommendIsVisible"
      ></RecommendGoodCourse>
    </div>
    <Foot></Foot>
  </div>
</template>

<script setup>
import Header from "../components/common/Header.vue";
import NavSwiper from "../components/home/NavSwiper.vue";
import Foot from "../components/common/Foot.vue";
// 按需加载组件
import { useIntersectionObserver } from "@vueuse/core";
const NewGoodCourse = defineAsyncComponent(() =>
  import("../components/home/NewGoodCourse.vue")
);
const RecommendGoodCourse = defineAsyncComponent(() =>
  import("../components/home/recommendGoodCourse.vue")
);

const target = ref(null);
const targetIsVisible = ref(false);
const targetRecommend = ref(null);
const targetRecommendIsVisible = ref(false);

const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    targetIsVisible.value = isIntersecting;
  }
});
const { stopRecommend } = useIntersectionObserver(
  targetRecommend,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      targetRecommendIsVisible.value = isIntersecting;
    }
  }
);
</script>