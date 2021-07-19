<template>
  <div
    :style="[
      {
        width: $store.state.ui_setting.size * $store.state.cell_side +'px',
        height:$store.state.ui_setting.size * $store.state.cell_side +'px',
      },
      $store.state.ui_setting.style,
    ]"
    class="back"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gameui",
};
</script>

<style scoped>
.back {
  position: relative;
  float: left;
}
</style>