// http://vrvu.com/wp-content/uploads/sites/6/2015/12/gear-vr_feature_unrivaled-immersion.png
// http://hhassan1230.github.io/CodePenImgs/imagesLesson1/DontLookAwayLogoFinal1.png
// https://pbs.twimg.com/media/Ct-IZb5WgAAmR2t.jpg
// http://hhassan1230.github.io/CodePenImgs/imagesLesson1/CoverB2.png
$(window).on("load", function() {
  $('.vr-view').addClass("expand");
  $('.vr-goggles').addClass('fadeout expand-goggles');
    $('.text').addClass('fadein');
    // $('.vr-view').fadeTo(100, 0.2);
    // $(".vr-frame").css("background","none");
  
    

});

  $('.vr-frame').smoothScroll({         
    delegateSelector: '.down-arrow a'       
  });

  //$('.down-arrow a').click(function(event) {         event.preventDefault();         
 // var link = this;         
 //    $.smoothScroll({           scrollTarget: link.hash         });       });               var p1Opts = $p1.smoothScroll('options') || {};          p1Opts.speed = p1Opts.speed === 1;
//overflow: hidden;