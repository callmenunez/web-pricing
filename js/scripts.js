"use strict";$(document).ready(function(){var l=$(".pricing").offset().top;$(window).scroll(function(){var a=$(window).scrollTop();l<=a?$(".pricing").css({position:"fixed",top:"0",left:"50%",transform:"translateX(-50%)"}):$(".pricing").css({position:"relative"})}),$(window).bind("scroll",function(){var a=$(window).height()-125;$(window).scrollTop()>a?$(".tabs").addClass("fixed"):$(".tabs").removeClass("fixed")}),$(".tabs > div > a").click(function(a){a.preventDefault();var l=$(".tabs > div.active > a").attr("href");$(".tabs > div.active").removeClass("active"),$(this).parents("div").addClass("active"),$(l).removeClass("active"),$(l).addClass("inactive");var e=$(this).attr("href");$(e).removeClass("inactive"),$(e).addClass("active")}),$(".gallery--cardOne").on("click",function(){$("#gallery--iframeOne").attr("src","https://seafood-restaurant.siteplus.com/"),$("body").addClass("gallery--modalOpen"),$(".gallery--modalOne").addClass("gallery--open")}),$(".gallery--cardTwo").on("click",function(){$("#gallery--iframeTwo").attr("src","https://blog-page.siteplus.com/"),$("body").addClass("gallery--modalOpen"),$(".gallery--modalTwo").addClass("gallery--open")}),$(".gallery--cardThree").on("click",function(){$("#gallery--iframeThree").attr("src","https://childcare.siteplus.com/"),$("body").addClass("gallery--modalOpen"),$(".gallery--modalThree").addClass("gallery--open")}),$(".gallery--modalCard").on("click",function(a){a.stopPropagation()}),$(".gallery--close, .gallery--modal").on("click",function(){$("body").removeClass("gallery--modalOpen"),$(".gallery--modal").removeClass("gallery--open")})});