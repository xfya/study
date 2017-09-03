(function() {
    var that = null;

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
        // console.log(this.snake)
        // console.log(this.food)
        runSnake();
        // 键盘控制蛇的移动
        bindKey();
    }

    function runSnake() {
        // console.log(this.food)
        var timerId = setInterval(function() {
            // console.log(this.food)
            this.snake.move(this.food, this.map);
            // 在渲染前，删除之前的蛇
            this.snake.render(this.map);

            // 判断蛇是否撞墙
            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height;
            var headX = this.snake.body[0].x;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX) {
                clearInterval(timerId);
                alert('Game Over');
            }

            if (headY < 0 || headY >= maxY) {
                clearInterval(timerId);
                alert('Game Over');
            }

        }.bind(that), 150);
    }

    function bindKey() {
        document.addEventListener('keydown', function(e) {
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
        }.bind(that), false);
    }

    window.Game = Game;
}())