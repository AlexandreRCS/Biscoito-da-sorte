const closedCookie = document.querySelector('#openCookie')
const btnSorte = document.querySelector('#btnSorte')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

closedCookie.addEventListener('click', function(){
    openingCookie()
})

btnSorte.addEventListener('click', function(){
    openingCookie()
})







function openingCookie(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}