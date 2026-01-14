

const vagas = []

function listarVagas(){
    const vagasEmtexto = vagas.reduce(function(textofinal, vaga, indice){
        textofinal += indice + '. '
        textofinal += vaga.nome 
        textofinal += " (" + vaga.candidatos.length + "candidatos)\n"
        return textofinal
    }, " ")

    alert(vagasEmtexto)
}


function novaVaga(){
    const nome = prompt
}














































function vagas(){
   let options = prompt('Escolha as vagas:\n' +
        '\n1.Listar vagas disponiveis' +
        '\n2.Criar uma nova vaga' +
        '\n3.Visualizar uma vaga' +
        '\n4.Inscrever um candidato em uma vaga'+
        '\n5.Excluir uma vaga'+
        '\n6.Sair'
    )

    return options ;
}

function executar(){

    let  menu = " "

   do {

    menu = vagas()

    switch(menu){
        case '1' :
            break
        case '2':
            break
        case '3' :
            break
        case '4':
            break
        case '5':
            break
        case '6':
            alert('saindo do menu.')
        default:
            alert('valores invalidos..')
            break
            
  
}
    
} while (menu !== '6');

}

executar()
