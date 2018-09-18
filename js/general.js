
$(document).ready(function(){

	/*######################################################
	###     Making the div square (making width same   #####
	###     as height (header .col-brand address       #####
	###     .wrapper-icon)                             #####
	#######################################################*/
	var $targetBrandIcon = $(".row-brand .wrapper-icon");
	var $targetBrandIconHeight = $targetBrandIcon.outerHeight();
	$targetBrandIcon.css("width", $targetBrandIconHeight +"");



	/*######################################################
	###     Overlapping(vertically) the half          ######
	###     part of Nav section over the       
	###     banner section                            ######  
	#######################################################*/
	var $navSectionHeight = $(".col-nav").outerHeight();
	console.log($navSectionHeight);
	$(".wrapper-banner").css("margin-top", "-"+(0.5 * $navSectionHeight) +"px");
	$(".wrapper-banner .row-banner.hero-image").css("padding-top", (0.5 * $navSectionHeight)+"px");
})