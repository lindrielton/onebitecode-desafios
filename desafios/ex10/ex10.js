let palavra = prompt('informe a palavra que você quer  saber se é um palidromo')
let palavracontra = ''

for(let i = palavra.length - 1 ; i >= 0; i--){
   palavracontra += palavra[i]

}

   if(palavra == palavracontra){
    alert('é um polidromo')
   }else{
    alert('não é um polindromo')
   }
