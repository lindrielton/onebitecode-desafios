let nomePersonagem = prompt('nome do personagem')
let poderAtaque =parseFloat( prompt('poder de ataque'))
let Personagem2 = prompt('nome do personagem')
let quantidaePontos = parseFloat( prompt('quatidade de vida do personagem2 '))
let poderDefesa = parseFloat(prompt('poder de defesa'))
let defesa = confirm('possui defesa?')
let dano = 0;

if(poderAtaque > poderDefesa && !defesa){
     dano = poderAtaque - poderDefesa;
    
}if(poderAtaque > poderDefesa && defesa){
     dano = (poderAtaque - poderDefesa) / 2;
     
}

alert(`o ${Personagem2} sofreu um dano de ${quantidaePontos -= dano} sua vida agora é ${quantidaePontos}`)

if(poderAtaque <= poderDefesa ){
    alert('não teve dano')
}