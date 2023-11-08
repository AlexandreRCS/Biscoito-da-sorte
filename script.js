const closedCookie = document.querySelector('#openCookie')
const btnSorte = document.querySelector('#btnSorte')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const luckyPhrase = document.querySelector('#msgSorte')
let luckyPhrases = []

let numberRadom = Math.round(Math.random() * 4)



luckyPhrases =[ ' Se alguém está tão cansado que não possa te da um sorrio, deixa-lhe o teu', " Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.", "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.", "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.", "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito."]

closedCookie.addEventListener('click', function(){
    luckyPhrase.innerHTML = luckyPhrases[numberRadom]
    openingCookie()
})

btnSorte.addEventListener('click', function(){
    luckyPhrase.innerHTML = ''
    numberRadom = Math.round(Math.random()* 4)
    openingCookie()
})



function openingCookie(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}