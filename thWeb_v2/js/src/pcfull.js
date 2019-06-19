/*pcfull.js*/ 


(function($){

//===================================widhth pack
var winW = $(window).width();
var mob = 480;
var tab = 768;
var pc = 1367;
var win = $(window);
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




//====================================pcfull.js start


if($(window).width() >1366) {  



//====================================gnb
var btn = $('.gnb_btn');


//=============================gnb_btn animation
btn.on('click' , function(e){
     e.preventDefault();
     btn.stop().toggleClass('active_btn');
});    

var headLink = $('#headBox')
var headBg = function(){
          var st = win.scrollTop();
          if(st > 0){headLink.css({backgroundPosition : '0 0'});
          }else{headLink.css({backgroundPosition : '0 -70px'});}
        };
        headBg();
          
     
        win.on('scroll' ,function(){
        headBg();
});

var headLogo = $('.head_logo')
var logoFade = function(){
          var st = win.scrollTop();
          if(st > 0){headLogo.fadeIn(700);
          }else{headLogo.fadeOut(300);}
        };
        logoFade();
          
     
        win.on('scroll' ,function(){
        logoFade();
});
        


//============================gnb fadeIn
btn.on('click' , function(e){
    e.preventDefault();
    $('.gnb_menu').stop().fadeToggle(500);
});
//============================gnb
 $('.move_target').mouseover(function() {
 
        $(this).css({ color : '#ffffff',
                      backgroundColor : '#111111'});
    }).mouseout(function(){
        $(this).css({ color : '#aaaaaa',
                      backgroundColor : 'rgba(255,255,255,0)'});
    });






//=====================================gnb target scroll          

$('.move_target').on('click', function (e) {
    e.preventDefault();
    var thisTarget = $(this).attr('href');
    $('html,body').animate({scrollTop:$(thisTarget).offset().top},400);
});
 
//=============================scroll event

  window.onload = function () {
                 

            var elm = "section";
            $(elm).each(function (index) {
               
                $(this).on("mousewheel DOMMouseScroll", function (e) {
                    e.preventDefault();
                    var delta = 0;
                    if (!event) event = window.event;
                    if (event.wheelDelta) {
                        delta = event.wheelDelta / 120;
                        if (window.opera) delta = -delta;
                    } 
                    else if (event.detail)
                        delta = -event.detail / 3;
                    var moveTop = $(window).scrollTop();
                    var elmSelecter = $(elm).eq(index);
                    // 마우스휠을 위에서 아래로
                    if (delta < 0) {
                        if ($(elmSelecter).next() != undefined) {
                            try{
                                moveTop = $(elmSelecter).next().offset().top;
                            }catch(e){}
                        }
                    // 마우스휠을 아래에서 위로
                    } else {
                        if ($(elmSelecter).prev() != undefined) {
                            try{
                                moveTop = $(elmSelecter).prev().offset().top;
                            }catch(e){}
                        }
                    }
                     
                    // 화면 이동 0.8초(800)
                    $("html,body").stop().animate({
                        scrollTop: moveTop + 'px'
                    }, {
                        duration: 300, complete: function () {
                        }
                    });
                });
            });
        }
//==========================================Topscroll
var topScroll = $('.top_btn_wrap')
var scrollUp = function(){
          var st = win.scrollTop();
          if(st >= 300){topScroll.fadeIn(700);
          }else{topScroll.fadeOut(300);}
        };
        scrollUp();
          
     
        win.on('scroll' ,function(){
        scrollUp();
});

$('.top_btn_wrap a').on('click', function (e) {
    e.preventDefault();
    var topTarget = $(this).attr('href');
    $('html,body').animate({scrollTop:$(topTarget).offset().top},400);
});        
//========================================animate
var win = $(window);
$(document).ready(function(){ 
                 $('.line_shape').fadeIn(300).animate({ height: '15%' },600);
                 $('#headBox').fadeIn(300).animate;
                                                     
    

                             });
                
//============================mob WOW animate
new WOW().init();


//=============================================header
$('.logo').addClass('wow fadeIn').attr('data-wow-duration','4s');

$('.head_text01').addClass('wow fadeInUp').attr('data-wow-duration','2s');
$('.head_text01').attr('data-wow-delay','0.9s');
$('.head_text02').addClass('wow fadeInUp').attr('data-wow-duration','2.5s');
$('.head_text02').attr('data-wow-delay','1.2s');  
//=============================================info
$('.info_bar').addClass('wow fadeInUp').attr('data-wow-duration','1s');
$('.info_bar').attr('data-wow-delay','0.1s');
$('.info_logo').addClass('wow fadeInDown').attr('data-wow-duration','1.5s');
$('.info_logo').attr('data-wow-delay','0.1s');
$('.my_img').addClass('wow fadeIn').attr('data-wow-duration','2s');
$('.my_img').attr('data-wow-delay','0.3s');
$('.info_name01').addClass('wow fadeInLeft').attr('data-wow-duration','2s');
$('.info_name01').attr('data-wow-delay','0.3s');
$('.info_name02').addClass('wow fadeInRight').attr('data-wow-duration','2s');
$('.info_name02').attr('data-wow-delay','0.3s');
$('.info_tag').addClass('wow fadeInUp').attr('data-wow-duration','1s');
$('.info_tag').attr('data-wow-delay','0.3s');
//=============================================banner
$('.banner_img').addClass('wow fadeInUp').attr('data-wow-duration','2.5s');
$('.p_move01').addClass('wow fadeInUp').attr('data-wow-duration','1.5s');
$('.p_move01').attr('data-wow-delay','0.3s');

$('.p_move03').addClass('wow fadeInUp').attr('data-wow-duration','2s');
$('.p_move03').attr('data-wow-delay','0.5s');

//=============================================contents
$('.more_arow').addClass('wow fadeIn').attr('data-wow-duration','2s');
$('.more_arow').attr('data-wow-iteration','20');
//=============================================footer
$('.end_text').addClass('wow fadeInUp').attr('wow-data-offset','3568');
$('.end_text').attr('data-wow-delay','0.3s');
$('.footBox').addClass('wow fadeInUp').attr('wow-data-offset','3568');

};//===============================================pcfull.js end
var NowScroll = $(document).scrollTop(); 
console.log(NowScroll);


})(jQuery);        