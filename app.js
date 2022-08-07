const explore = document.querySelector('.explore-btn button')
const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.menu-btn button')
const closeBtn = document.querySelector('.close-btn button')


explore.addEventListener('click', function() {
    location.href = 'destination.html'
})

menuBtn.addEventListener('click', function() {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', function() {
    menu.classList.remove('open')
})