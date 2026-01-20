

let vagas = []

function listAvailableItems(){
     let vagastexto =    vagas.reduce((acumulador, nome, indice) => {
            acumulador += 'vaga :' + indice + '. '
            acumulador += " nome Vaga : " + nome.nome
            acumulador += '(' + 'quantidade de vagas: ' + nome.candidatos.length + ')' 
            return acumulador;

        }, '' )    

        alert(vagastexto)
}


function creiatVag(){
      let nome = prompt('Informe o nome para a vaga')
      let descricao = prompt('Informe uma descrição para Vaga')
      let dataLimit = prompt('Informe uma Data limite para a vaga')
    
      confirm('tem certeza que desejá criar está vaga ? ' + nome)

      if(confirm){
        let novaVaga = {nome, descricao, dataLimit, candidatos:[]}
        vagas.push(novaVaga)
        alert('sua vaga foi criada -;-')
      }


}

function viewVacancy(){
    
    let indice = prompt('informe o indice desta vaga')
    let vaga = vagas[indice]
    
    let candidatosTotal = vaga.candidatos.reduce(function(acumulador, vagas){
        acumulador + '\n' + '-' + vagas
    },'')

    alert('Retorno' +
        '\nIndice Vaga: ' + indice +
        '\nNome:' + vaga.nome +
        '\nDescrição :' + vaga.descricao +
        '\nData Limite :' + vaga.dataLimit +
        '\nQuantidade de Candidatos : ' + vaga.candidatos.length +
        '\nNome Candidatos' +  candidatosTotal
    ) 

}



function  registerCandidate(){
    let nome = prompt('Informe o nome do candidato')
    let indice = prompt('Informe o indice da vaga que você desejá se isncrever')
    let vaga = vagas[indice]

    if(indice >= vaga.length || indice < 0){
        alert('dados invalidos...')
        return
    }

    vaga.candidatos.push(nome)
    alert('candidato cadastrado')

}

/*  A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e 
        pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.*/


function excluirItems(){
    const indice = prompt("Informe o indece que voce desejã excluir")
    const vaga = vagas[indice]

    const confirmacao = confirm('tem certeza que desejá excluir a vaga ' + indice + "?\n" +
        "Nome :" + vaga.nome + "\nDescrição" + vaga.descricao + "\nData Limite: " + vaga.dataLimite
     )

    if(confirmacao){
        vaga.splice(indice, 1)
        alert('vaga excluida')
    }
}



        function menu(){
            let lista = prompt('Vagas de Emprego: ' +
                '\n1.Listar vagas disponíveis'+
                '\n2.Criar um nova vaga' +
                '\n3.Visualizar uma vaga' +
                '\n4.Inscrever um candidato em uma vaga'+
                '\n5.Excluir uma vaga' +
                '\n6.Sair'
            )
            return lista
        }


        function execute(){
            let corp = ''

            do {
                corp = menu()
                switch(corp){
                    case '1':
                        listAvailableItems()
                        break
                    case '2':
                        creiatVag()
                        break
                    case '3':
                        viewVacancy()
                        break
                    case '4':
                        registerCandidate()
                        break
                    case '5':
                        excluirItems()
                        break
                    case '6':
                        alert('saindo da aplicação')
                        break
                    default:
                        alert('dados invalidos')                    
                        
                }
                
            } while (corp !== '6');

        }


        execute()