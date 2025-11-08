let turista = prompt('olá, informe o seu nome')
let viagem = prompt('você já viajou muito ?')
let nomes = []

while(viagem != 'não'){
      if(viagem){
        let nome = prompt('me fale outras cidades que você já passou')
         nomes.push(nome)
      }else{
        alert('saindo...')
      }
      viagem = prompt('você gostou de viajar ?')
       
       
}


alert('seu nome é :' + turista + ': você viajou pelas cidades de :' + nomes + 
    'você já viajou por ' + nomes.length + 'cidades...' )