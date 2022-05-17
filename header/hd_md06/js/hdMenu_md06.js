var dpm=0;// 0-DT, 1-패드, 2-모바일
if($(window).width() > 480 && $(window).width() <= 768 ){dpm=1;}//모바일상태변환
if($(window).width()<=480){dpm=2;}//모바일상태변환


$(function(){
	/* $('.ham_btn').toggle(function(){
		$(this).addClass('open');
		$('.ham_menu_wr').show();
	}, function(){
		$(this).removeClass('open');
		$('.ham_menu_wr').hide();
	}); */

	$('.main_nav_wr > ul > li').mouseenter(function(){
		$(this).children('.sub_nav_wr').slideDown('100');
	});

	$('.main_nav_wr > ul > li').mouseleave(function(){
		$(this).children('.sub_nav_wr').slideUp('100');
	});

	// 햄메뉴 서브 메뉴
	$('.item_has_children').children('a').on('click', function(event){			
		if($(this).next('ul').hasClass("sub_menu") === true) {
			event.preventDefault();
			$(this).toggleClass('submenu_open').next('.sub_menu').slideToggle(200).end().parent('.item_has_children').siblings('.item_has_children').children('a').removeClass('submenu_open').next('.sub_menu').slideUp(200);
		}
	});


	if(dpm === 0){
		$(".header")
			.mouseenter(function(){
		}); // li mouseenter
		$(".header")
			.mouseleave(function(){

		}); // li mouseleave
	}

}); 

//스크롤 애니메이션
$(window).scroll(function(event){
	var scTop = $(this).scrollTop();
	//console.log(scTop);
	
	if(scTop > 0){
		$(".header").addClass('on');
	} else {
		$(".header").removeClass('on');
	}

	if(scTop > 500){
	} else {
	}
});
