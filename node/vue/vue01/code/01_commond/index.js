var cal = require('./cal.js');


var btn = document.getElementById('btn');

btn.onclick = function() {
    var n1 = document.getElementById('n1').value - 0;
    var n2 = document.getElementById('n2').value - 0;


    var sum = cal.add(n1, n2)
    document.getElementById('result').value = sum
}