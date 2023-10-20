let btnRed = document.querySelector('#btn-biTR');
let btnBlue = document.querySelector('#btn-biTA');
let btnGreen = document.querySelector('#btn-biTV');
let content = document.querySelector('span');

btnRed.addEventListener('click',() => content.style.color = '#f34f4f');
btnBlue.addEventListener('click',() => content.style.color = '#8396ff');
btnGreen.addEventListener('click',() => content.style.color = '#5bb968');

let btnBRed = document.querySelector('#btn-biBR');
let btnBBlue = document.querySelector('#btn-biBA');
let btnBGreen = document.querySelector('#btn-biBV');
let contentB = document.querySelector('.bcktxt');

btnBRed.addEventListener('click',() => contentB.style.background = '#f34f4f');
btnBBlue.addEventListener('click',() => contentB.style.backgroundColor = '#8396ff');
btnBGreen.addEventListener('click',() => contentB.style.backgroundColor = '#5bb968');