
let cartas = [];

do{
   resultado = prompt('escolha uma decisão:\n'+'a quantidade de cartas são:\n' + cartas.length +
    '\n1.puchar carta' +
    '\n2.adicionar uma carta' +
    '\n3.sair'
)
let cart = '';
switch(resultado){
    case '1':
        if(cartas == 0){
            alert('não temos cartas no baralho atualmente')
        }else{
            cart = cartas.shift()   ;
            alert('sua carta é: = ' + cart)
        }
    break
    case '2':
     nome = prompt('informe o nome da carta')
     cartas.push(nome)
    break
    case '3':
        alert('saindo da aplicação....')
    break
    default:
        alert('dados invalidos')
    break
}

}while(resultado != '3')