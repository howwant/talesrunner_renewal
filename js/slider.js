$(document).ready(function(){
  $('#main_banner').slick({
    slide: 'div',
    infinite: true,
    dots: true,
    autoplay : true,
    speed: 200,
    autoplaySpeed : 5000,
    pauseOnHover : true,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $("#main_banner .slick-prev").append(
    '<i class="fas fa-arrow-circle-left"></i>'
  );
  $("#main_banner .slick-next").append(
    '<i class="fas fa-arrow-circle-right"></i>'
    );
  $('.slider').slick({
    slide: 'div',
    infinite: true,
    autoplay : true,
    speed: 200,
    autoplaySpeed : 5000,
    pauseOnHover : true,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  $("#Benefits div.content_c div.slider .slick-prev").append(
    '<i class="xi-angle-left"></i>'
  );
  $("#Benefits div.content_c div.slider .slick-next").append(
    '<i class="xi-angle-right"></i>'
    );
});
