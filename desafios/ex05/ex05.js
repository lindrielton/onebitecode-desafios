


let valor = prompt('informe o valor que você quer converter\n' +
    '\n1 milimetros(mm)' +
    '\n2 centimetros(cm)'+
    '\n3 decimetro(dm)' +
    '\n4 decâmetro(dam)' +
    '\n5 hectômetro(hm)' +
    '\n6 quilometro(km)' 
)


let calc = 0;
switch(valor){
    case '1':
         calc = (valor * 1000);
        alert('o valor de metros pata mm é .' + calc)
        break
    case '2':
         calc = (valor * 100 );
         alert('o valor  em  (cm) é ' + calc)
         break
    case '3':
        calc = (valor * 10 );
        alert('o valor  em  (dm) é ' + calc)
        break
     case '4':
        calc = (valor / 10); 
        alert('o valor  em  (dam) é ' + calc)
        break
     case '5':
        calc = (valor / 100);
        alert('o valor  em  (dm) é ' + calc)
        break
     case '6':
        calc = (valor / 1000) ;
        alert('o valor  em  (km) é ' + calc)
        break
    default :
         alert('valor invalido')
         break


}
