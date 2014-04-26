(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#flip').click(randomNum);
  }

  function randomNum(){
    var flip = Math.floor(Math.random() * 2) + 1;
    count(flip);
  }

  var htotal = 0;
  var ttotal = 0;


  function count(num){
    if(num === 1){
      $('#hcount').text(htotal += 1);
    }else{
      $('#tcount').text(ttotal += 1);
    }
    getPercent();
  }

  var totalFlips = 0;

  function getPercent(){
    totalFlips++;
      var hper = (htotal/totalFlips).toFixed(2);
      var tper = (ttotal/totalFlips).toFixed(2);
      $('#hpercent').text(hper + '%');
      $('#tpercent').text(tper + '%');
  }


})();
