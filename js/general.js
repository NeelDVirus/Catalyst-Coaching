
$(document).ready(function(){

	/*######################################################
	###                                                #####
	###               HEADER                           #####
	###                                                #####
	#######################################################*/


	/**********  (brand -- address.wrapper-icon)   ***********************
	Making the address.wrapper-icon square (making width same as height) */

	var $targetBrandIcon = $(".row-brand .wrapper-icon");
	var $targetBrandIconHeight = $targetBrandIcon.outerHeight();
	$targetBrandIcon.css("width", $targetBrandIconHeight +"");



	/*********   (nav --)   **************
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
	var $bannerWrapper = $(".wrapper-banner");

	/* (adAppendix -- )
	adding negative margin-top to --> 
	(.adAppendix .ad .iconWrapper .icon) */
    var $adAppendixIconSubWrapper = $(".adAppendix .iconSubWrapper");
	var $adAppendixIconSubWrapperHeight = $adAppendixIconSubWrapper.outerHeight();
	$adAppendixIconSubWrapper.parent().css("margin-bottom", "-"+(0.6 * $adAppendixIconSubWrapperHeight)+"px");
	$adAppendixIconSubWrapper.parent().next().css("padding-top", (0.4 * $adAppendixIconSubWrapperHeight)+"px");


	/**********   (.row.hero-image)   ************** 
	adding padding-bottom to hero-image to compensate the additonal overlapping of .adAppendix row which extent beyond the .banner-wrapper bottom end */



})



