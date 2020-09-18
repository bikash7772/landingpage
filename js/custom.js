$(document).ready(function(){
    $(".search-here").click(function(){
        $(".header-form").slideToggle();
    });
    $(".ti-close").click(function(){
        $(".header-form").slideUp();
    });
   $('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  });
   $('.main-header a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top  - 80
      }, 2000);
      return false;
  });

   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
});

});

