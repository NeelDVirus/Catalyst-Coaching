
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

			/*=============================================================================
			===================     HEADER     ============================================
			==============================================================================*/
			var topmostRow = document.querySelector(".wrapper-header .row-topmost");
			let colMVWelcome = document.querySelector(".wrapper-header .col-mV-welcome");
			let containerBrandMain = document.querySelector(".wrapper-header .row-brand .container-brandMain ");
			let component_mTopBar = topmostRow.querySelector(".col .component-mTopBar");


			/*===(1)====================================================
			(.topmost-row)

			-->Setting: top-absolute-position: 
							 = height of row-topmost row
			=========================================================*/
			var topmostRowHeight = topmostRow.offsetHeight;
			document.querySelector(".wrapper-header .row-brand").style.marginTop = topmostRowHeight + "px";


			/*===(2)====================================================
			(.topmost-row &&& .row-mV-welcome)

			-->create : componentMVWelcome
			-->Shifting: Welcome column(.welcome-Note, .register in .wrapper-header) in nav-column 
			=========================================================*/
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


			/*===(3)====================================================
			(.topmost-row ---&&&--- .row-brand .container-brandMain)
			Shifting of .row-brand's .container-brandMain to .component-mTopBar
			=========================================================*/
			component_mTopBar.insertBefore(containerBrandMain, component_mTopBar.childNodes[0]);


			/*===(4)====================================================
			(mobilemenu)
			--> Hambuger icon
			--> sidemenu
			=========================================================*/

			//hambrger icon
			$(document).ready(function(){
				$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
					$(this).toggleClass('open');
				});
			});

			//sidemenu 
			//var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
			var menuRight = document.querySelector( '.component-nav' ),
				showRight = document.querySelector(".showRight");
			showRight.onclick = function() {
				menuRight.classList.toggle("cbp-spmenu-open");
			};

			/*------------------------------------------
			----------     HEADER     ------------------
			--------------------------------------------*/
		}
	}
	var mql = window.matchMedia('(max-width: 62em)'); //62em = desktop-min
	screenTest(mql);
	mql.addListener(screenTest);
 


})



