
$(document).ready(function(){

	/*######################################################
	###                                                #####
	###               HEADER                           #####
	###                                                #####
	#######################################################*/
	let componentNav = document.querySelector(".wrapper-pageHeader .row-nav .component-nav");




	/**********  (brand -- address.wrapper-icon)   ***********************
	Making the address.wrapper-icon square (making width same as height) */

	var $targetBrandIcon = $(".row-brand .wrapper-icon");
	$targetBrandIcon.each(function(){
		this.style.width = this.offsetHeight;
	})


		
	/**********  Navigation **************************/
	
	//====== hover effect ======== 










	/*######################################################
	###                                               ######
	###                BANNER                         ######
	###                                               ######  
	#######################################################*/

	var $bannerWrapper = $(".wrapper-banner");


	/*********   Incorporate with : (nav section)   *****************
	1- Overlapping(vertically) the half height 
		of Nav section over the banner section
	2- adding padding-top to .hero-image == overlapped nav section 	
	*****************************************************************/ 	

	function negativeTopMargin_banner() {
		var $navSectionHeight = $(".col-nav").outerHeight();
		$bannerWrapper.css("margin-top", "-"+(0.5 * $navSectionHeight) +"px");

		let rowHeroImage = $(".wrapper-banner .row-heroImage")
		rowHeroImage.css("padding-top", (0.5 * $navSectionHeight)+"px");
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
	adding padding-bottom to hero-image 
		:- Reason: to compensate the additonal overlapping of .adAppendix row which extent beyond the .banner-wrapper bottom end 
	*************************************************/
	let compAdName1 = document.querySelector(".container-ad.name1");
	let requiredPadding = compAdName1.offsetHeight * 0.35;

	let rowHeroImage = document.querySelector(".wrapper-banner .row-heroImage");
	rowHeroImage.style.paddingBottom = requiredPadding + "px";

	











	/*###########################################################
	#############################################################
	#############################################################
	########                                             ########
	########                MOBILE VERSION               ########
	########                                             ########
	#############################################################
	#############################################################  
	############################################################*/


	let mql = window.matchMedia('(max-width: 61.9375em)'); //61.9375em = tablet-max
	screenTest1(mql);
	mql.addListener(screenTest1); 

	function screenTest1(e) {
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
			(.row-topmost)

			-->Setting: top-absolute-position: 
							 = height of row-topmost row
			=========================================================*/
			var topmostRowHeight = topmostRow.offsetHeight;
			document.querySelector(".wrapper-header .row-brand").style.marginTop = topmostRowHeight + "px";


			/*===(2)====================================================
			(.row-topmost &&& .row-mV-welcome &&& .row-nav)

			-->2.1 Create : componentMVWelcome
			-->2.2 Shifting: 
					2.2.1 ==> .row-topmost to .row-mV-welcome 
						Details --> Welcome column to (.nav-column .component-mV-welcome")
							    --> Welcome column = (.welcome-Note) + (.register) in .row-topmost 
					2.2.2 ==> .component-nav (from .row-mV-Welcome) to .row-topmost 
			-->2.3 Replace class name: replace ".component-nav" with ".component-mV-nav"
			=============================================================*/

			phoneResize2();
			//window.onresize(phoneResize2);
			function phoneResize2() {
				
				//---------------------
				//---- 2.1 + 2.2.1 ----
				//---------------------

				let shiftingTopRowElements = document.querySelectorAll(".wrapper-header .welcomeNote, .wrapper-header .register");

				//creating documentFragment
				var frag = document.createDocumentFragment();		
				var createComponentMVWelcome = document.createElement("div");

				//adding classname to created element
				createComponentMVWelcome.className = "component-mV-welcome";
				//appending elements as children to created element
				shiftingTopRowElements.forEach(function(x){
					frag.appendChild(x);			
				});
				//appending document fragment's child to  created element
				createComponentMVWelcome.appendChild(frag);
				//appending created element to colMVWelcome
				colMVWelcome.appendChild(createComponentMVWelcome);

				//Supplement: From banner section: negative margin
				negativeTopMargin_banner();	 

				//-----------------------
				//---- 2.2.2  and 2.3----
				//-----------------------
				var componentNav = document.querySelector(".row-mV-welcome .component-nav");
				if (componentNav.classList.contains("component-nav")) {
					componentNav.classList.remove("component-nav");
				}
				componentNav.classList.add("component-mV-nav");
				component_mTopBar.insertBefore(componentNav, null);
			}

			/*===(3)====================================================
			(.row-topmost ---&&&--- .row-brand .container-brandMain)
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



			/*=============================================================================
			===================     About US     ==========================================
			==============================================================================*/

			/*===(1)====================================================
			(.component-aboutUs)

			-->Layout change: mobile and not-mobile screen
					--> .container-mainImage: render direction: 
								 <= mobile: column along with other
								 > mobile: shift to right half of the screen: 
										 : moved from flexItem1
										 : relocated to: flexItem2  
			=========================================================*/			
			let originalLocation_mainImage = document.querySelector(".component-aboutUs .flexItem2 .container-mainImage");
			let newLocation_mainImage = document.querySelector(".component-aboutUs .flexItem1"); 

			if(originalLocation_mainImage != null) {
				let nextShiblingOfMainImage = newLocation_mainImage.querySelector(".container-designation");
				newLocation_mainImage.insertBefore(originalLocation_mainImage, nextShiblingOfMainImage);
			}

		//######################################################
		//######################################################
		//######################################################
		//######################################################
		//######################################################
		//######################################################

		} else {

			/*==========================================================
			===================     Header     =++======================
			===========================================================*/
			let rowTopmost = document.querySelector(".row-topmost .component-welcome");

			/*===(2)====================================================
			(.row-topmost &&& .row-mV-welcome &&& .row-nav)

			-->2.1 Shifting: 
					2.1.1 ==> .component-mV-welcome to .row-topmost
						Details --> welcome column (from .component-mV-welcome) to .row-topmost
								--> welcome column = (.welcome-Note) + (.register) in .component-mV-welcome
					2.1.2 ==>  .component-mV-nav (from .row-topmost) to .row-nav
						Details 

			-->2.2 Replace Class name: replace class ".component-mV-nav" with ".component-nav"		
			-->2.3 Remove : remove component-mV-welcome after relocating all its children  
			=============================================================*/

			if (document.contains(document.querySelector(".component-mV-welcome"))) {
			//document.contains() is a trick to check whether the page resized from mobile screen to bigger screen
				//------------------
				//---- 2.1.1 -------
				//------------------

				let elmToRelocate1 = document.querySelectorAll(".component-mV-welcome .welcomeNote, .component-mV-welcome .register");
				elmToRelocate1.forEach(function(x){
					rowTopmost.appendChild(x);
				});

				//------------------
				//---- 2.3 ---------
				//------------------
				document.querySelector(".component-mV-welcome").remove();

				//------------------
				//---- 2.1.2 -------
				//------------------
				let componentMVNav = document.querySelector(".component-mV-nav");
				document.querySelector(".wrapper-header .col-nav").appendChild(componentMVNav);

				//------------------
				//---- 2.2 ---------
				//------------------
				if (componentMVNav.classList.contains("component-mV-nav")) {
					componentMVNav.classList.remove("component-mV-nav");
				}
				componentMVNav.classList.add("component-nav");

			}









			

			/*===========================================================
			===================     About US     ========================
			============================================================*/	
			
			/*===(1)====================================================
			(.component-aboutUs)

			-->Layout change: mobile and not-mobile screen
					--> .container-mainImage: render direction: 
								 <= mobile: column along with other
								 > mobile: shift to right half of the screen: 
										 : moved from flexItem1
										 : relocated to: flexItem2  
			=========================================================*/			
			let originalLocation_mainImage = document.querySelector(".component-aboutUs .flexItem1 .container-mainImage");
			let newLocation_mainImage = document.querySelector(".component-aboutUs .flexItem2");                                                
			if(originalLocation_mainImage != null) {
				newLocation_mainImage.appendChild(originalLocation_mainImage);
			}
		}
	}













	/*###########################################################
	#############################################################
	#############################################################
	########                                             ########
	########                Tablet VERSION               ########
	########                                             ########
	#############################################################
	#############################################################  
	############################################################*/

	let mql_startFromTablet = window.matchMedia("(min-width: 48em)");
	//screenTest2(mql_startFromTablet);
	//mql_startFromTablet.addListener(screenTest2);

	function screenTest2(e){
		if(e.matches) {
		
		
		
		//######################################################
		//######################################################
		//######################################################
		//######################################################
		//######################################################
		//######################################################
		//######################################################
		//######################################################
		//######################################################
		//######################################################
		} else {

		}
	}


	
})



