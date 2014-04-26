(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#btn').click(squareIt);
  }



  function squareIt(){
    var nums = $('#input').val();
    var array = nums.split(',');
    
    for(var i = 0; i < array.length; i++){
      var x = array[i] * 1;
      var y = Math.pow(x, 2);
      var $div = $('<div>');
      if(y % 2){
        $('#evens').append($div).text(y);
      }else{
        $('#odds').append($div).text(y);
      }
    }
  }




})();
