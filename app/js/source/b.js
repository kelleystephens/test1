(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#flip').click(flip);
  }

  var hcount = 0;
  var tcount = 0;

  function flip(){
    var x = Math.floor(Math.random() * 2) +1;

    if(x === 1){
      hcount += 1;
    } else{
      tcount += 1;
    }

    $('#hcount').text(hcount);
    $('#tcount').text(tcount);

  }



})();
