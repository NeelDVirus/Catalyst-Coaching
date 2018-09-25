
$(document).ready(function(){

	/*######################################################
	###                                                #####
	###               HEADER                           #####
	###                                                #####
	#######################################################*/

	/* (brand -- address.wrapper-icon)
	Making the address.wrapper-icon square (making width same as height) */

	var $targetBrandIcon = $(".row-brand .wrapper-icon");
	var $targetBrandIconHeight = $targetBrandIcon.outerHeight();
	$targetBrandIcon.css("width", $targetBrandIconHeight +"");


	/* (nav --)
	Overlapping(vertically) the half height 
	of Nav section over the banner section*/

	var $navSectionHeight = $(".col-nav").outerHeight();
	$(".wrapper-banner").css("margin-top", "-"+(0.5 * $navSectionHeight) +"px");
	$(".wrapper-banner .row-banner.hero-image").css("padding-top", (0.5 * $navSectionHeight)+"px");


	/*######################################################
	###                                               ######
	###                BANNER                         ######
	###                                               ######  
	#######################################################*/

	/* (adAppendix -- )
	adding negative margin-top to --> 
	(.adAppendix .ad .iconWrapper .icon) */
    var $adAppendixIconSubWrapper = $(".adAppendix .iconSubWrapper");
	var $adAppendixIconSubWrapperHeight = $adAppendixIconSubWrapper.outerHeight();
	$adAppendixIconSubWrapper.css("margin-bottom", "-"+(0.5 * $adAppendixIconSubWrapperHeight)+"px");
	//var $adAppendixHeight =67;
	//console.log(0.5 * $adAppendixIconSubWrapperHeight);
})



