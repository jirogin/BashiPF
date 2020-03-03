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

    var chart = $("#chart")
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            chart.fadeIn();
        } else {
            chart.fadeOut();
        }
    })

    var creation1 = $("#creation1")
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            creation1.fadeIn();
        } else {
            creation1.fadeOut();
        }
    })

    var creation2 = $("#creation2")
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) {
            creation2.fadeIn();
        } else {
            creation2.fadeOut();
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

    $(function() {
        setTimeout(function(){
            $('.start p').fadeIn(1600);
        },500); //0.5秒後にロゴをフェードイン!
        setTimeout(function(){
            $('.start').fadeOut(2000);
        },2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
    });

    // var syoukai = $("#syoukai")
    // syoukai.css('visibility','hidden');
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 300) {
    //         syoukai.fadeIn();
    //         syoukai.css('visibility','visible');
    //     } else {
    //         syoukai.css('visibility','hidden');
    //     }
    // })
});