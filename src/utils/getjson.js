const getJSON = (address) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', address, true);
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(xhr.response);
    } else { reject(xhr.status); }
  };
  xhr.send();
});

export default getJSON;
