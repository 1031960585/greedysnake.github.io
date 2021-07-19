<template>
  <div
    v-for="(section,index) in body"
    :key="index"
    :style="[
      { width:$store.state.cell_side + 'px',
        height:$store.state.cell_side + 'px',
        left:section.right * $store.state.cell_side + 'px',
        top: section.top * $store.state.cell_side + 'px',
      },
      index? $store.state.snakes_setting[order].style: [{transform: $store.state.direction[direction]},$store.state.snakes_setting[order].head_style],
    ]"
    class="body"
  ></div>
</template>

<script>
export default {
  name: "snake",
  props: ["body", "order", "direction"],
};
</script>

<style scoped>
.body {
  position: absolute;
  display: inline-block;
}
</style>