// console.log('연결 확인');

(function($){
    $(document).ready(function(){
        setTimeout(function(){
            $('body').removeClass('inactive'); 
          }, 300);

        $(".menu_toggle").on('click', function() {
            $(this).toggleClass("on");

            $(".nav").toggleClass('on');
          });

        gsap.set($('.logo'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        gsap.set($('.menu_toggle'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        gsap.set($('.sns_wrap'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        gsap.set($('.video_background'),{css:{autoAlpha: 0}});
        gsap.set($('.main_content'),{css:{y: 20 , autoAlpha: 0}});

            gsap.to($('.logo'), 1, {css: {x:0, autoAlpha: 1}});
            gsap.to($('.menu_toggle'), 1, {css: {x:0, autoAlpha: 1}, delay: 0.3});
            gsap.to($('.sns_wrap'), 1, {css: {x:0, autoAlpha: 1}, delay:0.3, onComplete:function(){
                gsap.to($('.video_background'),1, {css:{autoAlpha: 1}});
                gsap.to($('.main_content'),1, {css:{y: 0, autoAlpha: 1},delay:0.5});
            }});
          
    })
})(jQuery);


