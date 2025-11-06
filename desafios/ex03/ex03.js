function velocidade(){
    const nomeVeiculo1 = prompt('informe o nome do primeiro veiculo')
    const nomeVeiculo2 = prompt('informe o nome do veiculo2')
    const velocidade1 = parseFloat(prompt('informe a velocidade do primeiro veiculo'))
    const velocidade2 = parseFloat(prompt('informe a velocidade do segundo veiculo'))

    if(velocidade1 > velocidade2){
        alert('carro 1 é mais veloz')
    }else if(velocidade2 > velocidade1){
        alert('carro 2 é mais rapido')
    }else{
        alert ('inpate')
    }

}


velocidade()