<template>
  <game-ui>
    <food
      v-for="(food, index) in $foods"
      :key="index"
      :position="food.position"
      :type="food.type"
    />
    <snake
      v-for="(snake, index) in $snakes"
      :key="index"
      :body="snake.body"
      :order="snake.id"
      :direction="snake.direction"
    ></snake>
  </game-ui>
  <el-card
    class="settings"
    :style="{
      height: $store.state.ui_setting.size * $store.state.cell_side + 'px',
    }"
  >
    <div class="btn_con">
      <el-button type="primary" @click="begin" class="left">开始游戏</el-button>
      <el-button
        type="primary"
        @click="modify_player_num(1)"
        :plain="!(player_num == 1)"
        >单人模式</el-button
      >
      <el-button
        type="primary"
        @click="modify_player_num(2)"
        :plain="!(player_num == 2)"
        >双人模式</el-button
      >
      <el-button
        type="primary"
        @click="modify_player_num(3)"
        :plain="!(player_num == 3)"
        >三人模式</el-button
      >
    </div>
    <score></score>
    <color-picker></color-picker>
    <size-setting></size-setting>
  </el-card>
</template>

<script>
import FoodArray from "js/food.js";
import GreedySnake from "js/greedy-snake.js";
import Food from "components/Food.vue";
import Score from "components/Score.vue";
import GameUi from "components/GameUi.vue";
import Snake from "components/Snake.vue";
import ColorPicker from "components/ColorPicker.vue";
import SizeSetting from "components/SizeSetting.vue";
import { reactive } from "vue";

export default {
  name: "Game",
  data() {
    return {
      // button_text: "开始游戏",
      game_run: false,
      player_num: 1,
      time: 30,
    };
  },
  methods: {
    begin() {
      if (!this.game_run) {
        for (let index in this.$snakes) {
          this.$snakes[index].interval = setInterval(
            this.snake_run,
            this.$snakes[index].time_per_distance,
            this.$snakes[index]
          );
        }
        this.game_run = true;
      }
    },
    snake_run(snake) {
      // debugger
      // console.log(snake.onspeed);
      if (snake.onspeed && snake.time_per_distance == 30) {
        clearInterval(snake.interval), 
        snake.time_per_distance = 10
        snake.interval = setInterval(this.snake_run, snake.time_per_distance, snake);
      } else if (!snake.onspeed&& snake.time_per_distance == 10){
        clearInterval(snake.interval), 
        snake.time_per_distance = 30
        snake.interval = setInterval(this.snake_run, snake.time_per_distance, snake);
      }else if(++snake.time % 10 == 0) {
        // console.log("前进")
        snake.run(
          this.$snakes,
          this.$foods,
          this.$store.state.ui_setting.size,
          this.lost,
          this.struck
        );
      }
    },
    lost(index) {
      clearInterval(this.game_run);
      this.game_run = null;
      this.button_text = "开始游戏";
      alert(index + "号玩家输了");
    },
    modify_player_num(num) {
      if (num == this.player_num) {
        return;
      }
      for (let index in this.$snakes) {
        clearInterval(this.$snakes[index].interval);
      }
      this.$snakes.length = 0;
      for (let i = 0; i < num; i++) {
        this.$snakes.push(
          reactive(new GreedySnake(this.$store.state.snakes_setting[i], i))
        );
      }
      this.updata_foods();
      this.player_num = num;
      this.game_run = false;
    },
    updata_foods() {
      this.$foods.length = 0;
      for (let i = 0; i < this.$store.state.food_setting.num; i++) {
        this.$foods.push(reactive(new FoodArray[0]()));
      }
      // console.log(this.$foods[0])
      for (let index in this.$foods) {
        this.$foods[index].run(this.$snakes, this.$foods);
      }
    },
    struck(index) {
      for (let body_index in this.$snakes[index].body) {
        this.$foods.push(
          reactive(new FoodArray[1](this.$snakes[index].body[body_index]))
        );
      }
      clearInterval(this.$snakes[index].interval);
      delete this.$snakes[index];
      this.$snakes.splice(index, 1);
      // console.log(this.$foods)
    },
  },
  components: {
    Food,
    GameUi,
    Snake,
    ColorPicker,
    SizeSetting,
    Score,
  },
  created() {
    for (let i = 0; i < this.player_num; i++) {
      this.$snakes.push(
        reactive(new GreedySnake(this.$store.state.snakes_setting[i], i))
      );
    }
    this.updata_foods();
    document.onkeydown = (event) => {
      for (let index in this.$snakes) {
        this.$snakes[index].turn(event.keyCode);
      }
    };
    document.onkeyup = (event) => {
      for (let index in this.$snakes) {
        this.$snakes[index].decelerate(event.keyCode);
      }
    };
  },
};
</script>

<style scoped>
.settings {
  overflow: auto;
}

.left {
  position: absolute;
  left: 0px;
}

.btn_con {
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 0px 150px;
}
</style>