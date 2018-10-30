
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


	/**********  mobilemenu  ******************/

	
	$(".toggle-icon").click(function() {
  		$('#nav-container').toggleClass("pushed");
	});


	/*######################################################
	###                                               ######
	###                BANNER                         ######
	###                                               ######  
	#######################################################*/

	var $bannerWrapper = $(".wrapper-banner");

	/*********   Incorporate with : (nav section)   **************
	Overlapping(vertically) the half height 
	of Nav section over the banner section*/ 

	

	function negativeTopMargin_banner() {
		var $navSectionHeight = $(".col-nav").outerHeight();
		$bannerWrapper.css("margin-top", "-"+(0.5 * $navSectionHeight) +"px");
		$(".wrapper-banner .row-heroImage").css("padding-top", (0.5 * $navSectionHeight)+"px");
	}
	negativeTopMargin_banner();







	/* (adAppendix -- )
	adding negative margin-top to --> 
	(.adAppendix .ad .iconWrapper .icon) */
    var $adAppendixIconSubWrapper = $(".component-adAppendix .iconSubWrapper");
	var $adAppendixIconSubWrapperHeight = $adAppendixIconSubWrapper.outerHeight();
	$adAppendixIconSubWrapper.parent().css("margin-bottom", "-"+(0.6 * $adAppendixIconSubWrapperHeight)+"px");
	$adAppendixIconSubWrapper.parent().next().css("padding-top", (0.4 * $adAppendixIconSubWrapperHeight)+"px");


	/**********   (.row.hero-image)   ************** 
	adding padding-bottom to hero-image to compensate the additonal overlapping of .adAppendix row which extent beyond the .banner-wrapper bottom end */











	/*###########################################################
	#############################################################
	#############################################################
	########                                             ########
	########                MOBILE VERSION               ########
	########                                             ########
	#############################################################
	#############################################################  
	############################################################*/


	function screenTest(e) {
		if(e.matches) {

			/*------------------------------------------
			----------     HEADER     ------------------
			--------------------------------------------*/

			// header.topmost-row 
			// (1) top-absolute-position of row-brand = height of row-topmost row
			var topmostRowHeight = document.querySelector(".wrapper-header .row-topmost").offsetHeight;
			document.querySelector(".wrapper-header .row-brand").style.marginTop = topmostRowHeight + "px";
			//------------- End of (1) --------------------


			// header.topmost-row &&& header.row-nav
			// (2) Shifting of Welcome column(.welcome-Note, .register in .wrapper-header) in nav-column 
			let shiftingTopRowElements = document.querySelectorAll(".wrapper-header .welcomeNote, .wrapper-header .register");
			var toAppend = document.createDocumentFragment();
			shiftingTopRowElements.forEach(function(x){
				toAppend.appendChild(x);			
			});
			document.querySelector(".wrapper-header .col-nav").appendChild(toAppend);
			negativeTopMargin_banner();	//From banner section 
			//------------- End of (2) --------------------

		}
	}
	var mql = window.matchMedia('(max-width: 62em)');
	screenTest(mql);
	mql.addListener(screenTest);
 


})



