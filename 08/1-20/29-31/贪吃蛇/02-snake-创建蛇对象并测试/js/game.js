(function() {
  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
  }

  Game.prototype.start = function () {
    this.food.render(this.map);
    this.snake.render(this.map);
  }

  window.Game = Game;
}())