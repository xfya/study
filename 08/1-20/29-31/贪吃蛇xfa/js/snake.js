(function() {

    var position = 'absolute';
    var elements = [];

    function Snake(width, height, direction) {
        // 设置每一个蛇节的宽度
        this.width = width || 20;
        this.height = height || 20;
        // 蛇的每一部分, 第一部分是蛇头
        this.body = [
            { x: 3, y: 2, color: 'red' },
            { x: 2, y: 2, color: 'blue' },
            { x: 1, y: 2, color: 'blue' }
        ];
        this.direction = direction || 'right';
    }

    Snake.prototype.render = function(map) {

        remove();
        for (var i = 0; i < this.body.length; i++) {
            var obj = this.body[i];
            var div = document.createElement('div');
            map.appendChild(div);
            div.style.left = obj.x * this.width + 'px';
            div.style.top = obj.y * this.height + 'px';
            div.style.position = position;
            div.style.backgroundColor = obj.color;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            elements.push(div);
        }
    }

    Snake.prototype.move = function(food, map) {
        var i = this.body.length - 1;
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y
        }

        switch (this.direction) {
            case 'left':
                this.body[0].x -= 1;
                break;
            case 'right':
                this.body[0].x += 1;
                break;
            case 'top':
                this.body[0].y -= 1;
                break;
            case 'bottom':
                this.body[0].y += 1;
                break;
        }
    }

    function remove() {
        var i = elements.length - 1;
        for (; i >= 0; i--) {
            // 删除页面上渲染的蛇
            elements[i].parentNode.removeChild(elements[i]);
            // 删除elements数组中的元素
            elements.splice(i, 1);
        }

    }


    window.Snake = Snake;
}())