// Hamburger Start
const burgerMobile = document.querySelector('.burger-mobile');
const navigation = document.querySelector('.ul-navbar');

burgerMobile.addEventListener("click", function (event) {
  this.classList.toggle('active');
  navigation.classList.toggle('active');
})
// Hamburger End