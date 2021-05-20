var series = [
    ['InuYasha', 167, 20],
    ['Naruto', 220, 20],
    ['SwordArt', 25, 25],
    ['Game Of Thrones', 73, 50],
    ['The Mandalorian', 16, 45],
]
const botoes = document.querySelectorAll('button')

for(var i = 0; i<botoes.length; i++){
 botoes[i].addEventListener('click', dado)
}


function dado(){
 var para = document.querySelector('#resposta')

   return compara(para.value)
}

function compara(nome){
    var nome
    for(let i = 0; i<series.length;i++){
        for(var j = 0; j < 1;j++){
             if (nome == series[i][j]){
                console.log(nome);
            }
            
            
        }
    }
}
 








