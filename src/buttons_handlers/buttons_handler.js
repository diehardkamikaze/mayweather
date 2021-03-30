const buttonHandler = (elem, logic) => {
  const button = window.masterObj.buttons[elem];
  button.disabled = true;
  logic(button).then(() => { console.log('123'); button.disabled = false; });
};

export default buttonHandler;
