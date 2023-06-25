import sliderMain from "./modules/sliderMain";
import popupCatalog from "./modules/popupCatalog";
import globalSlider from "./modules/global-slider";

window.addEventListener('DOMContentLoaded', () => {
    sliderMain('.main-slider__slide', '.main-slider__control-prev', '.main-slider__control-next', '.main-slider__control-dot');
    popupCatalog('.popup__catalog', '.menu__list-item');
    globalSlider('.global-slider__slide', '.global-slider__wrapper', '.global-slider__inner', '.global-slider__prev', '.global-slider__next');
});