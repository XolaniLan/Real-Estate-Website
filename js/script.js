'use strict';

let people = document.getElementById('people');
let people_less = document.getElementById('people__less');
let people_more = document.getElementById('people__more');

let people_index = 4;

people_less.addEventListener('click', () => {
  people_index -= 1;

  if (people_index <= 0) {
    people_index = 1;
    people.value = people_index + ' People';
  } else {
    people.value = people_index + ' People';
  }
})

people_more.addEventListener('click', () => {
  people_index += 1;

  if (people_index >= 4) {
    people_index = 4;
    people.value = people_index + ' People';
  } else {
    people.value = people_index + ' People';
  }
})