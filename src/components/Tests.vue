<template>
  <div>
    <SliderComponent :minValue="0" :maxValue="50"></SliderComponent>
  </div>
</template>

<script>
import SliderComponent from "@/components/SliderComponent";
export default {
  name: "Tests.vue",
  data: function() {
    return {};
  },
  components: {
    SliderComponent
  }
};
</script>

<style scoped>
</style>
