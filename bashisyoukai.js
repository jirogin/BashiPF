//top-btn
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

    var header = $("#header")
    $(window).scroll(function () {

        if ($(this).scrollTop() > 10) {
            header.fadeOut();
        } else {
            header.fadeIn();
        }
    }); 

    var header = $("#bashis")
    $(window).scroll(function () {
        if ($(this).scrollTop() > 10) {
            header.fadeOut();
        } else {
            header.fadeIn();
       }
    });

    var skills = $(".skills")
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            skills.fadeIn();
        } else {
            skills.fadeOut();
        }
    })

    var creation1 = $("#one")
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            creation1.fadeIn();
        } else {
            creation1.fadeOut();
        }
    })

    var creation2 = $("#two")
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) {
            creation2.fadeIn();
        } else {
            creation2.fadeOut();
        }
    })

    var creation3 = $("#three")
    $(window).scroll(function () {
        if ($(this).scrollTop() > 2000) {
            creation3.fadeIn();
        } else {
            creation3.fadeOut();
        }
    })

    $(function(){
        $('.single-item').slick({
          accessibility: true,
          autoplay: true,
          autoplaySpeed: 5000,
          dots: true,
          fade: true,
        });
      });

    

    //open-start
     $(function() {
         setTimeout(function(){
             $('.start p').fadeIn(1600);
         },240); //0.25秒後にロゴをフェードイン!
         setTimeout(function(){
             $('.start').fadeOut(2000);
         },500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
     });

});