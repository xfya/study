(function() {
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that = this;
    }

    Game.prototype.start = function() {
        this.food.render(this.map);
        this.snake.render(this.map);
        // 私有方法
        runSnake(this.snake, this.map);
        // 键盘控制蛇的移动
        bindKey();

    }

    // 蛇移动

    function runSnake() {
        var timerId = setInterval(function() {
            this.snake.move(this.food, this.map);
            this.snake.render(this.map);
            var maxX = this.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX > maxX) {
                clearInterval(timerId)
                alert('Game Over');
            }
            if (headY < 0 || headY > maxY) {
                clearInterval(timerId);
                alert('Game Over');
            }




        }.bind(that), 150)
    }

    //   绑定键盘移动事件

    function bindKey() {
        document.addEventListener("keydown", function(e) {
            switch (e.keyCode) {
                case 37:
                    // left
                    this.snake.direction = 'left';
                    break;
                case 38:
                    // top
                    this.snake.direction = 'top';
                    break;
                case 39:
                    // right
                    this.snake.direction = 'right';
                    break;
                case 40:
                    // bottom
                    this.snake.direction = 'bottom';
                    break;
            }
            // false- false- 默认。事件句柄在冒泡阶段执行

        }.bind(that), false)
    }



    window.Game = Game;
}())