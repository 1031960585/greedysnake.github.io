<template>
  <div class="score">
    <div v-for="snake in $snakes" :key="snake.id">
      <el-avatar size="small" :src="avatar[snake.id]"></el-avatar>
      <el-tag type="success"
        >{{snake.name}}得分:{{ snake.body.length }}</el-tag>
    </div>
  </div>
</template>

<script>
import avatar from 'js/avatar.js'
export default {
  data(){
    return{
      avatar
    }
  }
}
</script>

<style scoped>
.score{
    margin: 15px;
      display: flex;
  justify-content: space-around;
  padding: 0px 150px;
}
.score div {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>