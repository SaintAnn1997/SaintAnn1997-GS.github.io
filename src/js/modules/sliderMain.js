const sliderMain = (slidesSelector, prevArrow, nextArrow, dotsSelector) => {
    const slides = document.querySelectorAll(slidesSelector);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const dots = document.querySelectorAll(dotsSelector);

    let slideIndex = 1;

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.add('animated');
        });

        slides[slideIndex - 1].classList.add('fadeInOut');
        slides[slideIndex - 1].style.display = 'block';
    };

    function changeClassDot() {
        dots.forEach(dot => dot.classList.remove('main-slider__control-dot--active'));
        dots[slideIndex - 1].classList.add('main-slider__control-dot--active');
    };

    showSlides(slideIndex);

    function plusSlides(n) {
        slideIndex += n;

        showSlides(slideIndex);
        changeClassDot();
    };

    prev.addEventListener('click', () => {
        plusSlides(-1);
        slides[slideIndex - 1].classList.remove('slideInLeft');
        slides[slideIndex - 1].classList.add('slideInRight');
    });

    next.addEventListener('click', () => {
        plusSlides(1);
        slides[slideIndex - 1].classList.add('slideInLeft');
        slides[slideIndex - 1].classList.remove('slideInRight');
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slideIndex = index + 1;
            
            showSlides(slideIndex);
            changeClassDot();
        });
    });
};

export default sliderMain;