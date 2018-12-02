
$(document).ready(function(){

	/*######################################################
	###                                                #####
	###               HEADER                           #####
	###                                                #####
	#######################################################*/


	/**********  (brand -- address.wrapper-icon)   ***********************
	Making the address.wrapper-icon square (making width same as height) */

	var $targetBrandIcon = $(".row-brand .wrapper-icon");
	$targetBrandIcon.each(function(){
		this.style.width = this.offsetHeight;
	})
	


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
	window.onresize = negativeTopMargin_banner;




	/* (adAppendix -- )
	adding negative margin-top to --> 
	(.adAppendix .ad .iconWrapper .icon) */
	function windowResize() {
    	var $adAppendixIconSubWrapper = $(".component-adAppendix .iconSubWrapper");
		var $adAppendixIconSubWrapperHeight = $adAppendixIconSubWrapper.outerHeight();
		$adAppendixIconSubWrapper.parent().css("margin-bottom", "-"+(0.6 * $adAppendixIconSubWrapperHeight)+"px");
		$adAppendixIconSubWrapper.parent().next().css("padding-top", (0.4 * $adAppendixIconSubWrapperHeight)+"px");
	};	
	windowResize();	//initial exucution at page load
	window.onresize = windowResize; //execution during scrolling


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

			/*=============================================================================
			===================     HEADER     ============================================
			==============================================================================*/
			var topmostRow = document.querySelector(".wrapper-header .row-topmost");
			let colMVWelcome = document.querySelector(".wrapper-header .col-mV-welcome");
			let containerBrandMain = document.querySelector(".wrapper-header .row-brand .container-brandMain ");
			let component_mTopBar = topmostRow.querySelector(".col .component-mTopBar");
			const bodyElm = document.querySelector("body");



			/*===(1)====================================================
			(.topmost-row)

			-->Setting: top-absolute-position: 
							 = height of row-topmost row
			=========================================================*/
			var topmostRowHeight = topmostRow.offsetHeight;
			document.querySelector(".wrapper-header .row-brand").style.marginTop = topmostRowHeight + "px";


			/*===(2)====================================================
			(.topmost-row &&& .row-mV-welcome &&& .row-nav)

			-->2.1 create : componentMVWelcome
			-->2.2 Shifting: 
				2.2.1 ==> .topmost-row to .row-mV-welcome 
					Welcome column(.welcome-Note, .register in .wrapper-header) in ".nav-column .component-mV-welcome"
				2.2.2 ==> .component-nav (from .row-mV-Welcome) to .topmost-row 
			=============================================================*/

			phoneResize2();
			window.onresize(phoneResize2);
			function phoneResize2() {
				//---- 2.1 + 2.2.1 ----
				let shiftingTopRowElements = document.querySelectorAll(".wrapper-header .welcomeNote, .wrapper-header .register");
				
				var frag = document.createDocumentFragment();			
				var createComponentMVWelcome = document.createElement("div");

				createComponentMVWelcome.className = "component-mV-welcome";
				shiftingTopRowElements.forEach(function(x){
					frag.appendChild(x);			
				});
				createComponentMVWelcome.appendChild(frag);
				colMVWelcome.appendChild(createComponentMVWelcome);
				negativeTopMargin_banner();	//From banner section 

				//---- 2.2.2 ----
				var componentNav = document.querySelector(".row-mV-welcome .component-nav");
				if (componentNav.classList.contains("component-nav")) {
					componentNav.classList.remove("component-nav");
				}
				componentNav.classList.add("component-mV-nav");
				component_mTopBar.insertBefore(componentNav, null);
			}

			/*===(3)====================================================
			(.topmost-row ---&&&--- .row-brand .container-brandMain)
			Shifting of .row-brand's .container-brandMain to .component-mTopBar
			=========================================================*/
			shiftingBrand();
			//window.onresize = shiftingBrand;
			function shiftingBrand() {
				component_mTopBar.insertBefore(containerBrandMain, component_mTopBar.childNodes[0]);
			}

			//4.1 hambrger icon			
			$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
				$(this).toggleClass('open');
			});

			//4.2 sidemenu +			
			//4.2.1 disable body scrolling when menu is open
			var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
				showRight = document.querySelector(".showRight");
			showRight.onclick = function() {
				menuRight.classList.toggle("cbp-spmenu-open");
				//4.2.1
				if (menuRight.classList.contains("cbp-spmenu-open")) {
					bodyElm.classList.add("disableScroll"); // .disableScroll rules is in _mobilemenu.scss
					var componentMVNav = document.querySelector(".component-mV-nav");
					componentMVNav.classList.add("bgOverlayForMenu")
				} else {
					bodyElm.classList.remove("disableScroll");
					document.querySelector(".component-mV-nav").classList.remove("bgOverlayForMenu");
				}

			};



			/*------------------------------------------
			----------     HEADER     ------------------
			--------------------------------------------*/
		}
	}
	var mql = window.matchMedia('(max-width: 61.9375em)'); //61.9375em = tablet-max
	screenTest(mql);
	mql.addListener(screenTest);
 


})



