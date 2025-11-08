

let number = parseFloat(prompt('informe o numero a ser utilizado'))
let acumulador = ''
for(let i = 0; i <= 20; i++){
      acumulador += number + 'x' + i + ': = ' + number*i + '\n'
}

alert(acumulador)

