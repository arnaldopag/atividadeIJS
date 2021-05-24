var series = [
    ['InuYasha', 167, 20],
    ['Naruto', 220, 20],
    ['SwordArt', 25, 25],
    ['Game Of Thrones', 73, 50],
    ['The Mandalorian', 16, 45],
]
const botoes = document.querySelector('button')

botoes.addEventListener('click', dado)

function dado(){
let nome = document.querySelector('#serie')
let eps = document.querySelector('#epsVistos')
chamar(nome.value, eps.value)
}

function chamar(a, b){
let nEps = parseInt(b)
let index;
    if(a == 'InuYasha' || 'inuyasha'){
    index = 0

    }else if(a == 'naruto' || 'Naturo'){
    index = 1

    }else if(a == 'SwordArt' || 'swordart' || 'Swordart'){
    index = 2

    }else if(a == 'Game Of Thrones' || 'game of thrones'){
    index = 3   

    }
    else if(a == 'The Mandaloria' || 'the mandalorian'){
        index = 4  
    }
    mostrar(index , nEps)
}

function mostrar(nIndex , epsVistos){

let totalEsp = parseInt(series[nIndex][1])
let horas, eps
let duracao = parseInt(series[nIndex][2])
duracao /= 60;
eps = totalEsp - epsVistos
horas = duracao * eps
let show = document.querySelector('#mostrar')
show.textContent = 'Ainda faltam' + horas + 'para terminar de assistir essa serie'




}






