$(document).ready(function(){
			$("#logotipo").on("mouseover", function(){
				$("#banner h1").addClass("efeito");
				/*css({"color":"red","font-size":"12em","transition":"1s"});
				(essa é uma forma direta no html mas sera feito de for indireta via pagina css)*/
			}).on("mouseout", function(){
				$("#banner h1").removeClass("efeito");
			});

			$("#input-search").on("focus", function(){

				$("li.search").addClass("ativo");

			}).on("blur", function(){
				$("li.search").removeClass("ativo");
			});

			$(".thumbnails").owlCarousel({
			
						  	loop:true,
						    margin:10,
						    responsiveClass:true,
						    //autoplay:true, esse evento permite a rolagem automatica 
						    responsive:{
						        0:{
						            items:1,
						            nav:false
						        },
						        600:{
						            items:3,
						            nav:false
						        },
						        1000:{
						            items:5,
						            nav:true,
						            loop:false
						        }
						    }
			
			});

			var owl = $(".thumbnails");

			owl.owlCarousel({

			});

			$('#btn-news-next').click(function () {

				owl.trigger('next.owl.carousel', [300]);

			});

			$('#btn-news-prev').click(function () {

				owl.trigger('prev.owl.carousel');

			});

			$("#page-up").on("click", function(event){
				$("html, body").animate({
					scrollTop:0
				},1000);

				event.preventDefault();
			});

			$("#btn-bars").on("click", function(){
				$("header").toggleClass("open-menu");
			});

			$("#menu-mobile-mask, .btn-close").on("click", function(){
				$("header").removeClass("open-menu");
			});

			$("#btn-search").on("click",function(){
				$("header").toggleClass("open-search");
				$("#input-search-mobile").focus();
			});

		});