




    let salario = parseFloat(prompt('qual  a quantidade de dinheiro que você tem'))
    let opcao = prompt('você possui: \n' + salario + 'R$ -suas opçoes são\n' + 
    '\n1 .adicionar ' +
    '\n2 .remover'+
    '\n3 .sair'
)
  
switch(opcao){
     case '1':
           while(opcao == '1'){
            quantia = parseFloat(prompt('quanto você quer depositar'))
            salario += quantia;
            alert('seu saldo foi atualizado, agora é ' + salario)

             opcao = prompt('você possui: \n' + salario + 'R$ -suas opçoes são\n' + 
            '\n1 .adicionar ' +
            '\n2 .remover'+
            '\n3 .sair') }
    case '2':
        while(opcao == '2'){
             quantia = parseFloat(prompt('informe o valor que você quer remover '))
             salario -= quantia;
             alert('seu saldo agora é ' + salario)

             opcao = prompt('você possui: \n' + salario + 'R$ -suas opçoes são\n' + 
            '\n1 .adicionar ' +
            '\n2 .remover'+
            '\n3 .sair')}
      
    case '3':
        alert('saindo da aplicação...')
        break

    default:
      alert('dados invcalidos')
}







