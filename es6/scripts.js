"use strict" ;
$(document).ready(function() {

  var fixmeTop = $('.pricing').offset().top;       // get initial position of the element
  $(window).scroll(function() {                  // assign scroll event listener
    var currentScroll = $(window).scrollTop(); // get current position
    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
      $('.pricing').css({                      // scroll to that element or below it
        position: 'fixed',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)'
      });
    } else {                                   // apply position: static
      $('.pricing').css({                      // if you scroll above it
        position: 'relative'
      });
    }
});

  //Controls mobile price tabs
  $('.tabs > div > a').click(function(event) {
    event.preventDefault(); //stop browser to take action for clicked anchor
    //get displaying tab content jQuery selector
    var active_tab_selector = $('.tabs > div.active > a').attr('href');
    //find actived navigation and remove 'active' css
    var actived_nav = $('.tabs > div.active');
    actived_nav.removeClass('active');
    //add 'active' css into clicked navigation
    $(this).parents('div').addClass('active');
    //inactive displaying tab content
    $(active_tab_selector).removeClass('active');
    $(active_tab_selector).addClass('inactive');
    //show target tab content
    var target_tab_selector = $(this).attr('href');
    $(target_tab_selector).removeClass('inactive');
    $(target_tab_selector).addClass('active');
  });

  //Controls gallery iframes
  $('.gallery--cardOne').on('click', function () {
    $('#gallery--iframeOne').attr('src', 'https://seafood-restaurant.siteplus.com/');
    $('body').addClass('gallery--modalOpen');
    $('.gallery--modalOne').addClass('gallery--open');
  });
  $('.gallery--cardTwo').on('click', function () {
    $('#gallery--iframeTwo').attr('src', 'https://blog-page.siteplus.com/');
    $('body').addClass('gallery--modalOpen');
    $('.gallery--modalTwo').addClass('gallery--open');
  });
  $('.gallery--cardThree').on('click', function () {
    $('#gallery--iframeThree').attr('src', 'https://childcare.siteplus.com/');
    $('body').addClass('gallery--modalOpen');
    $('.gallery--modalThree').addClass('gallery--open');
  });
  $('.gallery--modalCard').on('click', function (e) {
    e.stopPropagation();
  });
  $('.gallery--close, .gallery--modal').on('click', function () {
    $('body').removeClass('gallery--modalOpen');
    $('.gallery--modal').removeClass('gallery--open');
  });
});
