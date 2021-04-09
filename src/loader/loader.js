const addLoader = (elem) => {
  const childLoader = document.createElement('div');
  childLoader.classList.add('loader');
  elem.appendChild(childLoader);
  return childLoader;
};

export default addLoader;
