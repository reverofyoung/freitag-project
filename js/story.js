//console.log('연결이 되었삼');

(function($){
    $(document).ready(function(){
        setTimeout(function(){
            $('body').removeClass('inactive'); 
          }, 300);
    
        gsap.set($('.logo'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        gsap.set($('.menu_toggle'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        gsap.set($('.sns_wrap'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        gsap.set($('.img_wrap'),{css:{x: 40 , autoAlpha: 0}});
        gsap.set($('.text_top'),{css:{y: 40 , autoAlpha: 0}});
        gsap.set($('.text_mid'),{css:{y: 40 , autoAlpha: 0}});
        gsap.set($('.text_bottom'),{css:{y: 40 , autoAlpha: 0}});

        gsap.to($('.logo'), 1, {css: {x:0, autoAlpha: 1}});
        gsap.to($('.menu_toggle'), 1, {css: {x:0, autoAlpha: 1}, delay: 0.3});
        gsap.to($('.sns_wrap'), 1, {css: {x:0, autoAlpha: 1}, delay:0.3, onComplete:function(){
            gsap.to($('.img_wrap'),1, {css:{x: 0, autoAlpha: 1}});
            gsap.to($('.text_top'),1, {css:{y: 0 , autoAlpha: 1}, delay:0.3});
            gsap.to($('.text_mid'),1, {css:{y: 0 , autoAlpha: 1}, delay:0.6});
            gsap.to($('.text_bottom'),1, {css:{y: 0, autoAlpha: 1}, delay:0.9});
        }});
               
          var doAnimations = function() {
    
            // Calc current offset and get all animatables
            var offset = $(window).scrollTop() + $(window).height(),
                $animatables = $('.animatable');
            
            // Unbind scroll handler if we have no animatables
            if ($animatables.length == 0) {
              $(window).off('scroll', doAnimations);
              
            //   gsap.set($('#img_wrap'),{css:{x: 40 , autoAlpha: 0}});
              gsap.set($('#text_top'),{css:{y: 40 , autoAlpha: 0}});
              gsap.set($('#text_mid'),{css:{y: 40 , autoAlpha: 0}});
              gsap.set($('#text_bottom'),{css:{y: 40 , autoAlpha: 0}});
            }
            
            // Check all animatables and animate them if necessary
                $animatables.each(function(i) {

                var $animatable = $(this);

                    if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                    $animatable.removeClass('animatable').addClass('animated');

                        // gsap.to($('#img_wrap'),1, {css:{x: 0, autoAlpha: 1}});
                        gsap.to($('#text_top'),1, {css:{y: 0 , autoAlpha: 1}, delay:0.3});
                        gsap.to($('#text_mid'),1, {css:{y: 0 , autoAlpha: 1}, delay:0.6});
                        gsap.to($('#text_bottom'),1, {css:{y: 0, autoAlpha: 1}, delay:0.9});
                    }
                });
            };
         
            // Hook doAnimations on scroll, and trigger a scroll
            $(window).on('scroll', doAnimations);
            $(window).trigger('scroll');
    });

})(jQuery);