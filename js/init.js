$('.home-slider-js').slick({
    dots: true,
    arrows: false,
    fade: true
});

$('.home-slider-js').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    new WOW().init();
});

(function($){
    new WOW().init({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 3,
        mobile: false,
        live: false
    });
})(jQuery);

$('.slider-last-projects-js').slick({
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="arrows prev"><span></span></button>',
    nextArrow: '<button type="button" class="arrows next"><span></span></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false
            }
        }
    ]
});
$('.slider-our-clients-js').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }
    ]
});
$('.slider-partners-js').slick({
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="arrows prev"><span></span></button>',
    nextArrow: '<button type="button" class="arrows next"><span></span></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
    ]
});

(function($){
    $('#menu').slicknav({
        prependTo: "header .flex-container:first-child()",
        label: '',
    });

    $('.close-menu-btn').on('click', function(){
        $('#menu').slicknav('close');
    });
})(jQuery);

(function($){
    let btn = $('.btn'),
        close = $('.close-modal'),
        space = $('.wrap-modal');

    function openModal(e) {
        e.preventDefault();
        let targetModal = $(this).attr('href');
            parent = $(targetModal).closest('.overlay');

        $('.modal').removeClass('open');
        $('.overlay').removeClass('active');
        $(targetModal).addClass('open');
        $(parent).addClass('active');
    };

    function closeModal(e) {
        e.preventDefault();
        $(this).closest('.modal').removeClass('open');
        $(this).closest('.overlay').removeClass('active');
    };

    function closeModalSpace() {
        $(space).next('.modal').removeClass('open');
        $(space).closest('.overlay').removeClass('active');
    }

    btn.on('click', openModal);
    close.on('click', closeModal);
    space.on('click', closeModalSpace);
})(jQuery);

(function($){
    let language = $('.lang > a'),
        languageList = $('.lang-list'),
        languageLink = $('.lang-list a');

    function openLangMenu() {
        $(languageLink).removeClass('active');
        for(let i = 0; i < languageLink.length; i++){
            if($(language).attr('class') == $(languageLink[i]).attr('class')){
                $(languageLink[i]).addClass('active');
            }
        }
        $(languageList).addClass('open');
    }

    function closeLangMenu() {
        $(languageList).removeClass('open');
    }

    function activeLanguageLink(e) {
        e.preventDefault();
        $(language).attr('class', $(this).attr('class'));
        $(language).text($(this).text());
        closeLangMenu();
    }

    languageList.on('mouseleave', closeLangMenu);
    languageLink.on('click', activeLanguageLink);
    language.on('click', function(){
        if(!$(languageList).hasClass('open')){
            openLangMenu();
        } else{
            closeLangMenu();
        }
    });

    let slide = $('.slider-partners-js .slick-slide');

    function slideHoverOn(){
        let img = $(this).find('img');
        let src = $(img).attr('data-src-img');
        $(img).attr('src', src);
    }

    function slideHoverOff(defaultSrc){
        let img = $(this).find('img');
        let src = $(img).attr('data-old-src');
        $(img).attr('src', src);
    }

    slide.on('mouseenter', slideHoverOn);
    slide.on('mouseleave', slideHoverOff);

    var fileBtn = $('input[type=file]');

    fileBtn.on('change', function(){
        $(this).next('label').children('.name-file').text($(this).val());
    });

})(jQuery);

(function($) {
    $(function() {
    
        $('select').styler({
            selectSmartPositioning: false,
            selectPlaceholder: true
        });
    
    });

})(jQuery);

$(function(){
    $('.jq-selectbox').on('click', function(){
        var $this = $(this).parents('.select');

        if($this.hasClass('rotate')){
            $this.removeClass('rotate');
        } else {
            $this.addClass('rotate');
        }
    });
});


