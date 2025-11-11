


let escolha = '';
let nome = '';
let lista = [];



  do{
         let cont = '';
         for(let i = 0; i < lista.length; i++){
            cont += (i + 1) + '°'+ '-' + lista[i] + '\n' 
            } 


     escolha = prompt('lista dos pacientes:\n'+
     cont +
    '\n1.novo-paciente'+
    '\n2.consultar-paciente'+
    '\n3.sair'
)

switch(escolha){
     case '1':
           nome = prompt('informe o nome do paciente')
            lista.push(nome);       
     break
     case '2':
        let delet = lista.shift()
        prompt('o paciente a ser consultado é :\n' + delet)
        if(!delet){
            alert('não ha pacientes')
        }
    break
    case '3':
        alert('saindo...')
    break
    default:
        alert('dados invalidos')
}

}while(escolha !== '3')