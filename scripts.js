
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


$(function(){
  $('a[href^=".contents-about"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == ".contents-about h1" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){
  $('a[href^=".contents-member"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == ".contents-member h1" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){
  $('a[href^=".contents-gallery"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == ".contents-gallery h1" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


