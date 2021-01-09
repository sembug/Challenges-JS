/*
    1. Construa um algoritmo que calcule o valor do comprimento 
    da circunferência, a partir do valor do raio.
*/

function calculaComprimento(raio) {
     const comprimentoCirculo = 2 * Math.PI.toFixed(2) * raio;
     return comprimentoCirculo;
}

console.log(calculaComprimento(8));

/*
    2. Desenhe um algoritmo que receba dois números 
    e exiba o resultado da sua soma.
*/

function somaDoisNumeros(numero1, numero2) {
     const soma = numero1 + numero2;
     return soma;
}

console.log(somaDoisNumeros(2, 2));

/*
    3. Desenhe um algoritmo que receba dois números 
    e mostre a soma, a subtração, a multiplicação e 
    a divisão dos números.
*/

function contasComNumeros(numero1, numero2) {
     const soma = numero1 + numero2;
     const subtracao = numero1 - numero2;
     const multiplicacao = numero1 * numero2;
     const divisao = numero1 / numero2;

     console.log(soma, subtracao, multiplicacao, divisao);
}

contasComNumeros(10, 10);

/*
    4. Desenhe um algoritmo para determinar o consumo médio de 
    um automóvel, considerando que a distância 
    total percorrida e o total de combustível gasto são fornecidos.
*/

function consumoMedio(distancia, totalDeCombustivel) {
     const consumoMedio = distancia / totalDeCombustivel;
     return `${consumoMedio} Km/l`;
}

console.log(consumoMedio(816, 60));

/*
    5. Elabore um algoritmo que leia o nome de um vendedor, o 
    seu salário fixo e o total de vendas efetuadas por 
    ele no mês (em dinheiro). Sabendo que esse vendedor 
    ganha 15% de comissão sobre suas vendas efetuadas, 
    faça que o algoritmo informe o seu nome, 
    o salário fixo e salário no final do mês.
*/

function salarioVendedor(nomeVendedor, salarioFixo, totalDeVendas) {
     const vendedor = {
          nome: nomeVendedor,
          salario: salarioFixo,
          salarioVariavel() {
               return (15 / 100) * totalDeVendas;
          },
          salarioFinal() {
               return this.salario + this.salarioVariavel();
          },
     };
     const frase = `O senhor(a) ${vendedor.nome} ganha um salário fixo 
     de ${vendedor.salario}, o salário fixo mais as comissões 
     geral um salário no final do mês de ${vendedor.salarioFinal()}`;

     return frase;
}

console.log(salarioVendedor("Roberto Nunes", 2000, 1000));
/*
    Crie um algoritmo que leia o nome de um aluno e as notas 
    das três provas que ele obteve no semestre, com pesos 2, 3 e 5. 
    No final, deve-se informar o nome do aluno e a sua média ponderada.
*/

function mediaAluno(nomeAluno, nota1, nota2, nota3) {
     const aluno = {
          nome: nomeAluno,
          mediaPonderada() {
               const somaDosPesos = 2 + 3 + 5;
               const notareal1 = nota1 * 2,
                    notareal2 = nota2 * 3,
                    notareal3 = nota3 * 5;

               return (notareal1 + notareal2 + notareal3) / somaDosPesos;
          },
     };

     const frase = `O aluno(a) ${aluno.nome} teve nota ${nota1} no 
     1°semestre, nota ${nota2} no 2°semestre e nota ${nota3} no 3°. 
     A média final foi de ${aluno.mediaPonderada()}`;

     return frase;
}

console.log(mediaAluno("Roberto Nunes", 7, 6, 8));

/*
    Desenhe um algoritmo que leia uma temperatura em graus 
    Celsius e a apresente convertida em graus Fahrenheit. A fórmula de 
    conversão é: F = (9 * C + 160) / 5, sendo F a temperatura em
    graus Fahrenheit e C, a temperatura em graus Celsius.
*/

function converteCelsius(celsius) {
     const convertido = (9 * celsius + 160) / 5;
     const frase = `${celsius}°C em Fahrenheit é ${convertido}°F`;
     return frase;
}

console.log(converteCelsius(10));

/*
    8. Elabore um algoritmo que efetue a apresentação do 
    valor da conversão em real (R$) de um valor lido em 
    dólar (US$). O algoritmo deverá solicitar o valor da 
    cotação do dólar e também a quantidade de dólares disponíveis 
    com o usuário.
*/

function converteDolarEmReal(cotacaoDolar, quantidadeDolares) {
     const conversao = quantidadeDolares * cotacaoDolar;
     const frase = `O senhor(a) tem ${quantidadeDolares.toFixed(2)} 
     dolares, ou seja, o senhor(a) tem ${conversao.toFixed(2)} reais`;

     return frase;
}

console.log(converteDolarEmReal(5.42, 100));

/* 
    9. Faça um algoritmo que calcule o rendimento de um 
    depósito após um mês de aplicação.
    Considere fixa a taxa de juros de remuneração, correspondente 
    a 0,50% ao mês.
*/

function rendimentoDeposito(deposito, meses) {
     const juros = deposito * (0.5 / 100) * meses;
     const rendimento = deposito + juros;
     const frase = `Com o deposito de R$${deposito.toFixed(2)} com uma taxa de 
     remuneração de 0.5% ao mês o seu montante depois de ${meses} meses é 
     de R$${rendimento.toFixed(2)}`;

     return frase;
}

console.log(rendimentoDeposito(1000, 2));

/*
    10. Faça um algoritmo que receba um 
    número e mostre uma mensagem caso este 
    seja maior que 10.
*/

function mostraSe(numero) {
     const mostra =
          numero > 10
               ? `Sim, o número ${numero} é maior que 10`
               : `Não, o número ${numero} não é maior que 10`;
     return mostra;
}

console.log(mostraSe(11));

/*
    11. Crie um algoritmo que leia dois valores 
    inteiros distintos e informe qual é o maior.
*/

function qualEMaior(numero1, numero2) {
     const mostra =
          numero1 > numero2
               ? `Sim, o número ${numero1} é maior que ${numero2}`
               : `Não, o número ${numero1} não é maior que ${numero2}`;
     return mostra;
}

console.log(qualEMaior(11, 10));

/*
    12. Faça um algoritmo que receba um número 
    e diga se este está no intervalo entre 100 e 200.
*/

function estaEntre(numero) {
     if (numero > 100 && numero < 200) {
          return `Sim, o número ${numero} está no intervalo de 100 à 200`;
     } else {
          return `Não, o número ${numero} não está no intervalo de 100 à 200`;
     }
}

console.log(estaEntre(150));

/*
 13. Desenhe um algoritmo que mostre na tela a tabuada do 3.
*/

function tabuada(numero, ateQuando) {
     for (let multiplicador = 0; multiplicador <= ateQuando; multiplicador++) {
          const resultado = numero * multiplicador;
          const tabuada = `${numero} X ${multiplicador} = ${resultado}`;
          console.log(tabuada);
     }
}

tabuada(3, 10);

/*
    14. Desenhe um algoritmo que imprima dez vezes na 
    tela do computador a frase “FATEC”.
*/

function imprime(vezes) {
     let index = 0;
     while (index < vezes) {
          console.log("FATEC");
          index++;
     }
}

imprime(10);

/*
    15. Desenhe um algoritmo que, por dez vezes, receba um número 
    digitado pelo usuário e o compare com o valor “5”; em caso de 
    acerto do usuário, o algoritmo finaliza-se.
*/

function compara10Vezes(comparador) {
     const numeros = [1, 1, 1, 6, 1, 1, 1, 5, 1];
     for (let index = 0; index < numeros.length; index++) {
          const element = numeros[index];
          console.log(element);
          if (element === comparador) {
               break;
          }
     }
}

compara10Vezes(5);
