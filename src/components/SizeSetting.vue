<template>
  <div>
    <label for="">每行格数 :</label>
    <div class="half">
      <el-input-number
        v-model="$store.state.ui_setting.size"

        :min="1"
        :max="50"
      ></el-input-number>
    </div>
  </div>
  <div>
    <label for="">每格宽度 :</label>
    <div class="half">
      <el-input-number
        v-model="$store.state.cell_side"

        :min="1"
        :max="50"
      ></el-input-number>
    </div>
  </div>
  <div>
    <label for="">豆子数量 :</label>
    <div class="half">
      <el-input-number
        v-model="$store.state.food_setting.num"

        :min="1"
        :max="50"
      ></el-input-number>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
div {
  margin: 5px;
  display: flex;
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
  float:right;
  /* text-align: left; */
  /* padding-left: 40px; */
}
</style>