$(document).ready(function () {
    $('.slider').bxSlider({
        pager: true,
        speed:1000,
        auto:true,
        controls: true,
        autoDelay: 1,
    });
    $('.slider2').bxSlider({
        pager: true,
        speed:1000,
        auto:true,
        controls: true,
        autoDelay:1,
        slideWidth: 300,
        margin:0,
        padding:0,
    });
    $('.yot > li').on('click',function(){
        $('.yot > li').css('background-color','transparent');
        //회색
        $('.yot > li').css({"color":"#393939","font-weight":"400"});
        //핑크
        $(this).css({"background-color":"#a56fbb","color":"black","font-weight":"700"});
    });
    $('.yot1').on('click',function(){
        $('.you').children().css('display','none');
        $('.you1').show();
    });
    $('.yot2').on('click',function(){
        $('.you').children().css('display','none');
        $('.you2').show();
    });
    $('.yot3').on('click',function(){
        $('.you').children().css('display','none');
        $('.you3').show();
    });
    $('.yot4').on('click',function(){
        $('.you').children().css('display','none');
        $('.you4').show();
    });
    /* aside */
    $('.top_sub p i').on('click',function(){
        $('aside').slideUp();
    });
    /*햄버거메뉴*/
    /* snb 없애는 기능*/
    $('body').on('click',function(){
        $('.snb1,.snb2').hide();
    });
    
    $('.hamburger').on('mouseenter',function(){
        $('.snb2').hide();
        $('.snb1').show();
    });
    $('.snb1 dt,.snb1 dd').on('mouseleave',function(){
        $(this).css({"background-color":"transparent"});
        $(this).children().hide();
    });
    $('.snb1 dt,.snb1 dd').on('mouseenter',function(){
        $(this).css({"background-color":"whitesmoke"});
        $(this).children().show();
    });
    $('.snb1,.snb2').on('mouseleave',function(){
        $('.snb1,.snb2').hide();
    });
    /*브랜드 메뉴*/
    $('.brand').on('mouseenter',function(){
        $('.snb1').hide();
        $('.snb2').css({"display":"flex"});
    });
});