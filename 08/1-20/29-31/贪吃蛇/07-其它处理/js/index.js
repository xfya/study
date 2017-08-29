(function (window, undefine) {
  var document = window.document;
  var map = document.getElementById('map');
  var game = new Game(map);
  game.start();
}(window, undefined))
