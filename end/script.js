'use strict'
const showMenu = document.querySelector('.menu')
const closeMenu = document.querySelector('.close-menu')
const heroImg = document.querySelector('.hero-img img')
const nav = document.querySelector('header ul')
const hero =document.querySelector('.hero')
showMenu.addEventListener('click', function(){
    showMenu.style.display = 'none'
    heroImg.style.display = 'none'
    nav.classList.add('show-menu')
    hero.classList.add("overlay")
    closeMenu.style.display = 'block'
})
closeMenu.addEventListener('click', function(){
    closeMenu.style.display = 'none'
    heroImg.style.display = 'block'
    nav.classList.remove('show-menu')
    hero.classList.remove("overlay")
    showMenu.style.display = 'block'
})