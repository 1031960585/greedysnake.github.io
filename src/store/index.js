import { createStore } from 'vuex';
import avatar from 'js/avatar.js'


export default createStore({
  state: {
    snakes_setting: [
      {
        name:"奔波霸",
        key_ref: { left: 37, up: 38, right: 39, down: 40 },
        init_top: 5,
        head_style: {
          backgroundColor: "#F56CAE",
          backgroundImage: "url(" + avatar[0] + ")",
          // backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          borderRadius: '10px',
        },
        style: {
          backgroundColor: "#42B7FF",
          borderRadius: '5px',
        },
      },
      {
        name:"霸波奔",
        key_ref: { left: 65, up: 87, right: 68, down: 83 },
        init_top: 15,
        head_style: {
          backgroundColor: "#F75524",
          backgroundImage: "url(" + avatar[1] + ")",
          // backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          borderRadius: '10px',
        },
        style: {
          backgroundColor: "#42B7FF",
          borderRadius: '5px',
        },
      },
      {
        name:"达拉崩哒",
        key_ref: { left: 100, up: 104, right: 102, down: 101 },
        init_top: 25,
        head_style: {
          backgroundColor: "#FF0000",
          backgroundImage: "url(" + avatar[2] + ")",
          // backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          borderRadius: '10px',
        },
        style: {
          backgroundColor: "#42B7FF",
          borderRadius: '5px',
        },
      },
    ],
    food_setting: {
      style: [{
        backgroundColor: "#FFD569",
        borderRadius: "3px"
      },{
        backgroundColor: "#B8F2E1",
        borderRadius: "3px",
        backgroundImage: "url(" +require("assets/ghost1.png")+ ")",
        backgroundSize: "100%",
      }],
      num:3
    },
    ui_setting: {
      style: { backgroundColor: "#C5C5C5" },
      size: 30,
    },
    direction: { down: "rotate(0deg)", right: "rotate(270deg)", up: "rotate(180deg)", left: "rotate(90deg)", },
    cell_side:20
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
