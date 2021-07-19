<template>
  <div
    class="bean"
    :style="[
      {width:$store.state.cell_side + 'px',
        height:$store.state.cell_side + 'px',
        left: position.right * $store.state.cell_side + 'px',
        top: position.top * $store.state.cell_side + 'px',
      },
      $store.state.food_setting.style[type],
    ]"
  ></div>
</template>

<script>
export default {
  name: "Food",
  props: ["position","type"],
};
</script>

<style scoped>
.bean {
  position: absolute;
  display: inline-block;
}
</style>