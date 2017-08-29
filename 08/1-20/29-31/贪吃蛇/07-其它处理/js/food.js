(function (window) {
  var position = 'absolute';
  var elements = [];
  var document = window.document;
  function Food(x, y, width, height, color) {
    this.x = x || 0;
    this.y = y || 0;
    // 食物的宽度和高度(像素)
    this.width = width || 20;
    this.height = height || 20;
    // 食物的颜色
    this.color = color || 'green';
  }

  Food.prototype.render = function (map) {
    remove();
    // 随机食物的位置，map.宽度/food.宽度，总共有多少分food的宽度，随机一下。然后再乘以food的宽度
    this.x = parseInt(Math.random() * map.offsetWidth / this.width) * this.width;
    this.y = parseInt(Math.random() * map.offsetHeight / this.height) * this.height;

    // 动态创建食物对应的div
    var div = document.createElement('div');
    map.appendChild(div);
    div.style.position = position;
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.width = this.width + 'px';
    div.style.height = this.height + 'px';
    div.style.backgroundColor = this.color;
    elements.push(div);
  }

  function remove() {
    for(var i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.parentNode.removeChild(element);
      elements.splice(i, 1);
    }
  }

  window.Food = Food;
}(window, undefined))


