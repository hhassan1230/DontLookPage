// http://vrvu.com/wp-content/uploads/sites/6/2015/12/gear-vr_feature_unrivaled-immersion.png
// http://hhassan1230.github.io/CodePenImgs/imagesLesson1/DontLookAwayLogoFinal1.png
// https://pbs.twimg.com/media/Ct-IZb5WgAAmR2t.jpg
// http://hhassan1230.github.io/CodePenImgs/imagesLesson1/CoverB2.png

$(window).on("load", function() {
  $('.vr-view').addClass('expand');
  $('.vr-goggles').addClass('fadeout expand-goggles');
  $('.text-panel, .down-arrow').addClass('fadein');
});

jQuery.fn.shake = function() {
  this.each(function(i) {
    $(this).css({ "position": "relative" });
    for (var x = 1; x <= 3; x++) {
        $(this).animate({ left: -10 }, 100).animate({ left: 0 }, 100).animate({ left: 10 }, 100).animate({ left: 0 }, 100);
    }
  });
  return this;
}

$(function () {
  $('section').smoothScroll({
    delegateSelector: 'a.down-arrow'
  });
  $('a.down-arrow i').delay(2500).shake();
});
