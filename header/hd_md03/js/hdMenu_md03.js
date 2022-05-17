var dpm=0;// 0-DT, 1-패드, 2-모바일
if($(window).width() > 480 && $(window).width() <= 768 ){dpm=1;}//모바일상태변환
if($(window).width()<=480){dpm=2;}//모바일상태변환


$(function(){
	if(dpm === 0){
		$("#header").mouseenter(function(){
			$("#header").addClass('on');
		//				$(".ham_btn img").attr("src", "/images/icon_ham00.png");
			//$(".header .logo img").attr("src", "/images/logo_c.png");	
		}); // li mouseenter
		$("#header").mouseleave(function(){
			$(".sub_nav_bg").stop().css({'height':'0px'});
			$(".header .main_nav_wr > ul > li").removeClass('on');
			$(".header .sub_nav_bg ul").removeClass('active');
			if(!$(document).scrollTop() > 0){ // 스크롤이 0일경우 
				$("#header").removeClass('on');

		//					$(".ham_btn img").attr("src", "/images/icon_ham00.png");
				//$(".header .logo img").attr("src", "/images/logo_w.png");	
			} 

		}); // li mouseleave
				
	}
	/*헤더 액션*/
	$(".header .main_nav_wr > ul > li").mouseenter(function(){
		$(this).addClass("on");
		$(this).siblings('li').removeClass('on');
		var sn = $(this).index();
		if(sn == 2){
			sn = 5
		}else if(sn >= 3){
			sn--
		}
		if(sn >= 0 && sn < 5){
			$(".sub_nav_bg").stop().css({'height':'120px'});
		}else{
			$(".sub_nav_bg").stop().css({'height':'0px'});
		}
		$(".header .sub_nav_bg ul").removeClass('active');
		$(".header .sub_nav_bg ul").eq(sn).addClass('active');
	})
	$(".header .main_nav_wr > ul > li").mouseleave(function(){

	})
	//헤더 스크롤
	$(function(){	
		// Hide Header on on scroll down 
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5; 
		var navbarHeight = $('.header').outerHeight();
		$(window).scroll(function(event){ didScroll = true; });
		setInterval(function() {
			if (didScroll) { 
				hasScrolled(); didScroll = false; 
			} 
		}, 250);
		function hasScrolled() {
			var st = $(this).scrollTop();
			// Make sure they scroll more than delta
			if(Math.abs(lastScrollTop - st) <= delta) return; 
			// If they scrolled down and are past the navbar, add class .nav-up.
			// This is necessary so you never see what is "behind" the navbar.
			if (st > lastScrollTop && st > navbarHeight){ 
				// Scroll Down
				$('.header').removeClass('nav-down').addClass('header_hide'); 
			} else {
				// Scroll Up
				if(st + $(window).height() < $(document).height()) {
					$('.header').removeClass('header_hide').addClass('nav-down');
				} 
			} lastScrollTop = st; 
		}
	});
}); 
//헤더 언어변경 셀렉트박스
$(function(){
    /* 셀렉트박스 보이게 하기 */
    $("body").on("click", ".lang_tit", function () {
        $(".lang_ul").slideToggle();
    })

    /* 셀렉트 박스 옵션 선택 */
    $("body").on("click", ".lang_ul li", function (e) {
        var text = $(this).children("a").html();
        $(".lang_tit").html(text);
        $(".lang_ul").slideUp();
    })
    /* 셀렉트 박스 이외 선택시 보이지 않게 하기 */
    $("body").on("click", function(e){
        if($(".lang_ul").css("display") == "block"){
            if($(".right_nav_wr").has(e.target).length == 0){
                $(".lang_ul").slideUp();
            }
        }
    })
});
$(function(){
	$('.hd_ham_btn_wr a').click(function(e){
		e.preventDefault();
	});
	$('.hd_sch_btn_wr').click(function(e){
		e.preventDefault();
	});
});
$(function(){
	/*햄버거메뉴*/
	$('.hd_ham_btn_wr a').click(function(){
		$('.ham_menu_wr').fadeIn();
	});
	$('.ham_exit_wr').click(function(){
		$('.ham_menu_wr').fadeOut();
	});
	$('.ham_menu_wr .ham_nav_tit').click(function(){
		$(this).siblings('ul').slideToggle().toggleClass('on');
		if($(this).siblings('ul').is('.on')){
			$(this).find('span img').attr('src','./images/icon_ham_arrow01.svg');
		}else{
			$(this).find('span img').attr('src','./images/icon_ham_arrow02.svg');
		}
	});

	/*검색창*/
	$('.hd_sch_btn_wr').click(function(){
		$('.sch_pop_wr').fadeIn();
	//		$('.sch_pop_wr').slideDown(600);
	});
	$('.sch_exit_btn').click(function(){
		$('.sch_pop_wr').fadeOut();
	//		$('.sch_pop_wr').slideUp(600);
	});
});