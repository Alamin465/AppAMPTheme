$(document).ready(function(){
    $(".collaps-btn").click(function(){
      $(".responsive-menu ").slideToggle(1000);
    });

    $('.back_to_top').click(function(){
      $('html,body').animate({scrollTop:0},1000);
    });
    $(window).scroll(function(){
      var scroller = $(this).scrollTop();
      
      if(scroller > 500){
        $('.back_to_top').fadeIn(500);
      }
      
    else{
      $('.back_to_top').fadeOut(500);
    }
    });
  });