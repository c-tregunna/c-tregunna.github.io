//----------------------
// Menu slide in and out
//----------------------

const menuIcon = document.getElementById("menuIcon");
const mainNav = document.querySelector(".main-nav");
const closeBtn = document.querySelector(".closebtn");
const menu = document.getElementById("myNav");
const links = document.querySelector(".overlay-content");

menuIcon.addEventListener('click', () => { // on click of menu icon hide the main-nav background and icon
    menuIcon.style.display = "none";
    mainNav.style.backgroundColor = "transparent";
    mainNav.style.transition = "all 1s";
    menu.style.width = "100%";
    menu.style.transition = "all .8s";
});

function menuHide(callback) {  // function for the menu overlay behaviour
    menuIcon.style.display = "block";
    mainNav.style.backgroundColor = "#ecf0f1";
    mainNav.style.transition = "all 1s";
    menu.style.width = "0";
    menu.style.transition = "all .8s";
}

closeBtn.addEventListener('click', () => { // on click of close button, show main-nav and menu button
    menuHide();
});

links.addEventListener('click', () => { // on click of links, show main-nav and menu button
    menuHide();
});

//----------------------
// Skills Chart
//----------------------

var ctx = document.getElementById('mySkills').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ['HTML', 'CSS', 'Javascript', 'Sass', 'Bootstrap'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['#ccc5b9ff',
            '#403d39ff',
            '#eb5e28ff',
            '#ecf0f1',
            '#252422ff'],
            data: [30, 28, 14, 15, 13]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Hover over the segments to see my skill set'
        }
    }
});

//-------------------------------
// Show current year for copywrite
//-------------------------------

let today = new Date();
let year = today.getFullYear();
let currentYear = document.querySelector('#date');
currentYear.innerHTML = year;

//-------------------------------
// Scroll through array of images for a gallery
//-------------------------------


const photos = [
    {
      photo: 'img/bike.jpg',
      text: 'Image of a bike against a railing'
    },
    {
      photo: 'img/island.jpg',
      text: 'Image of Porto Santo island'
    },
    {
      photo: 'img/lochNess.jpg',
      text: 'Image of Loch Ness'
    },
    {
      photo: 'img/church.jpg',
      text: 'Image of Worcester Cathedral'
    },
    {
      photo: 'img/meg.jpeg',
      text: 'Image of Meg the Westie, best dog in the world'
    }
  ];




const gallery = document.querySelector('.photo');
let index = 0;
const nextImage = document.querySelector('.next');
const prevImage = document.querySelector('.prev');

function html(callback) {
    gallery.innerHTML = `<img src="${photos[index].photo}" alt="${photos[index].text}">`;
}

html(); //Print first value of array right away.

function nextElement(callback) {
    if (index <= photos.length) {
     index = (index + 1) % (photos.length);
    } else {
      index = 0;
    }
    html();
 }

function prevElement(callback) {
    if (index > 0) {
      index = (index - 1) % (photos.length);
    } else {
      index = photos.length - 1;
    }
    html();
  }

nextImage.addEventListener('click', e => {
    nextElement();
});

prevImage.addEventListener('click', e => {
    prevElement();
});




