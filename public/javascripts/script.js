function activeNavLinks () {
  const links = document.querySelectorAll('.list-nav a');
  const actualPath = window.location.pathname;

  links.forEach((item) => {
    if (item.getAttribute('href') === actualPath) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}
activeNavLinks()
