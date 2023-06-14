
$(document).ready(function(){
    setTimeout(function(){
        $('body').removeClass('inactive'); 
    }, 300);
  
    gsap.set($('.logo'),{css:{x: -20 + 'vw', autoAlpha: 0}});
    gsap.set($('.menu_toggle'),{css:{x: -20 + 'vw', autoAlpha: 0}});
    gsap.set($('.sns_wrap'),{css:{x: -20 + 'vw', autoAlpha: 0}});
  
    gsap.to($('.logo'), 1, {css: {x:0, autoAlpha: 1}});
    gsap.to($('.menu_toggle'), 1, {css: {x:0, autoAlpha: 1}, delay: 0.3});
    gsap.to($('.sns_wrap'), 1, {css: {x:0, autoAlpha: 1}, delay:0.3});  
      
    var $up = $('.product_box');
    var $upBox = $up.find('div');
    var tl = new TimelineMax();
    var form, to, duration, stagger;
    
        form = {y : 10 + 'vw', autoAlpha : 0};
        to = {y : 0, autoAlpha : 1, ease : Expo.easeOut};
        duration = 1.5;
        stagger = 0.2;
            
    tl.staggerFromTo($upBox, duration, form, to, stagger, null, function(){});
      
});


    /*상품 상세 페이지*/
    /*PRODUCT01*/
    $('#product_main01').click(function() {
        $('#product_detail01').addClass('on')
    });
    $('#product_detail01').click(function() {
        $('#product_detail01').removeClass('on')
    });

    /*PRODUCT02*/
    $('#product_main02').click(function() {
        $('#product_detail02').addClass('on')
    });
    $('#product_detail02').click(function() {
        $('#product_detail02').removeClass('on')
    });

    /*PRODUCT03*/
    $('#product_main03').click(function() {
        $('#product_detail03').addClass('on')
    });
    $('#product_detail03').click(function() {
        $('#product_detail03').removeClass('on')
    });

    /*PRODUCT04*/
    $('#product_main04').click(function() {
        $('#product_detail04').addClass('on')
    });
    $('#product_detail04').click(function() {
        $('#product_detail04').removeClass('on')
    });

    /*PRODUCT05*/
    $('#product_main05').click(function() {
        $('#product_detail05').addClass('on')
    });
    $('#product_detail05').click(function() {
        $('#product_detail05').removeClass('on')
    });


    /*PRODUCT06*/
    $('#product_main06').click(function() {
        $('#product_detail06').addClass('on')
    });
    $('#product_detail06').click(function() {
        $('#product_detail06').removeClass('on')
    });

   




