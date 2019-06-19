/*mobile.js*/

(function($){


//===================================widhth pack
var winW = $(window).width();
var mob = 480;
var tab = 768;
var pc = 1366;
var device; 
// console.log(winW);


// ===================================reload

var div = function(winW){
    if(winW <= mob){device = "mob"}
    else if(mob < winW && tab >= winW){device = "tab"}
    else if(tab < winW && pc >= winW){device = "pc"}
    else {device = "pcfull"}
  };

var before = div(winW);

$(window).on('resize', function(){
  var nw = $(window).width();
  var nowD = div(nw);
  if(nw !== nowD){
  location.reload();
  }; }); 


//====================================mobile.js start

if(winW <= mob){




};
//=====================================mobile.js end
})(jQuery);