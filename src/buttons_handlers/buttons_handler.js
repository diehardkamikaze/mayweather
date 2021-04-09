import addLoader from '../loader/loader';

const buttonHandler = (elem, logic) => {
  const clickedButton = window.masterObj.buttons[elem];
  const elementLoader = addLoader(window.masterObj[elem]);
  clickedButton.disabled = true;
  logic(elem)
    .then(() => {
      clickedButton.disabled = false;
      window.masterObj[elem].removeChild(elementLoader);
    });
};

export default buttonHandler;
