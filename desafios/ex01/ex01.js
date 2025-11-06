function cadastro(){
    let nome = prompt("informe o seu nome")
    let sobrenome = prompt("informe o seu sobrenome")
    let campoEstudos = prompt("informe o seu campo de estudos")
    let anoNascimento = parseFloat(prompt("informe seu ano de nascimento"))

    const calculo = new Date().getFullYear() - anoNascimento 
    alert(`olá ${nome} ${sobrenome} seu campo é ${campoEstudos} sua idade é ${calculo}`)
}

cadastro()