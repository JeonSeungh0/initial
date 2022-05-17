






//
//var dpm=0;// 0-DT, 1-패드, 2-모바일
//if($(window).width() > 480 && $(window).width() <= 768 ){dpm=1;}//모바일상태변환
//if($(window).width()<=480){dpm=2;}//모바일상태변환
//
//
//$(function(){
//	if(dpm === 0){
//		$(".header")
//			.mouseenter(function(){
//				$(".header").addClass('on');
//				$(".header .main_nav_wr > ul > li > a").css({color:"#2a2a2a"});	
//				$(".ham_btn img").attr("src", "/images/icon_ham01.png");
//				//$(".header .logo img").attr("src", "/images/logo_c.png");	
//		}); // li mouseenter
//		$(".header")
//			.mouseleave(function(){
//				if(!$(document).scrollTop() > 0){
//					$(".header").removeClass('on');
//					$(".header .main_nav_wr > ul > li > a").css({color:"#fff"});
//					$(".ham_btn img").attr("src", "/images/icon_ham00.png");
//					//$(".header .logo img").attr("src", "/images/logo_w.png");	
//				} 
//
//		}); // li mouseleave
//	}
////	if(dpm === 2){
////	}
//
////	$(".ham_open").click(function(){
////		$(".ham_menu_wr").animate({right: "0px"},1500,'easeOutCubic');
////	});
////	$(".ham_close").click(function(){
////		$(".ham_menu_wr").animate({right: "-100%"},1500,'easeOutCubic');
////	});
////
////	
////	if(dpm === 1){		
////		////////////////
////		// 햄메뉴 서브
////		$('.item-has-children').children('a').on('click', function(event){			
////			if($(this).next('ul').hasClass("sub-menu") === true) {
////				event.preventDefault();
////				$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
////			}
////		});
////	}
////	if(dpm === 2){	
////		////////////////
////		// 햄메뉴 서브
////		$('.item-has-children').children('a').on('click', function(event){			
////			if($(this).next('ul').hasClass("sub-menu") === true) {
////				event.preventDefault();
////				$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
////			}
////		});
////	}
//
//
//
//}); 
//
////스크롤 애니메이션
//$(window).scroll(function(event){
//	var scTop = $(this).scrollTop();
//	//console.log(scTop);
//	
//	if(scTop > 0){
//		// 헤더
//		$(".header").addClass('on');
//		$(".header .main_nav_wr > ul > li > a").css({color:"#2a2a2a"});	
//		$(".ham_btn img").attr("src", "/images/icon_ham01.png");
//		//$(".header .logo img").attr("src", "/images/logo_c.png");	
//	} else if (scTop ==0){
//		// 헤더
//		$(".header").removeClass('on');
//		$(".header .main_nav_wr > ul > li > a").css({color:"#fff"});
//		$(".ham_btn img").attr("src", "/images/icon_ham00.png");
//		//$(".header .logo img").attr("src", "/images/logo_w.png");		
//	}
//});
