/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliderMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliderMain */ "./src/js/modules/sliderMain.js");
/* harmony import */ var _modules_popupCatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popupCatalog */ "./src/js/modules/popupCatalog.js");
/* harmony import */ var _modules_global_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/global-slider */ "./src/js/modules/global-slider.js");



window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_sliderMain__WEBPACK_IMPORTED_MODULE_0__["default"])('.main-slider__slide', '.main-slider__control-prev', '.main-slider__control-next', '.main-slider__control-dot');
  Object(_modules_popupCatalog__WEBPACK_IMPORTED_MODULE_1__["default"])('.popup__catalog', '.menu__list-item');
  Object(_modules_global_slider__WEBPACK_IMPORTED_MODULE_2__["default"])('.global-slider__slide', '.global-slider__wrapper', '.global-slider__inner', '.global-slider__prev', '.global-slider__next');
});

/***/ }),

/***/ "./src/js/modules/global-slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/global-slider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const globalSlider = (slidesSelector, sliderWrapperSelector, slidesFieldSelector, prevArrow, nextArrow) => {
  const sliderWrapper = document.querySelector(sliderWrapperSelector);
  const slidesField = document.querySelector(slidesFieldSelector);
  const slides = document.querySelectorAll(slidesSelector);
  const prev = document.querySelector(prevArrow);
  const next = document.querySelector(nextArrow);

  // let width = window.getComputedStyle(sliderWrapper).width;

  let offset = 0;
  let slidesPerView;
  const screen = {
    small: null,
    medium: window.matchMedia('(min-width: 768px)'),
    large: window.matchMedia('(min-width: 992px)'),
    xl: window.matchMedia('(min-width: 1200px)')
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
  }
  ;
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
  }
  ;
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
  }
  ;
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

/* harmony default export */ __webpack_exports__["default"] = (globalSlider);

/***/ }),

/***/ "./src/js/modules/popupCatalog.js":
/*!****************************************!*\
  !*** ./src/js/modules/popupCatalog.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const popupCatalog = (popupSelector, triggerSelector) => {
  const popup = document.querySelector(popupSelector);
  const trigger = document.querySelectorAll(triggerSelector);
  let isOpen;
  function openPopup() {
    isOpen = true;
    popup.style.transform = 'scaleY(1)';
  }
  ;
  function closePopup() {
    isOpen = false;
    popup.style.transform = 'scaleY(0)';
  }
  ;
  trigger[1].addEventListener('click', () => {
    if (isOpen) {
      closePopup();
    } else {
      openPopup();
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (popupCatalog);

/***/ }),

/***/ "./src/js/modules/sliderMain.js":
/*!**************************************!*\
  !*** ./src/js/modules/sliderMain.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  }
  ;
  function changeClassDot() {
    dots.forEach(dot => dot.classList.remove('main-slider__control-dot--active'));
    dots[slideIndex - 1].classList.add('main-slider__control-dot--active');
  }
  ;
  showSlides(slideIndex);
  function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    changeClassDot();
  }
  ;
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
/* harmony default export */ __webpack_exports__["default"] = (sliderMain);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map