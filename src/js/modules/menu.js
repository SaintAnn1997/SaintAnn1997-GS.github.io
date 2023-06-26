const menu = (hamburgerSelector, menuSelector, menuItemSelector) => {
    const hamburger = document.querySelector(hamburgerSelector);
    const menu = document.querySelector(menuSelector);
    const menuItem = document.querySelectorAll(menuItemSelector);

    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('menu__list--active');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', toggleMenu);

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
                toggleMenu();
        });
    });

};

export default menu;