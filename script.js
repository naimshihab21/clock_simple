const h2 = document.querySelector('.h2');
setInterval(() => {
  const date = new Date().toLocaleTimeString();
  h2.innerHTML = date;
}, 1000);