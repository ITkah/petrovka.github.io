$('.phone').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

$('.popup-with-zoom-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
});

$('.calc_output_box .multiple-items').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
});

$(".modal_feedback").submit(function(e) {
    e.preventDefault();
    let form_data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: "../../mail.php",
        data: form_data,
        success: function(response) {
            console.log(response);
            $(".thank_click").click();
        },
        error: function(error) {
            $(".thank_click").click();
        }
    });
    return false;
});

$(".page_feedback").submit(function(e) {
    e.preventDefault();
    let form_data = $(this).serializeArray();
    $.ajax({
        type: "POST",
        url: "../../mail.php",
        data: form_data,
        success: function(response) {
            console.log(response);
            $(".thank_click").click();
        },
        error: function(error) {
            $(".thank_click").click();
        }
    });
    return false;
});

$(".calc_currency_wrap span").on("click", function() {
    $(".calc_currency_wrap span").removeClass("curce_active");
    $(this).addClass("curce_active");
});

$(".call_filter").on("click", function(e) {
    $(this).remove();
    $(".calc_currency_wrap").show();
    $(".calc_input_wrap").show();
});


$(".calc_more").on("click", function(e) {
    e.preventDefault();
    $(".calc_output_box").show();
    $(this).remove();
    $(".multiple-items").slick('reinit');
});



$(".js-range-slider").ionRangeSlider();
//Документация тут http://ionden.com/a/plugins/ion.rangeSlider/start.html