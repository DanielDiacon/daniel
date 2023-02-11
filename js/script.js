// menu burger <=>
let body = document.querySelector('body');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.onclick = function () {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
};
document.onclick = function (e) {
   if (e.target.id !== 'burger' && e.target.classList !== 'menu' && e.target.id !== 'logo') {
      burger.classList.remove('active');
      menu.classList.remove('active');
      body.classList.remove('lock');
   }
};

// loading page <=>
const loader = document.getElementById("loader");
window.addEventListener("load", function () {
   loader.style.display = "none";
});

// sections control
const about = document.getElementById('about');
const secAbout = document.getElementById('secAbout');
const portofolio = document.getElementById('portofolio');
const secPortofolio = document.getElementById('secPortofolio');
const contacts = document.getElementById('contacts');
const secContacts = document.getElementById('secContacts');

about.onclick = function () {
   secPortofolio.classList.remove('active');
   secContacts.classList.remove('active');
   secAbout.classList.add('active');
};
portofolio.onclick = function () {
   secPortofolio.classList.add('active');
   secContacts.classList.remove('active');
   secAbout.classList.remove('active');
};
contacts.onclick = function () {
   secContacts.classList.add('active');
   secPortofolio.classList.remove('active');
   secAbout.classList.remove('active');
};