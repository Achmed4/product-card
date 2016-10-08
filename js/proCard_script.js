$(document).ready(function() {

    //JSON DATA
    var data = [
        {
            "name": "Blue Sneakers",
            "color": "#0365B2",
            "images": [
                "img/sneakers-blue1.jpg",
                "img/sneakers-blue2.jpg",
                "img/sneakers-blue3.jpg",
                "img/sneakers-blue4.jpg"
            ]
        },
        {
            "name": "Red Sneakers",
            "color": "#AC0706",
            "images": [
                "img/sneakers-red1.jpg",
                "img/sneakers-red2.jpg",
                "img/sneakers-red3.jpg",
                "img/sneakers-red4.jpg"
            ]
        },
        {
            "name": "White Sneakers",
            "color": "#ACAAAB",
            "images": [
                "img/sneakers-white1.jpg",
                "img/sneakers-white2.jpg",
                "img/sneakers-white3.jpg",
                "img/sneakers-white4.jpg"
            ]
        }
    ];

    //Changing Images on Clicking Colors list-items

    //Red Color Button
    $('.proCard_colors li:nth-child(2)').on('click', function() {

        var html1 = '<img src="' + data[1].images[0] + '" />';
        var html2 = '<img src="' + data[1].images[1] + '" />';
        var html3 = '<img src="' + data[1].images[2] + '" />';
        var html4 = '<img src="' + data[1].images[3] + '" />';

        if( $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=1]') ) {
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=0]').html(html1);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=1]').html(html2);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=2]').html(html3);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=3]').html(html4);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=-1]').html(html4);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=4]').html(html1);
        }

        //Changing Slider Dotted Background-color
        $('.proCard_slider ul li').css('background-color', data[1].color);

    });

    //Blue Color Button
    $('.proCard_colors li:nth-child(1)').on('click', function() {

        var html1 = '<img src="' + data[0].images[0] + '" />';
        var html2 = '<img src="' + data[0].images[1] + '" />';
        var html3 = '<img src="' + data[0].images[2] + '" />';
        var html4 = '<img src="' + data[0].images[3] + '" />';

        if( $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=1]') ) {
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=0]').html(html1);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=1]').html(html2);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=2]').html(html3);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=3]').html(html4);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=-1]').html(html4);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=4]').html(html1);
        }

        //Changing Dotted Background's color
        $('.proCard_slider ul li').css('background-color', data[0].color);

    });

    //White Color Button
    $('.proCard_colors li:nth-child(3)').on('click', function() {

        var html1 = '<img src="' + data[2].images[0] + '" />';
        var html2 = '<img src="' + data[2].images[1] + '" />';
        var html3 = '<img src="' + data[2].images[2] + '" />';
        var html4 = '<img src="' + data[2].images[3] + '" />';

        if( $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=1]') ) {
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=0]').html(html1);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=1]').html(html2);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=2]').html(html3);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=3]').html(html4);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=-1]').html(html4);
            $('.proCard_images-section .proCard_slider .slick-slide').filter('[data-slick-index^=4]').html(html1);
        }

        //Changing Dotted Background's color
        $('.proCard_slider ul li').css('background-color', data[2].color);

    });

    //Adding select class on Colors list-items on click
    $('.proCard_colors ul li').on('click', function() {
        $(this).addClass('proCard_select').siblings().removeClass('proCard_select');
    });

    //Adding active class on Sizes list-items on click
    $('.size-quantity ul li').on('click', function() {
        $(this).addClass('proCard_active').siblings().removeClass('proCard_active');
    });

    //Quantity Plus and Minus Buttons
    $('.proCard_quantity form button').on('click', function() {

        var $button = $(this);
        var newVal = '';
        var oldVal = $('#pieces').val();

        if($button.hasClass('plus')) {
            newVal = parseFloat(oldVal) + 1;
        } else if($button.hasClass('minus')) {
            if(oldVal > 1) {
                newVal = parseFloat(oldVal) - 1;
            } else {
                newVal = 1;
            }
        }

        $('#pieces').val(newVal);

    });

    //Triggring Slick Slider
    $('.proCard_slider').slick({
        prevArrow: false,
        nextArrow: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

});
