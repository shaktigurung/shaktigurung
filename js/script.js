/*============================================
|||||Preloader|||||
=============================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*============================================
|||||Navigation|||||
=============================================*/
function openSlideMenu(){
      document.getElementById('side-menu').style.width = '100%';
    }

    function closeSlideMenu(){
      document.getElementById('side-menu').style.width = '0';
    }
/*============================================
|||||Scroll Reveal Animation|||||
=============================================*/
  window.sr = ScrollReveal();
  sr.reveal('.menubar',{duration:6000, origin:'bottom', distance:'100px'});
  sr.reveal('#home-heading-1',{duration:5000, origin:'top', distance:'180px'});
  sr.reveal('#home-heading-2',{duration:7000, origin:'bottom', distance:'180px'});
  sr.reveal('.vertical-heading',{duration:3000, origin:'top', distance:'180px'});
  sr.reveal('.contact-title',{duration:4000, origin:'top', distance:'180px'});

/*============================================
|||||Skill Bar|||||
=============================================*/

function skillbar(){
$(document).ready(function(){
        		$('.html').animate({width:'90%'},2000);
        		$('.css').animate({width:'80%'},2000);
        		$('.js').animate({width:'70%'},2000);
        		$('.php').animate({width:'75%'},2000);
        		$('.jquery').animate({width:'70%'},2000);
                $('.mysql').animate({width:'60%'},2000);
                $('.bootstrap').animate({width:'85%'},2000);
                $('.drupal').animate({width:'80%'},2000);
                $('.wordpress').animate({width:'75%'},2000);
                $('.git').animate({width:'80%'},2000);
                $('.github').animate({width:'80%'},2000);
        	});
}

/*============================================
|||||Contact Form|||||
=============================================*/

$(".input").focus(function(){
    $(this).parent().addClass("focus");
}).blur(function(){
    if($(this).val()=== ''){
        $(this).parent().removeClass("focus");
    }
})