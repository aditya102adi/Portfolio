const navManu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")
/*=============== SHOW MENU ===============*/
if(navToggle)
{
  navToggle.addEventListener('click',()=> {
    navManu.classList.add("show-menu")
  })
}
/*============== MENU HIDDEN ===============*/
if(navClose)
{
  navToggle.addEventListener('click',()=> {
    navManu.classList.remove("show-menu")
  })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
  const navManu = document.getElementById("nav-menu")
  //when we click on each nav link,we remove the show menu clas
  .navManu.classList.remove("show-menu")
}
navLinks.forEach(n=> n.addEventListener('click', linkAction))
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrolHeader()
{
  const header = document.getElementById("header")
  if(this.scrollY >=80 )header.classList.add("scroll-header");else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)
/*=============== TESTIMONIAL SWIPER ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme=document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
//open modal
const openThemeModal = () => {
  themeModal.style.display='grid';
}
theme.addEventListener("click", openThemeModal);
/*===== FONTS =====*/

/*===== PRIMARY COLORS =====*/

/*===== THEME BACKGROUNDS =====*/
