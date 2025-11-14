

let menu = '';
imoveis = [];





 do{
    
    menu = prompt('quantidade de imoveis: ' + imoveis.length + "\n" +
      '\n1.cadastrar imoveis' +
      '\n2.mostrar imoveis' +
      '\n3.sair'
    )
   
    switch(menu){
      case '1':
        let imov = {}
         imov.nome = prompt('informe o nome do cliente')
         imov.quartos = prompt('informe a quantidade de quartos')
         imov.banheiros = prompt('informe a quantidade de banheiros')
         imov.garagem = prompt('possui pagagem? \n (sim)x(não) ')

        let conf =  confirm("você deseja salvar esté imovel: \n" 
          + imov.nome
         )
         if(conf){
            imoveis.push(imov)
         }else{
          alert('voltando para o menu..')
         }
          break
      case '2':
         for(let i = 0; i <= imoveis.length; i++){
           alert('os imoveis são : \n' + (i + 1) +
            '\n nome do imovel: ' + imoveis[i].nome +
            '\nquartos: ' + imoveis[i].quartos +
            '\nbaheiro: ' + imoveis[i].banheiros +
            '\ngaragem: '  + imoveis[i].garagem
           )
         }
         
         break
      case '3':
        alert('saindo')
    }
 
 }while(menu != '3')