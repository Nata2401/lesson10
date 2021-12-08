'use strict';
const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
console.log(book);

book[0].before(book[1]);
book[2].before(book[4]);
book[2].before(book[3]);
book[2].before(book[5]);

document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'; 
book[4].querySelector('h2').querySelector('a').text = 'Книга 3. this и Прототипы Объектов';
document.querySelector('.adv').remove();

const elem1 = book[0].querySelectorAll('li');
elem1[2].before(elem1[3]);
elem1[2].before(elem1[6]);
elem1[2].before(elem1[8]);
elem1[10].before(elem1[2]);

const elem2 = book[5].querySelectorAll('li');
elem2[2].before(elem2[9]);
elem2[2].before(elem2[3]);
elem2[2].before(elem2[4]);
elem2[8].before(elem2[5]);

const newElem = document.createElement('li');
const item = document.querySelectorAll('ul');
newElem.textContent = 'Глава 8: За пределами ES6';
item[5].append(newElem);

const elem3 = book[2].querySelectorAll('li');
elem3[9].before(elem3[10]);






