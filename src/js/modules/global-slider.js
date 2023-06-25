const globalSlider = (slidesSelector, sliderWrapperSelector, slidesFieldSelector, prevArrow, nextArrow) => {
    const sliderWrapper = document.querySelector(sliderWrapperSelector);
    const slidesField = document.querySelector(slidesFieldSelector);
    const slides = document.querySelectorAll(slidesSelector);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);

    // let width = window.getComputedStyle(sliderWrapper).width;

    let offset = 0;
    let slidesPerView;

    const
        screen = {
            small: null,
            medium: window.matchMedia('(min-width: 768px)'),
            large: window.matchMedia('(min-width: 992px)'),
            xl: window.matchMedia('(min-width: 1200px)'),
        };

    for (let [scr, mq] of Object.entries(screen)) {
        if (mq) mq.addEventListener('change', mqHandler);
    }

    function mqHandler() {
        let size;

        for (let [scr, mq] of Object.entries(screen)) {
            if (!mq || mq.matches) size = scr;
        }
        
        switch (size) {
            case 'xl':
                slidesField.style.width = 100 * slides.length / 4 + '%';
                slidesPerView = 4;
                break;
            case 'large':
                slidesField.style.width = 100 * slides.length / 3 + '%';
                slidesPerView = 3;
                break;
            case 'medium':
                slidesField.style.width = 100 * slides.length / 2 + '%';
                slidesPerView = 2;
                break;
            case 'small':
                slidesField.style.width = 100 * slides.length / 1 + '%';
                slidesPerView = 1;
                break;
        }

        console.log(size);

    };

    mqHandler();


    // slidesField.style.width = 100 * slides.length / 4 + '%';

    function nextSlide() {
        let width = window.getComputedStyle(sliderWrapper).width;
        
        if (offset == +width.slice(0, width.length - 2) * (slides.length / slidesPerView - 1)) {

            prev.classList.remove('global-slider__prev--inactive');
            next.classList.add('global-slider__prev--inactive');

            window.removeEventListener('click', nextSlide);

        } else {
            console.log(width);
            offset += +width.slice(0, width.length - 2);
            prev.classList.remove('global-slider__prev--inactive');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    };

    next.addEventListener('click', nextSlide);

    function prevSlide() {
        let width = window.getComputedStyle(sliderWrapper).width;

        if (offset == 0) {
            prev.classList.add('global-slider__prev--inactive');
            next.classList.remove('global-slider__prev--inactive');

            window.removeEventListener('click', prevSlide);
        } else {
            offset -= +width.slice(0, width.length - 2);
            next.classList.remove('global-slider__prev--inactive');
        }

        slidesField.style.transform = `translateX(-${offset}px)`;
    };

    prev.addEventListener('click', prevSlide);


    // next.addEventListener('click', () => {
    //     if (offset == +width.slice(0, width.length - 2) * (slides.length / 4 - 1)) { 
    //         offset = 0;
    //     } else {
    //         offset += +width.slice(0, width.length - 2);
    //     }

    //     slidesField.style.transform = `translateX(-${offset}px)`;
    // });

    // prev.addEventListener('click', () => {
    //     if (offset == 0) {
    //         offset = +width.slice(0, width.length - 2) * (slides.length / 4 - 1)
    //     } else {
    //         offset -= +width.slice(0, width.length - 2);
    //     }

    //     slidesField.style.transform = `translateX(-${offset}px)`;
    // });


};

export default globalSlider;