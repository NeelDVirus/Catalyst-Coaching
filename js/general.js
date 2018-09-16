
$(document).ready(function(){

	/*######################################################
	###     Overlapping(vertically) the half          ######
	###     part of Nav section over the       
	###     banner section                            ######  
	#######################################################*/
	var $navSectionHeight = $(".col-nav").outerHeight();
	console.log($navSectionHeight);
	$(".wrapper-banner").css("margin-top", "-"+(0.5 * $navSectionHeight) +"px");
})