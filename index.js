$(document).ready(function(){
    $(".hello").owlCarousel(
        {
            loop: false,
            margin: 10,
            slideBy:1,
            items: 5,
            dots: false,
            autoWidth: true,
            responsive: {
              0: {
                items: 1,
                loop:true
              },
              600: {
                items: 2,
                loop:true
              },
              1000: {
                items: 5,
              }
        }}
    );
 
  });


$(document).ready(function(){
    $("#owl-carousel").owlCarousel(
        {
            loop: false,
            margin: 0,
            slideBy:1,
            items: 3,
            dots: false,
            autoWidth: true,
            responsive: {
              0: {
                items: 1,
                loop:false
              },
              600: {
                items: 2,
                loop:false
              },
              1000: {
                items: 3,
              }
        }}
    );
 
  });