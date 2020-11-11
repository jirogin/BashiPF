var option = {
  section : '.js-section', // 対象を指定
  easing: "swing", // イージングをしてい(jQueryのanimation)
  scrollSpeed: 500, // スクロール時の速度
  scrollbars: true, // スクロールバーを表示するか
};

$(function() {
  $.scrollify(option); // scrollifyの実行
});

$(function() {
  var topBtn = $('#page_top');  
  //topボタンは初期状態では隠れた状態にしておく  
  topBtn.hide();
  //スクロールが500に達したらボタン表示
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          //500に達したらfadeInする
          topBtn.fadeIn();
      } else {
          //500より上に行ったらfadeOutして消える
          topBtn.fadeOut();
      }
  });
  //スクロールしてトップ
  topBtn.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 650, "swing");
      return false;
  });
});