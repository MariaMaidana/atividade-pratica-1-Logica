/*1- Desenvolva um algoritmo que armazene o valor 10 em uma variável
A e o valor 20 em uma variável B. A seguir (utilizando apenas
atribuições entre variáveis) troque os seus conteúdos fazendo com
que o valor que está em A passe para B e vice-versa. Ao final,
escrever os valores que ficaram armazenados nas variáveis. */

function exercicio1 () {
    let A = Number(prompt('Digite o valor A: '));

    if(!A) {
        alert('Você precisa informar um valor para A');
        return
    }

    let B = Number(prompt('Digite o valor B: '));

    if(!B) {
        alert('Você precisa informar um valor para B');
        return
    }

    let C;

    C = A;
    A = B;
    B = C;

    document.write(`<p>O valor de A é ${A}</p>`);
    document.write(`<p>O valor de B é ${B}</p>`);
}

/* 2- Desenvolva um algoritmo para ler o número total de eleitores de um
município, o número de votos brancos, nulos e válidos. Calcular e
escrever o percentual que cada um representa em relação ao total
de eleitores.*/

function exercicio2 () {
    let totalEleitores = Number(prompt('Informe o número total de eleitores do município: '));

    if(!totalEleitores) {
        alert('Você precisa informar o número total de eleitores');
        return
    }

    let votosBrancos = Number(prompt('Informe o número total de votos brancos do município: '));

    if(!votosBrancos || votosBrancos > totalEleitores) {
        alert('Votos brancos inválidos');
        return
    }

    let votosNulos = Number(prompt('Informe o número total de votos nulos do município: '));
    
    if(!votosNulos || (votosNulos + votosBrancos) > totalEleitores) {
        alert('Votos nulos inválidos');
        return
    }

    let votosValidos = Number(prompt('Informe o número total de votos válidos do município: '));

    if(!votosValidos || (votosValidos + votosNulos + votosBrancos) > totalEleitores) {
        alert('Votos válidos inválidos');
        return
    }

    let percentualBrancos = (votosBrancos * 100) / totalEleitores;

    let percentualNulos = (votosNulos * 100) / totalEleitores;

    let percentualValidos = (votosValidos * 100) / totalEleitores;

    document.write(`<p>O percentual total de votos brancos é de ${percentualBrancos.toFixed(2)}%</p>`);

    document.write(`<p>O percentual total de votos nulos é de ${percentualNulos.toFixed(2)}%</p>`);

    document.write(`<p>O percentual total de votos válidos é de ${percentualValidos.toFixed(2)}%</p>`);

}

/* 3- O custo de um carro novo ao consumidor é a soma do custo de
fábrica com a porcentagem do distribuidor e dos impostos
(aplicados ao custo de fábrica). Supondo que o percentual do
distribuidor seja de 28% e os impostos de 45%, escrever um
algoritmo para ler o custo de fábrica de um carro,calcular e escrever
o custo final ao consumidor. */

function exercicio3 () {
    let fabrica = prompt('Insira o custo de fábrica do carro: ');

    if(fabrica === null) {
        alert('Você precisa informar o custo de fábrica do veículo.');
        return
    }

    fabrica = Number(fabrica.replace(".",'').replace(',','.'));

    if(!fabrica) {
        alert('Valor de fábrica inválido');
        return
    }


    let distribuidor = fabrica * 28 / 100;
    let impostos =  fabrica * 45 / 100;
    let carroNovo = fabrica + distribuidor + impostos;
    
    document.write(`<p>Custo Fábrica: R$${fabrica}</p>`)
    document.write(`<p>O valor total de um carro novo para o consumidor é de R$${carroNovo.toFixed(2)}</p>`);
}


/* 4- Uma revendedora de carros usados paga a seus funcionários
vendedores um salário fixo por mês, mais uma comissão também
fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por
ele vendidos, o valor total de suas vendas, o salário fixo e o valor que

ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.*/

function exercicio4 () {

    let carrosVendidos = Number(prompt('Informe o total de carros vendidos pelo funcionário: '));

    if(!carrosVendidos) {
        alert('Carros vendidos inválidos');
        return
    }

    let ValorCarro = prompt('Informe o valor de cada carro: ');

    if(ValorCarro === null) {
        alert('Operação cancelada');
        return
    }

    ValorCarro = Number(ValorCarro.replace('.','').replace(',','.'));

    if(!ValorCarro) {
        alert('Valor inválido');
        return
    }

    let salarioBase = prompt('Informe o salário fixo do vendedor: ');

    if(salarioBase === null) {
        alert('Você precisa informar o salário base do vendedor para continuar.');
        return
    }

    salarioBase = Number(salarioBase.replace(".",'').replace(',','.'));

    if(!salarioBase) {
        alert('Salário fixo inválido');
        return
    }

    let extraCarro = prompt('Informe o valor fixo por carro vendido: ');

    if(extraCarro === null) {
        alert('Valor inválido');
        return
    }

    extraCarro = Number(extraCarro.replace(".",'').replace(',','.'));

    if(!extraCarro) {
        alert('Salário fixo inválido');
        return
    }

    let percentualExtra = ValorCarro * (5 / 100);

    let salarioFinal = salarioBase + (carrosVendidos * extraCarro) + percentualExtra;

    document.write(`O salário final do funcionário é de R$${salarioFinal}`)

}

/* 5- Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit. */

function exercicio5 () {

    let Celsius = prompt('Informe a temperatura em Celsius: ');

    if(Celsius === null) {
        alert('Operação cancelada');
        return
    }

    Celsius = Number(Celsius.replace('.','').replace(',','.'));

    if(!Celsius) {
        alert('Temperatura inválida')
        return
    }

    let grausF = Celsius * 1.8 + 32;

    document.write (`A temperatura de ${Celsius} graus Celsius, corresponde a ${grausF} graus em Fahrenheit`);
}


/* 6- Desenvolva um algoritmo para ler dois valores e imprimir uma das
três mensagens a seguir:
a. ‘Números iguais’, caso os números sejam iguais;
b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
c. ‘Segundo maior’, caso o segundo seja maior que o primeiro. */

function exercicio6 () {

    let primeiroNumero = Number(prompt('Informe o primeiro número: '));

    if(!primeiroNumero) {
        alert('Valor inválido');
        return
    }

    let segundoNumero = Number(prompt('Informe o segundo número: '));

    if(!segundoNumero) {
        alert('Valor inválido');
        return
    }

    if (primeiroNumero > segundoNumero) {
        document.write(`${primeiroNumero} é maior que ${segundoNumero}`);
    } else if (primeiroNumero < segundoNumero) {
        document.write(`${segundoNumero} é maior que ${primeiroNumero}`);
    } 
    
      else {
       document.write (`Os números ${primeiroNumero} e ${segundoNumero} são iguais`);
    }
}

/* 7- As maçãs desta estação custam R$0,30 se forem compradas
menos do que uma dúzia, e R$0,25 se forem compradas pelo menos
doze. Desenvolva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

function exercicio7 () {

    let Maca = Number(prompt('Informe a quantidade de maçãs que serão compradas: '));

    if(!Maca) {
        alert('Quantidade inválida');
        return
    }

    const Macapoucas = 0.30;
    const Macavarias = 0.25;


    if (Maca < 12) {
        document.write(`O valor da compra será de R$${Maca * Macapoucas}`) 
    } else {
        document.write(`O valor da compra será de R$${Maca * Macavarias}`)
    }

}

/* 8- Escreva um algoritmo que tenha como valores de entradas o nome e idade do usuário e imprima no terminal o nome e a quantidade de letras que o nome possui, bem como a idade e o ano de nascimento do usuário. Ex: “Nome: Pedro, 5 letras. Idade: 22 anos, nasceu em 2000”.  */

function exercicio8 () {

    let nome = prompt('Informe o seu nome: ');

    if(!nome) {
        alert('Informe o seu nome para continuar')
        return
    }

    let idade = Number(prompt('Informe a sua idade: '));

    if(!idade) {
        alert('Informe a sua idade para continuar')
        return
    }

    let letras = nome.length;

    let anoAtual = Number(prompt('Insira o ano atual: '));
    let anoNascimento = anoAtual - idade;

    document.write (`<p>Nome: ${nome}</p>`)
    document.write (`<p>${letras} letras </p>`)
    document.write (`<p> Idade: ${idade} anos, nasceu em ${anoNascimento}</p>`)
}


/* 9- Crie um algoritmo que armazene um número inteiro positivo, e gere
um alerta com as seguintes mensagens:
a. “Número é par!”, se o valor armazenado for par;
b. “Número é impar!”, se o valor armazenado for ímpar; */

function exercicio9 () {
    let valor = Number(prompt('Informe um número: '));

    if(!valor || valor < 0) {
        alert('Valor inválido. Deve ser positivo')
        return
    }

    let retorno = verificaPar(valor);

    if(retorno) {
        document.write('É par');
    } else {
        document.write('É ímpar');
    }


}

function verificaPar(numero) {
    if(numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

/* 10- Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu). */

function exercicio10 () {

    let anoAtual = Number(prompt('Informe o ano atual: '));

    if(!anoAtual) {
        alert('Informação inválida')
        return
    }

    let anoNascimento = Number(prompt('Informe o ano em que você nasceu: '));

    if(!anoNascimento) {
        alert('Informação inválida')
        return
    }

    let idade = anoAtual - anoNascimento;


    if (idade >= 16) {
        document.write('<p>Pode votar</p>')
        if (idade >= 18 && idade <= 65) {
            document.write('<p>Voto obrigatório</p>')
        }
        if (idade < 18 && idade > 16) {
            document.write('<p>Voto opcional</p>')
        }
    } else {
        document.write('Não pode votar')
    }
}