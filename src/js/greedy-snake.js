import Food from './food.js'

function Greedysnake(setting,id) {
    this.body = [
        { right: 5, top: setting.init_top },
        { right: 4, top: setting.init_top },
        { right: 3, top: setting.init_top },
        { right: 2, top: setting.init_top },
    ];
    this.modify_direction = true;
    this.direction = "right";
    this.key_control = setting.key_ref
    this.name = setting.name
    this.id = id
    this.interval = null
    this.time = 0
    // this.energy = 0
    this.time_per_distance = 30
    this.onspeed = false
}
//前进，考虑所有情况
Greedysnake.prototype.run = function (snakes, foods, range, lost,struck) {
    let next_position
    switch (this.direction) {
        case "up":
            next_position = { right: this.body[0].right, top: this.body[0].top - 1 }
            break;
        case "down":
            next_position = { right: this.body[0].right, top: this.body[0].top + 1 }
            break;
        case "right":
            next_position = { right: this.body[0].right + 1, top: this.body[0].top }
            break;
        case "left":
            next_position = { right: this.body[0].right - 1, top: this.body[0].top }
            break;
    }

    if (next_position.right >= range || next_position.right < 0 || next_position.top >= range || next_position.top < 0) {
        //撞墙如何处理

        //穿越
        next_position.right = (next_position.right + 30) % 30
        next_position.top = (next_position.top + 30) % 30

        //弹框输了
        // lost(snakes.indexOf(this)+1)
        // return
    }

    let strike = 0
    for (let index in snakes) {
        for (let body_index = 0; body_index < snakes[index].body.length-1; body_index++) {
            if (snakes[index].body[body_index].right == next_position.right && snakes[index].body[body_index].top == next_position.top) {
                strike = index
                break
            }
        }
        if (strike) { break }
    }
    if (strike) {
        //撞到蛇身体如何

        //蛇变成豆
        struck(snakes.indexOf(this))


        //弹窗n号玩家输了
        // lost(snakes.indexOf(this) + 1);
        // this.move(next_position);
        return
    }

    let eat = false
    for (let index in foods) {
        if (foods[index].position.right == next_position.right && foods[index].position.top == next_position.top) {
            this.eat()
            eat = true
            this.move(next_position)
            foods[index].run(snakes, foods)
            break
        }
    }
    if (!eat) {
        // console.log(next_position)
        this.move(next_position)
    }
    // console.log(`我${this.name}还活着，并且向前走了一步`)

}
//只管移动，传入下次移动的位置
Greedysnake.prototype.move = function (position) {
    this.modify_direction = true

    for (let i = this.body.length - 1; i > 0; i--) {
        this.body[i] = this.body[i - 1];
    }

    this.body[0] = position
};
//负责改变方向和加速
Greedysnake.prototype.turn = function (keyCode) {
    if (this.modify_direction) {
        switch (keyCode) {
            case this.key_control.left:
                if (["up", "down"].includes(this.direction)) {
                    this.direction = "left";
                    this.modify_direction = false
                }
                 if("left" == this.direction){
                    this.onspeed = true
                }
                break;
            case this.key_control.up:
                if (["right", "left"].includes(this.direction)) {
                    this.direction = "up";
                    this.modify_direction = false
                }
                 if("up" == this.direction){
                    this.onspeed = true
                }
                break;
            case this.key_control.right:
                if (["up", "down"].includes(this.direction)) {
                    this.direction = "right";
                    this.modify_direction = false
                }
                 if("right" == this.direction){
                    this.onspeed = true
                }
                break;
            case this.key_control.down:
                if (["right", "left"].includes(this.direction)) {
                    this.direction = "down";
                    this.modify_direction = false
                }
                 if("down" == this.direction){
                    this.onspeed = true
                }
                break;
        }

    }
}
//负责减速
Greedysnake.prototype.decelerate  = function (keyCode) {
        switch (keyCode) {
            case this.key_control.left:
                if("left" == this.direction){this.onspeed = false}
                break;
            case this.key_control.up:
                if("up" == this.direction){this.onspeed = false}
                break;
            case this.key_control.right:
                if("right" == this.direction){this.onspeed = false}
                break;
            case this.key_control.down:
                if("down" == this.direction){this.onspeed = false}
                break;
        }

    
}
//只管吃豆，加长
Greedysnake.prototype.eat = function () {
    this.body.push({ right: this.body[this.body.length - 1].right, top: this.body[this.body.length - 1].top })
}



export default Greedysnake