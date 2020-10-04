(function($) {
    "use strict";


    // sticky nav
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.header-area').addClass("sticky")
        } else {
            $('.header-area').removeClass("sticky")
        }
    })
    /* magnificPopup video view */
    $(".mfp-btn").magnificPopup({
        type: "iframe"
    });


    $('.test-popup-link').magnificPopup({
        type: 'image'
        // other options
    });






    (function() {
        if (document.querySelectorAll('.answer-optons') !== null) {
            document.querySelectorAll('.answer-optons').forEach(function(each) {
                window.addEventListener('load', function() {
                    each.children[0].classList.add('active');
                })
                each.querySelectorAll('label').forEach(function(single) {
                    single.addEventListener('click', function() {
                        each.querySelectorAll('label').forEach(function(each) {
                            each.classList.remove('active');
                        })
                        single.className = "active";
                    })
                })
            })
        }
    })();



























})(jQuery);