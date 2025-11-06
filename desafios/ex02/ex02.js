function calculo(){
    let valor1 = parseFloat(prompt("informe o valor"))
    let valor2 = parseFloat(prompt("informe o segundo valor"))
    if(valor1 && valor2){
        const  soma =  valor1 + valor1;
        const sub =  valor1 - valor2;
        const mult =  valor1 * valor2;
        const div =  valor1/valor2;
                alert("soma - " + soma + " - sub - " + sub + "- mult - " + mult + " - div - " + div)
    }else{
         alert("dados invalidos...")
    }
}

calculo()