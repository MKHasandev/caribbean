

// for controlling item quantity
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
      
function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}




$(document).ready(function (){

    // Changing languages
    $('.change-lang').click(function (){
        $('.lang').toggleClass('d-block');
    });

    // changing currency formate
    $('.change-currency').click(function (){
        $('.currency').toggleClass('d-block')
    });

    // user signIn and signUp setup
    $('.req-icons i.user').click(function (){
        $('.user-signin-signup').toggleClass('d-block')
    });

    // banner items slider
    $('.slider-section').slick({
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // slidder btn setup for banner slider
    $('.prev').click(function(){
        $('.slider-section').slick('slickPrev');
    });
      
    $('.next').click(function(){
        $('.slider-section').slick('slickNext');
    });

    // deal countdown start here 

    $('#countDown').countdown('2022/12/31', function(event) {
        $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));

        $(this).html(event.strftime('<div><span>%D</span><span>Days</span></div> <div><span>%H</span><span>Hours</span></div> <div><span>%M</span><span>Mins</span></div> <div><span>%S</span><span>Secs</span></div>'));
      });

    //   $('div#countDown').countdown('pause');


    // to change the product page
    $('#popular-products').click(function(){
        window.location.href='products.html';
    })


    // products pricing slider
    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            orientation: "horizontal",
            min: 0,
            max: 100,
            values: [0, 100],
            step: 1,
            slide: 
                function( event, ui ) {
                    $( "#pricerange" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
            });
        $( "#pricerange" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
          " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    });


    // getting products details from product items
    $('.products-part').click(function(){
        window.location.href='products_details.html';
    })

    // $('.products-list').click(function(){
    //     window.location.href='products_details.html';
    // })

    



    // changing image of product items
    $('.color-1').click(function(){
        $('#change-img').attr('src', 'images/red-wire-big-color1.png');
    })

    $('.color-2').click(function(){
        $('#change-img').attr('src', 'images/red-wire-big-color2.png');
    })

    $('.color-3').click(function(){
        $('#change-img').attr('src', 'images/red-wire-big-color3.png');
    })
});