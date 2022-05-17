$(function() {
    // 검색
    $(".header_search_btn, #renew_ham_menu_bg .ham_sch_btn").click(function(e){
        e.preventDefault();
        $("#hd_sch_box").fadeIn(200);
    });
    
    $("#hd_sch_box .hd_sch_box_close").click(function(){
        $("#hd_sch_box").fadeOut(200);
    });
    $(".ham_btn").click(function(e){
        e.preventDefault();
        $("#renew_ham_menu_bg").fadeIn(200);
    });
    $(".ham_close").click(function(e){
        e.preventDefault();
        $("#renew_ham_menu_bg").fadeOut(200);
    });
    // 햄메뉴 서브 메뉴
    $('.ham_menu_list').children('h3').on('click', function(event){			
        if($(this).next('div').hasClass("ham_sub_menu") === true) {
            event.preventDefault();
            $(this).toggleClass('submenu_open').next('#renew_ham_menu .ham_menu_list .ham_sub_menu').slideToggle(200).end().parent('.ham_menu_list').siblings('.ham_menu_list').children('h3').removeClass('submenu_open').next('#renew_ham_menu .ham_menu_list .ham_sub_menu').slideUp(200);
        }
    });
    $('.right_nav_wr > ul > li').mouseenter(function(){
        $(this).find('.sub_menu').stop().slideDown(100);
    })
    $('.right_nav_wr > ul > li').mouseleave(function(){
        $('.sub_menu').stop().slideUp(100);
    });
    $('.header_renew_sub .left_nav_wr > ul > li, .header_renew .left_nav_wr > ul > li').mouseenter(function(){
        $(this).find('.sub_menu').stop().slideDown(300);
    })
    $('.header_renew_sub .left_nav_wr > ul > li, .header_renew .left_nav_wr > ul > li').mouseleave(function(){
        $('.sub_menu').stop().slideUp(300);
    });
});