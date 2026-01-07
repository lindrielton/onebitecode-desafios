

function triangulo(){
      let base = prompt('informe a base  do triangulo')
      let altura = prompt('informe a altura  do triangulo')
      return (base*altura) / 2  
}

function retangulo(base,altura){
       base = prompt('informe a base  do triangulo')
       altura = prompt('informe a altura  do triangulo')
      return (base*altura)
}

function quadrado(){
      let lado= prompt('informe o lado do triangulo')
      return (lado*lado)
}

function trapezio(){
    let baseMaior = prompt('informe a base maior')
    let baseMenor = prompt('informe a base menor')
    altura = prompt('informe a alturra')
    return (baseMaior + baseMenor)* altura / 2  
}

function circulo(){
    let raio = prompt('informe o raio')
    return (3,14*raio*raio)
}


let escolhas = '';


do{
    escolhas = prompt('informe as operaÇoes que você desejá fazer:\n:' +
        '\n1.ÁREA DO TRIANGULO:'+
        '\n2.ÁREA DO RÊTANGULO:'+
        '\n3.ÁREA DO QUADRADO:'+
        '\n4.ÁREA DO TRAPEZIO:'+
        '\n5.ÁREA DO CIRCULO'+
        '\n6.SAIR'
    );
   let respo = '';
    switch(escolhas){
         case '1':
                respo = triangulo();
                alert(`sua resposta é ${respo}`)
          break
          case '2':
                respo = retangulo()
                alert(`sua resposta é ${respo}`) 
           break
           case '3':
                respo = quadrado()
                alert(`o resultado é ${respo}`)
            break
            case '4':
                 respo = trapezio()
                 alert(`o resultado é ${respo}`)            
            break
            case '5':
                respo = circulo()
                alert(`o resultado é ${respo}`)
            break
            case '6':
                alert('saindo da plicação')
            break
            default:
                alert('dados invalidos')
            break
                
    } 



}while(escolhas != '6')