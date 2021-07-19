import random from "@/js/random.js"
import store from '@/store'

function Food(type) {
  this.type = type
}


function JumpFood(positoin = { right: undefined, top: undefined }) {
  this.position = positoin
};
JumpFood.prototype = {
  ...new Food(0), constructor: JumpFood, run: function (snakes, foods) {
    let allow_position;
    let occupy;
    do {
      occupy = false
      allow_position = { right: random(store.state.ui_setting.size), top: random(store.state.ui_setting.size) }
      for (let index in snakes) {
        for (let body_index in snakes[index].body) {
          if (snakes[index].body[body_index].right == allow_position.right && snakes[index].body[body_index].top == allow_position.top) {
            occupy = true
            break
          }
        }
        if (occupy) { break }
      }
      
      if (!occupy) {
        for (let index in foods) {
          // console.log(foods[index])
          if (foods[index].position.right == allow_position.right && foods[index].position.top == allow_position.top) {
            occupy = true
            break
          }
        }
      }
    } while (occupy)
    this.position = allow_position
  }
}


function StaticFood(positoin = { right: undefined, top: undefined }) {
  this.position = positoin
};
StaticFood.prototype = {
  ...new Food(1), constructor: StaticFood, run: function (snakes, foods) {
foods.splice(foods.indexOf(this),1)
  }
}



export default [JumpFood,StaticFood]