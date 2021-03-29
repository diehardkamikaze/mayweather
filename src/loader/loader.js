function loaderToggle(loader) {
  if (loader.classList.contains('none')) {
    loader.classList.remove('none');
  } else {
    loader.classList.add('none');
  }
}

export default loaderToggle;
