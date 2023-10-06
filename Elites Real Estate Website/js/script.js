'use strict';

let people = document.getElementById('people');
let peopleLess = document.getElementById('people__less');
let peopleMore = document.getElementById('people__more');
let checkInMore = document.getElementById('checkin__more');
let checkOutMore = document.getElementById('checkout__more');
let checkInLess = document.getElementById('checkin__less');
let checkOutLess = document.getElementById('checkout__less');
let checkingInData = document.getElementById('checking_in__data');
let checkingOutData = document.getElementById('checking_out__data');
let checkIn = document.getElementById('checkin');
let checkOut = document.getElementById('checkout');
let buttonLeft = document.getElementById('btn__left');
let buttonRight = document.getElementById('btn__right');
let style = document.getElementsByClassName('content')[0].style;
let people_index = 4;

peopleLess.addEventListener('click', () => {
	people_index -= 1;

	if (people_index <= 0) {
		people_index = 1;
		people.value = people_index + ' People';
	} else {
		people.value = people_index + ' People';
	}
});

peopleMore.addEventListener('click', () => {
	people_index += 1;

	if (people_index >= 4) {
		people_index = 4;
		people.value = people_index + ' People';
	} else {
		people.value = people_index + ' People';
	}
});

checkIn.addEventListener('change', () => {
	let checkingValue = checkIn.value;
	console.log(checkingValue);

	let dates = new Date(checkingValue);
	let dates1 = new Date();
	const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let day = week[dates.getDay()];

	let date = dates.getDate();
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	let month = months[dates.getMonth()];

	if (dates < dates1) {
		console.log('No Date');
	} else {
		checkingInData.innerText = day + ', ' + date + ' ' + month;
	}
});

checkOut.addEventListener('change', () => {
	let checkInValue = checkIn.value;
	let checkOutValue = checkOut.value;

	console.log(checkInValue);

	let dates = new Date(checkOutValue);
	let dates1 = new Date(checkInValue);
	const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let day = week[dates.getDay()];

	let date = dates.getDate();
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	let month = months[dates.getMonth()];

	if (dates < dates1) {
		console.log('No Date');
	} else {
		checkingOutData.innerText = day + ', ' + date + ' ' + month;
	}
});

checkInMore.addEventListener('click', () => {
	const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	let today = new Date();
	let tommorrow = new Date(today);

	tommorrow.setDate(tommorrow.getDate() + 1);
	let day = week[tommorrow.getDay()];
	let date = tommorrow.getDate();
	let month = months[tommorrow.getMonth()];

	checkingInData.innerText = day + ', ' + date + ' ' + month;
});

checkOutMore.addEventListener('click', () => {
	const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	let today = new Date();
	let tommorrow = new Date(today);

	tommorrow.setDate(tommorrow.getDate() + 1);
	let day = week[tommorrow.getDay()];
	let date = tommorrow.getDate();
	let month = months[tommorrow.getMonth()];

	checkingOutData.innerText = day + ', ' + date + ' ' + month;
});

checkInLess.addEventListener('click', () => {
	const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	let today = new Date();

	let day = week[today.getDay()];
	let date = today.getDate();
	let month = months[today.getMonth()];

	checkingInData.innerText = day + ', ' + date + ' ' + month;
});

checkOutLess.addEventListener('click', () => {
	const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	let months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	let today = new Date();

	let day = week[today.getDay()];
	let date = today.getDate();
	let month = months[today.getMonth()];

	checkingOutData.innerText = day + ', ' + date + ' ' + month;
});

const images = [
  "url(../assets/images/Home__Backgorund2.jpg) no-repeat center/cover",
  "url(../assets/images/Home__Backgorund3.jpg) no-repeat center/cover",
  "url(../assets/images/Home__Backgorund4.jpg) no-repeat center/cover",
];

let index = 1;
let h6 = document.getElementById('h6');
h6.innerText = '+' + images.length;


buttonLeft.addEventListener('click', () => {
  index--;
  if (index < 0)
    index = (images.length) - 1;
  
    style.setProperty('--background', images[index]);
});

buttonRight.addEventListener('click', () => {
  index++;
  if (index > (images.length) - 1)
    index = 0;
  
    style.setProperty('--background', images[index]);
});
