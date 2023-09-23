const createMain = document.querySelector('#create_main')
const createButton = document.querySelector('#btn_open')
const close = document.querySelector('.create_close')

createButton.onclick = function () {
    createMain.style.display = 'block';
};

close.onclick = function () {
    createMain.style.display = 'none';
};

window.onclick = function (event) {
    if (event.target == createMain) {
      createMain.style.display = 'none';
    }
};


const author = document.querySelector('#author')
const header = document.querySelector('#header')
const content = document.querySelector('#post_content')

