(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#btn').click(start);
  }

  function start(){
    var colors = $('#input').val().split(',').map(trim).map(makeDiv);
    $('#container').append(colors);
  }

  function trim(color){
    return color.trim();
  }

  function makeDiv(color){
    var number = color.length;
    var newDiv = '<div class = "square">'+number+'</div>';
    return $(newDiv).css('background-color', color);
  }

})();
