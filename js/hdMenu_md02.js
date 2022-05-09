

var dpm=0;// 0-DT, 1-패드, 2-모바일
if($(window).width() > 480 && $(window).width() <= 768 ){dpm=1;}//모바일상태변환
if($(window).width()<=480){dpm=2;}//모바일상태변환


$(function(){
	$('.header.sub_sitemap_hd .logo img').attr("src", "/images/logo_c.png");
	$(".header.sub_sitemap_hd").addClass('on');
	$(".header.sub_sitemap_hd .main_nav_wr ul > li > a").css({color:"#000"});
	$(".header.sub_sitemap_hd .right_menu .lang_wr > a").css({color:"#999999",background:"#E5E5E5"});	
	$(".header.sub_sitemap_hd .right_menu .family_wr > a").css({color:"#fff",background:"#00712F"});	
	$(".header.sub_sitemap_hd .right_menu ul > li.lang_wr img").attr("src", "/images/icon_arrow_gray.svg");	
	$(".header.sub_sitemap_hd .right_menu ul > li.sch_wr img").attr("src", "/images/search_btn_b.png");
	$(".header.sub_sitemap_hd .logo img").attr("src", "/images/logo_c.png");

	if(dpm === 0){
		$(".header")
			.mouseenter(function(){
				$(".header").addClass('on');
				$(".header .main_nav_wr ul > li > a").css({color:"#000"});
				$(".header .right_menu .lang_wr > a").css({color:"#999999",background:"#E5E5E5"});	
				$(".header .right_menu .family_wr > a").css({color:"#fff",background:"#00712F"});	
				$(".header .right_menu ul > li.lang_wr img").attr("src", "/images/icon_arrow_gray.svg");	
				$(".header .right_menu ul > li.sch_wr img").attr("src", "/images/search_btn_b.png");
				$(".header .logo img").attr("src", "/images/logo_c.png");	
		}); // li mouseenter
		$(".header")
			.mouseleave(function(){
				if(!$(document).scrollTop() > 0){ // 스크롤이 0일경우 
					$(".header").removeClass('on');
					$(".header .main_nav_wr ul > li > a").css({color:"#fff"});
					$(".header .right_menu .lang_wr > a").css({color:"#fff",background:"rgba(229,229,229,.2)"});	
					$(".header .right_menu .family_wr > a").css({color:"#fff",background:"rgba(255,255,255,.5)"});	
					$(".header .right_menu ul > li.lang_wr img").attr("src", "/images/icon_arrow.png");	
					$(".header .right_menu ul > li.sch_wr img").attr("src", "/images/search_btn.png");
					$(".header .logo img").attr("src", "/images/logo_w.png");	
				} 

		}); // li mouseleave




		$(".header.sub_sitemap_hd")
			.mouseenter(function(){
				$('.header.sub_sitemap_hd .logo img').attr("src", "/images/logo_c.png");
				$(".header.sub_sitemap_hd").addClass('on');
				$(".header.sub_sitemap_hd .main_nav_wr ul > li > a").css({color:"#000"});
				$(".header.sub_sitemap_hd .right_menu .lang_wr > a").css({color:"#999999",background:"#E5E5E5"});	
				$(".header.sub_sitemap_hd .right_menu .family_wr > a").css({color:"#fff",background:"#00712F"});	
				$(".header.sub_sitemap_hd .right_menu ul > li.lang_wr img").attr("src", "/images/icon_arrow_gray.svg");	
				$(".header.sub_sitemap_hd .right_menu ul > li.sch_wr img").attr("src", "/images/search_btn_b.png");
				$(".header.sub_sitemap_hd .logo img").attr("src", "/images/logo_c.png");	
		}); // li mouseenter
		$(".header.sub_sitemap_hd")
			.mouseleave(function(){
				if(!$(document).scrollTop() > 0){ // 스크롤이 0일경우 
					$('.header.sub_sitemap_hd .logo img').attr("src", "/images/logo_c.png");
					$(".header.sub_sitemap_hd").addClass('on');
					$(".header.sub_sitemap_hd .main_nav_wr ul > li > a").css({color:"#000"});
					$(".header.sub_sitemap_hd .right_menu .lang_wr > a").css({color:"#999999",background:"#E5E5E5"});	
					$(".header.sub_sitemap_hd .right_menu .family_wr > a").css({color:"#fff",background:"#00712F"});	
					$(".header.sub_sitemap_hd .right_menu ul > li.lang_wr img").attr("src", "/images/icon_arrow_gray.svg");	
					$(".header.sub_sitemap_hd .right_menu ul > li.sch_wr img").attr("src", "/images/search_btn_b.png");
					$(".header.sub_sitemap_hd .logo img").attr("src", "/images/logo_c.png");
				} 

		}); // li mouseleave

	}

	$('.lang_wr').mouseenter(function(){
		$(this).addClass('on');
		$('.lang_sub_wr').stop().slideDown(200);
		//$('.lang_sub_wr').show();

	});

	$('.lang_wr').mouseleave(function(){
		$('.lang_sub_wr').stop().slideUp(200);
		$(this).removeClass('on');
		//$('.lang_sub_wr').hide();

	});

	if($(window).width() > 480 ){
		$('.family_wr').mouseenter(function(){
			$(this).addClass('on');
			$('.family_sub_wr').stop().slideDown(200);
			//$('.family_sub_wr').show();

		});

		$('.family_wr').mouseleave(function(){
			$('.family_sub_wr').stop().slideUp(200);							
			$(this).removeClass('on');
			//$('.family_sub_wr').hide();
		});
	} else if($(window).width()<=480) {
		$(".family_wr").click(function(){
			$(this).toggleClass('on');
			$('.family_sub_wr').slideToggle(200)
		});
	}
	
}); 

//스크롤 애니메이션
$(window).scroll(function(event){
	var scTop = $(this).scrollTop();
	//console.log(scTop);
	
	if(scTop > 0){
		// 헤더
		$(".header").addClass('on');
		$(".header").removeClass('on2');
		$(".header .main_nav_wr ul > li > a").css({color:"#000"});
		$(".header .right_menu .lang_wr > a").css({color:"#999",background:"#e5e5e5"});	
		$(".header .right_menu .family_wr > a").css({color:"#fff",background:"#00712f"});
		$(".header .right_menu ul > li.lang_wr img").attr("src", "/images/icon_arrow_gray.svg");
		$(".header .right_menu ul > li.sch_wr img").attr("src", "/images/search_btn_b.png");
		$(".header .logo img").attr("src", "/images/logo_c.png");

		$(".header .main_nav_wr > ul > li .sub_nav_wr").css({top:"80px"});

		$('.header.sub_sitemap_hd .logo img').attr("src", "/images/logo_c.png");
		$(".header.sub_sitemap_hd").addClass('on');
		$(".header.sub_sitemap_hd .main_nav_wr ul > li > a").css({color:"#000"});
		$(".header.sub_sitemap_hd .right_menu .lang_wr > a").css({color:"#999999",background:"#E5E5E5"});	
		$(".header.sub_sitemap_hd .right_menu .family_wr > a").css({color:"#fff",background:"#00712F"});	
		$(".header.sub_sitemap_hd .right_menu ul > li.lang_wr img").attr("src", "/images/icon_arrow_gray.svg");	
		$(".header.sub_sitemap_hd .right_menu ul > li.sch_wr img").attr("src", "/images/search_btn_b.png");
		$(".header.sub_sitemap_hd .logo img").attr("src", "/images/logo_c.png");

	} else {
		// 헤더
		$(".header").removeClass('on');
		$(".header").addClass('on2');
		$(".header .main_nav_wr ul > li > a").css({color:"#fff"});
		$(".header .right_menu .lang_wr > a").css({color:"#fff",background:"rgba(229,229,229,.2)"});	
		$(".header .right_menu .family_wr > a").css({color:"#fff",background:"rgba(255,255,255,.5)"});		
		$(".header .right_menu ul > li.lang_wr img").attr("src", "/images/icon_arrow.png");
		$(".header .right_menu ul > li.sch_wr img").attr("src", "/images/search_btn.png");
		$(".header .logo img").attr("src", "/images/logo_w.png");
		$(".header .main_nav_wr > ul > li .sub_nav_wr").css({top:"100px"});

		$('.header.sub_sitemap_hd .logo img').attr("src", "/images/logo_c.png");
		$(".header.sub_sitemap_hd").addClass('on');
		$(".header.sub_sitemap_hd .main_nav_wr ul > li > a").css({color:"#000"});
		$(".header.sub_sitemap_hd .right_menu .lang_wr > a").css({color:"#999999",background:"#E5E5E5"});	
		$(".header.sub_sitemap_hd .right_menu .family_wr > a").css({color:"#fff",background:"#00712F"});	
		$(".header.sub_sitemap_hd .right_menu ul > li.lang_wr img").attr("src", "/images/icon_arrow_gray.svg");	
		$(".header.sub_sitemap_hd .right_menu ul > li.sch_wr img").attr("src", "/images/search_btn_b.png");
		$(".header.sub_sitemap_hd .logo img").attr("src", "/images/logo_c.png");
	}



	
	
});
