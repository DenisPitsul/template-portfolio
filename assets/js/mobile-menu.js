(() => {
    const mobileMenu = document.querySelector('#sideMenu');
    const openMenuBtn = document.querySelector('#burgerBtn');
    const overlay = document.querySelector('#overlay');
    const closeBtn = document.querySelector('#closeBtn');
  
    const toggleMenu = (e) => {
      e.preventDefault();  
      mobileMenu.classList.toggle('is-side-menu-open');
      overlay.classList.toggle('is-open');
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 993px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-side-menu-open');
      overlay.classList.remove('is-open');
    });
  })();