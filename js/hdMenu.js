

var dpm=0;// 0-DT, 1-패드, 2-모바일
if($(window).width() > 480 && $(window).width() <= 768 ){dpm=1;}//모바일상태변환
if($(window).width()<=480){dpm=2;}//모바일상태변환


$(function(){
	if(dpm === 0){
		$(".header")
			.mouseenter(function(){
				$(".header").addClass('on');
				$(".header .main_nav_wr > ul > li > a").css({color:"#2a2a2a"});	
				$(".ham_btn img").attr("src", "/images/icon_ham00.png");
				//$(".header .logo img").attr("src", "/images/logo_c.png");	
		}); // li mouseenter
		$(".header")
			.mouseleave(function(){
				if(!$(document).scrollTop() > 0){ // 스크롤이 0일경우 
					$(".header").removeClass('on');
					$(".header .main_nav_wr > ul > li > a").css({color:"#fff"});
					$(".ham_btn img").attr("src", "/images/icon_ham00.png");
					//$(".header .logo img").attr("src", "/images/logo_w.png");	
				} 

		}); // li mouseleave


//		var snHeight = $(".sub_nav_wr").height();
		$(".main_nav_wr")
			.mouseenter(function(){
				$(".sub_nav_bg").stop().animate({'height':'250px'});
				$(".sub_nav_wr").stop().animate({'height':'250px'});
//				return:false;
		}); // li mouseenter
		$(".main_nav_wr")
			.mouseleave(function(){
				$(".sub_nav_bg").stop().animate({'height':'0px'});
				$(".sub_nav_wr").stop().animate({'height':'0px'});
			//	return:false;

		}); // li mouseleave
	}

}); 

//스크롤 애니메이션
$(window).scroll(function(event){
	var scTop = $(this).scrollTop();
	//console.log(scTop);
	
	if(scTop > 500){
		// 헤더
		$(".header").addClass('on');
		$(".header .main_nav_wr > ul > li > a").css({color:"#2a2a2a"});	
		$(".header .ham_btn img").attr("src", "/images/icon_ham00.png");
		//$(".header .logo img").attr("src", "/images/logo_c.png");	
	} else {
		// 헤더
		$(".header").removeClass('on');
		$(".header .main_nav_wr > ul > li > a").css({color:"#fff"});
		$(".header .ham_btn img").attr("src", "/images/icon_ham00.png");
		//$(".header .logo img").attr("src", "/images/logo_w.png");		
	}
});
