// Toggles the visible state of the navbar menu
function showNav() {
  const nav = document.querySelector('nav');
  const classes = nav.classList.value.trim();
  if (classes.includes('visible')) {
    nav.classList = '';
    const newClasses = classes.replace(' visible', '');
    nav.classList = newClasses;
  } else {
    console.log('It does not have it')
    nav.classList = '';
    const newClasses = classes + ' visible'
    nav.classList = newClasses;
  }
}

export default showNav;