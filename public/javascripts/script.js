function activeNavLinks () {
  const links = document.querySelectorAll('.list-nav a');
  console.log(links)
  const actualPath = window.location.pathname;
  links.forEach((item) => {
    if (actualPath === '/inventory' && item.getAttribute('href') === '/') {
      item.classList.add('active');
    } else if (item.getAttribute('href') === actualPath) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  })
}
activeNavLinks()
