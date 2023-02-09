(() => {
  const menuBtnRef = document.querySelector('.js_click_invest');
  const mobileMenuRef = document.querySelector('.js_container_menu');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('onClick');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('onClick');
  });
})();
