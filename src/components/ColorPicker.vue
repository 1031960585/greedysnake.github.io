<template>
  <div>
    <label for="">背景豆子颜色选择器 :</label>
    <div class="half">
      <el-color-picker
        v-model="$store.state.ui_setting.style.backgroundColor"
      ></el-color-picker>
      <el-color-picker
        v-model="$store.state.food_setting.style[0].backgroundColor"
      ></el-color-picker>
            <el-color-picker
        v-model="$store.state.food_setting.style[1].backgroundColor"
      ></el-color-picker>
    </div>
  </div>
  <div v-for="snake in $snakes" :key="snake.id">
    <label for="">{{ snake.name }}の颜色选择器 :</label>
    <div class="half">
      <el-color-picker
        v-model="$store.state.snakes_setting[snake.id].style.backgroundColor"
      ></el-color-picker>
      <el-color-picker
        v-model="$store.state.snakes_setting[snake.id].head_style.backgroundColor"
      ></el-color-picker>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 5px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
div > label {
  width: 50%;
  margin-right: 30px;
  color: #606266;
  text-align: right;
}

div.half {
  width: 50%;
  float: right;
}

:deep().el-color-picker{
  margin-right: 30px;
}
</style>