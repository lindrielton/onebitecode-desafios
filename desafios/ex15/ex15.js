

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
    const nome = prompt('Informe um nome para a vaga')
    const descricao = prompt('Informe uma descrição para a vaga:')
    const dataLimite = prompt('informe uma data limite (dd/mm/aaa) para a vaga:')

    const comfirmacao = confirm(
        "Deseja criar uma nova vaga com essas informaçoes?\n" +
        "Nome:" + nome + "\nDescrição" + descricao + "\nData Limite: " + dataLimite
    )

    if(comfirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos:[]}
        vagas.push(novaVaga)
        alert("vaga criada.")

    }
}

function exibirVaga(){
    const indice = prompt("informe o indice da vaga que desejá exibir:")
    if(indice >= vagas.length || indice < 0){
           alert("Indice invalido")
           return
    }

    const vaga = vagas[indice]

    const vagasEmtexto = vaga.candidatos.reduce(function (acumulador, candidato){
        return acumulador + '\n-' + candidato

    }, " ")

    alert(
        "\nVaga n°: " + indice + 
        "\nNome :" + vaga.nome +
        "\nDescrição : " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nCandidatos: "  + vaga.candidatos.length +
        "\nCandidatos Inscritos :" + vagasEmtexto

    )
}

function inscreverCandidato(){
     const candidato = prompt('Informe o nome  do (a) candidato(a):')
     const indice = prompt("Informe o Indice da vaga para a qual o(a) candidato deseja se inscrever")
     const vaga = vagas[indice]

     const confirmacao = confirm(
        'Desejá increver este candidato ' + candidato + ' na vaga ' + indice + "?\n" +
        "Nome :" + vaga.nome + "\nDescrição :" + vaga.descricao + "\nData Limite: " + vaga.dataLimite

     )

     if(confirmacao){
        vaga.candidatos.push(candidato)
        alert('inscrição criada')
     }


}


function excluirVaga(){
    const indice = prompt("Informe o indece que voce desejã excluir")
    const vaga = vagas[indice]

    const confirmacao = confirm('tem certeza que desejá excluir a vaga ' + indice + "?\n" +
        "Nome :" + vaga.Nome + "\nDescrição" + vaga.descricao + "\nData Limite: " + vaga.dataLimite
     )

    if(confirmacao){
        vaga.splice(indice, 1)
        alert('vaga excluida')
    }
}




function vagasEnprego(){
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

    menu = vagasEnprego()

    switch(menu){
        case '1' :
             listarVagas()
             break
        case '2':
            novaVaga()
            break
        case '3' :
            exibirVaga()
            break
        case '4':
            inscreverCandidato()
            break
        case '5':
            excluirVaga()
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
