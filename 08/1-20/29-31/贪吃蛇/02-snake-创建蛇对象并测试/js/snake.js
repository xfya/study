(function () {

  var position = 'absolute';
  var elements = [];
  function Snake(width, height, direction) {
    // 设置每一个蛇节的宽度
    this.width = width || 20;
    this.height = height || 20;
    // 蛇的每一部分, 第一部分是蛇头
    this.body = [
      {x: 3, y: 2, color: 'red'},
      {x: 2, y: 2, color: 'blue'},
      {x: 1, y: 2, color: 'blue'}
    ];
    this.direction = direction || 'right';
  }

  Snake.prototype.render = function(map) {
    for(var i = 0; i < this.body.length; i++) {
      var obj = this.body[i];
      var div = document.createElement('div');
      map.appendChild(div);
      div.style.left = obj.x * this.width + 'px';
      div.style.top = obj.y * this.height + 'px';
      div.style.position = position;
      div.style.backgroundColor = obj.color;
      div.style.width = this.width + 'px';
      div.style.height = this.height + 'px';
    }
  }
  

  window.Snake = Snake;
}())