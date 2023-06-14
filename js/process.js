
//console.log("load");

(function($){

    
    $(document).ready(function(){
        setTimeout(function(){
            $('body').removeClass('inactive'); 
        }, 300);

        
        TweenMax.set($('.logo'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.menu_toggle'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.sns_wrap'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.title_img'),{css:{y: -10 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.title_story'),{css:{y: 5 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.title_text'),{css:{y: 5 + 'vw', autoAlpha: 0}});

        TweenMax.to($('.logo'), 1, {css: {x:0, autoAlpha: 1}});
        TweenMax.to($('.menu_toggle'), 1, {css: {x:0, autoAlpha: 1}, delay: 0.3});
        TweenMax.to($('.sns_wrap'), 1, {css: {x:0, autoAlpha: 1}, delay:0.3, onComplete:function(){
            TweenMax.to($('.title_img'), 1, {css: {y: 0, autoAlpha: 1}});
            TweenMax.to($('.title_story'),1, {css:{y: 0 , autoAlpha: 1}, delay:0.2});
            TweenMax.to($('.title_text'),1, {css:{y: 0 , autoAlpha: 1}, delay:0.4});
        }});

       

        $(window).scroll(function(event){
             var scroll = $(window).scrollTop();
    
    
             if (scroll >= $('.content01').offset().top - 60) {
               $('.text_box01').addClass('on');
              }

              if (scroll > $('.content02').offset().top - 60) {
                $('.text_box02').addClass('on');
              }

              if (scroll > $('.content03').offset().top - 60) {
                $('.text_box03').addClass('on');
              }

              if (scroll > $('.content04').offset().top - 60) {
                $('.text_box04').addClass('on');
              }

              if (scroll > $('.content05').offset().top - 60) {
                $('.text_box05').addClass('on');
              }

          
        });
        
    });
})(jQuery);
