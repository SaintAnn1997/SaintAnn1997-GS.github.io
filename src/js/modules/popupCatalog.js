const popupCatalog = (popupSelector, triggerSelector) => {
    const popup = document.querySelector(popupSelector);
    const trigger = document.querySelectorAll(triggerSelector);

    let isOpen;


    function openPopup() {
        isOpen = true;
        popup.style.transform = 'scaleY(1)';
    };

    function closePopup() {
        isOpen = false;
        popup.style.transform = 'scaleY(0)';
    };

    trigger[1].addEventListener('click', () => {
        if (isOpen) {
            closePopup();
        } else {
            openPopup();
        }
    });

};

export default popupCatalog;