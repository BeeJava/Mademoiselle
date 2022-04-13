$(document).ready(function () {
    function hamburgerToX() {
        $('.navbar-toggler span').each(function () {
            let dataClass = $(this).attr('data-class');
            $(this).toggleClass(dataClass);
        });
    }
    $('.navbar-toggler').click(function () {
        hamburgerToX();
    });
    $('.navbar-nav').on('click', '.toggle-submenu', function (e) {
        e.preventDefault();
        $(this).toggleClass('fa-chevron-down fa-chevron-up');
        $(this).parent().next('.navbar-submenu').slideToggle();
    });

    function setMarginTop() {
        let headerHeight = $('header').outerHeight();
        $('main').css('marginTop', headerHeight);
    }
    function setMarginViaScroll() {
        let headerHeight = $('header').outerHeight();
        if (($(window).scrollTop()) > headerHeight) {
            $('header').removeClass('py-lg-5');
            $('header').addClass('py-2');
            headerHeight = $('header').outerHeight();
            $('main').css('marginTop', headerHeight);
        } else {
            $('header').addClass('py-lg-5');
            $('header').removeClass('py-2');
            headerHeight = $('header').outerHeight();
            $('main').css('marginTop', headerHeight);
        }
    }
    setMarginViaScroll();
    setMarginTop();
    $(window).resize(function () {
        setMarginTop();
    }).scroll(function () {
        setMarginViaScroll();
    });


    if ($('.testimonials-slider').length > 0) {
        $('.testimonials-slider').owlCarousel({
            items: 1,
            autoplay: true,
            autoplayHoverPause: true,
            loop: true
        });
    }

    function highlightLink() {
        let mainId = $('main').attr('id');
        $('header .nav-link').each(function () {
            if ($(this).attr('href').includes(mainId)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }
    highlightLink();

    




    $('.about').on('click', '.toggle-sidebar', function () {
        $(this).toggleClass('fa-chevron-left fa-chevron-right').toggleClass('toggler-position');
        $('.about-sidebar-news').toggleClass('slide-in');
    });
// animation start
    function animation() {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHeight - 50) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }



    animation();
    $(window).scroll(function () {
        animation();
    });
// animation end




    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                    $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                    $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
                },
                rules: {
                    name: {
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    subject: {
                        required: true
                    },
                    message: {
                        required: true,
                        maxlength: 255

                    }
                },
                messages: {
                    name: {
                        required: 'Name* is required field!!!'
                    },
                    email: {
                        required: 'Email* is required field!!!',
                        email: 'Please insert valid Email address!!!'
                    },
                    subject: {
                        required: "Subject* is required field!!!"
                    },
                    message: {
                        required: 'Message* is required field!!!',
                        maxlength: 'Max Message length is 255 characters !!!'

                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.error-message'));
                }

            });
        });
    }//Form Validation






});

