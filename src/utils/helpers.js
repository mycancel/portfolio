export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Toggles the visible state of the navbar menu
export function showNav() {
  const nav = document.querySelector('nav');
  const menuBtn = document.querySelector('.menu');
  const classes = nav.classList.value.trim();
  if (classes.includes('visible')) {
    menuBtn.textContent = '';
    menuBtn.textContent = 'Menu';
    nav.classList = '';
    const newClasses = classes.replace(' visible', '');
    nav.classList = newClasses;
  } else {
    menuBtn.textContent = '';
    menuBtn.textContent = 'Close';
    nav.classList = '';
    const newClasses = classes + ' visible'
    nav.classList = newClasses;
  }
};