//console.log('연결이 되었삼');

(function($){
    $(document).ready(function(){

        setTimeout(function(){
            $('body').removeClass('inactive'); 
          }, 300);
    

        TweenMax.set($('.logo'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.menu_toggle'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.sns_wrap'),{css:{x: -20 + 'vw', autoAlpha: 0}});
        TweenMax.set($('.img_wrap'),{css:{x: 40 , autoAlpha: 0}});
        TweenMax.set($('.text_top'),{css:{y: 40 , autoAlpha: 0}});
        TweenMax.set($('.text_mid'),{css:{y: 40 , autoAlpha: 0}});
        TweenMax.set($('.text_bottom'),{css:{y: 40 , autoAlpha: 0}});

        TweenMax.to($('.logo'), 1, {css: {x:0, autoAlpha: 1}});
        TweenMax.to($('.menu_toggle'), 1, {css: {x:0, autoAlpha: 1}, delay: 0.3});
        TweenMax.to($('.sns_wrap'), 1, {css: {x:0, autoAlpha: 1}, delay:0.3, onComplete:function(){
            TweenMax.to($('.img_wrap'),1, {css:{x: 0, autoAlpha: 1}});
            TweenMax.to($('.text_top'),1, {css:{y: 0 , autoAlpha: 1}, delay:0.3});
            TweenMax.to($('.text_mid'),1, {css:{y: 0 , autoAlpha: 1}, delay:0.6});
            TweenMax.to($('.text_bottom'),1, {css:{y: 0, autoAlpha: 1}, delay:0.9});
        }});
               
          var doAnimations = function() {
    
            // Calc current offset and get all animatables
            var offset = $(window).scrollTop() + $(window).height(),
                $animatables = $('.animatable');
            
            // Unbind scroll handler if we have no animatables
            if ($animatables.length == 0) {
              $(window).off('scroll', doAnimations);
              
            //   TweenMax.set($('#img_wrap'),{css:{x: 40 , autoAlpha: 0}});
              TweenMax.set($('#text_top'),{css:{y: 40 , autoAlpha: 0}});
              TweenMax.set($('#text_mid'),{css:{y: 40 , autoAlpha: 0}});
              TweenMax.set($('#text_bottom'),{css:{y: 40 , autoAlpha: 0}});
            }
            
            
            
            // Check all animatables and animate them if necessary
                $animatables.each(function(i) {

                var $animatable = $(this);

                    if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                    $animatable.removeClass('animatable').addClass('animated');

                        // TweenMax.to($('#img_wrap'),1, {css:{x: 0, autoAlpha: 1}});
                        TweenMax.to($('#text_top'),1, {css:{y: 0 , autoAlpha: 1}, delay:0.3});
                        TweenMax.to($('#text_mid'),1, {css:{y: 0 , autoAlpha: 1}, delay:0.6});
                        TweenMax.to($('#text_bottom'),1, {css:{y: 0, autoAlpha: 1}, delay:0.9});
                    }
                });
            };
         
            // Hook doAnimations on scroll, and trigger a scroll
            $(window).on('scroll', doAnimations);
            $(window).trigger('scroll');
    });

})(jQuery);