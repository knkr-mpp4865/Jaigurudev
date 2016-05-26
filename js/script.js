var pos=0;
var animate=true
window.onload= function(){
	setInterval(
	function(){
		
						var scrollPos=$(window).scrollTop();
						if(animate){
										
											
																$("#leftImg").animate({top:scrollPos+100},600);
												
																
									}
					}
	,1000);}
	