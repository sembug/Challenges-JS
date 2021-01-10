/*
    1. Escreva um programa que resolva o seguinte problema: 
    uma cópia “xerox” custa R$ 0,25 por
    folha, mas acima de 100 folhas esse valor cai para R$ 0,20 por unidade. 
    Dado o total de cópias,
    informe o valor a ser pago.
*/

function quantoCustaOXerox(quantidadeCopias) {
     let frase;
     if (quantidadeCopias > 100) {
          const custo = quantidadeCopias * 0.2;
          frase = `Você terá que pagar R$${custo.toFixed(2)} por ${quantidadeCopias} cópias.`;
     } else {
          const custo = quantidadeCopias * 0.25;
          frase = `Você terá que pagar R$${custo.toFixed(2)} por ${quantidadeCopias} cópias.`;
     }
     return frase;
}

console.log(quantoCustaOXerox(102));

/*
    2. Escreva um programa que informe a categoria de um 
    jogador de futebol, considerando sua
    idade: infantil (até 13 anos), juvenil (até 17 anos) ou 
    sênior (acima de 17 anos).
*/

function qualCategoria(idade) {
     let frase;
     if (idade <= 13) {
          frase = `Pela sua idade a categoria que você se encaixa é: Infantil`;
     } else if (idade > 13 && idade <= 17) {
          frase = `Pela sua idade a categoria que você se encaixa é: Juvenil`;
     } else {
          frase = `Pela sua idade a categoria que você se encaixa é: Sênior`;
     }

     return frase;
}

console.log(qualCategoria(4));

/*
    3. Escreva um programa que diga qual é o maior de dois números distintos.
*/

function qualEOMaior(numero1, numero2) {
     let frase;
     if (numero1 > numero2) {
          frase = `O número ${numero1} é maior que ${numero2}.`;
     } else if (numero1 === numero2) {
          frase = `Não os dois números são iguais.`;
     } else {
          frase = `O número ${numero2} é maior que ${numero1}.`;
     }

     return frase;
}

console.log(qualEOMaior(10, 10));

/*
    4. Escreva um programa que teste uma senha.
*/

function testaSenha(senha) {
     const trasformaSenha = senha.toString();
     const tamanhoSenha = trasformaSenha.length;
     let frase;
     if (tamanhoSenha > 8) {
          frase = "Sua senha é segura.";
     } else {
          frase = "Sua senha não é segura.";
     }

     return frase;
}

console.log(testaSenha("Netflow123123"));

/*
    5. Escreva um programa que calcule a média 
    aritmética de três números digitados pelo usuário.
*/

function calculaMedia(numero1, numero2, nuemro3) {
     const media = (numero1 + numero2 + nuemro3) / 3;
     return media.toFixed(2);
}

console.log(calculaMedia(3, 3, 3));

/*
    6. Escreva um programa que leia três números do teclado 
    e os imprima na tela na ordem
    inversa da entrada.
*/

function inverteEntrada(numero1, numero2, numero3) {
     const imprima = `${numero3}, ${numero2}, ${numero1}.`;
     return imprima;
}

console.log(inverteEntrada(1, 2, 3));

/*
    7. Escreva um programa que calcule a área de um círculo 
    de raio r , testando se o valor do raio é
    menor que zero. 
*/

function calculaAreaComRaio(raio) {
     let frase;
     if (raio <= 0) {
          frase = "Esse número é igual ou menor que zero, infelizmente não poderá ser calculado.";
     } else {
          const area = Math.PI.toFixed(2) * raio ** 2;
          frase = `Com o raio de ${raio}m, a área do cículo é de ${area}m².`;
     }

     return frase;
}

console.log(calculaAreaComRaio(20));

/*
    8. Escreva um programa que receba um número inteiro do 
    teclado e diga se ele é par. Dica: Um número é par se o resto da 
    divisão dele por 2 for zero.
*/

function ePar(numero) {
     let frase;
     if (numero % 2 == 0) {
          frase = `O número ${numero} é Par`;
     } else {
          frase = `O número ${numero} não é Par, é Ímpar`;
     }

     return frase;
}

console.log(ePar(1));

/*
    9. Escreva um programa que calcule a velocidade de queda 
    de um corpo em função do tempo,
    partindo da velocidade zero. Dica: Use equações de aceleração da Física.
*/

function velocidadeDeQueda(tempoDeQueda) {
     const velocidade = 9.8 * tempoDeQueda;
     const conversorDeMS = velocidade * 3.6;
     const frase = `A velocidade do corpo é de ${velocidade.toFixed(2)}m/s 
     ou ${conversorDeMS.toFixed(2)}Km/h`;
     return frase;
}

console.log(velocidadeDeQueda(6));

/*
    10. Escreva um programa que calcule as raízes da equação do 2°  
    grau (ax^2 + bx + c); os valores de a, b e c são fornecidos pelo usuário.
*/

function calculaEquacao2grau(a, b, c) {
     const equacao = a ** 2 + 2 * b + 1;
     return equacao;
}

console.log(calculaEquacao2grau(2, -3, 5));

/*
    11. Escreva um programa que calcule o consumo médio 
    de um automóvel; são fornecidos a distância total percorrida e o 
    total de combustível gasto.
*/

function consumoMedio(distancia, totalDeCombustivel) {
     const consumoMedio = distancia / totalDeCombustivel;
     return `${consumoMedio} Km/l`;
}

console.log(consumoMedio(816, 60));

/*
    12. Escreva um programa que leia o nome de um aluno e as notas que 
    ele obteve nas três provas do semestre. No final, o programa deve informar 
    o nome do aluno e a sua média (aritmética).
*/

function mediaAluno(nomeAluno, nota1, nota2, nota3) {
     const aluno = {
          nome: nomeAluno,
          notas: {
               nota1semestre: nota1,
               nota2semestre: nota2,
               nota3semestre: nota3,
          },
          mediaAluno() {
               const media =
                    (this.notas.nota1semestre +
                         this.notas.nota2semestre +
                         this.notas.nota3semestre) /
                    3;
               return media;
          },
     };

     const frase = `A média do aluno(a) ${aluno.nome} é de ${aluno.mediaAluno()}`;
     return frase;
}

console.log(mediaAluno("Roberto Nunes", 10, 10, 10));

/*
    13. Escreva um programa que receba um número e mostre 
    uma mensagem caso este seja maior que 10.
*/

function eMaiorQue10(numero) {
     const maiorque10 =
          numero > 10 ? "Sim, esse número é maior que 10" : "Não, esse número não é maior que 10";

     return maiorque10;
}

console.log(eMaiorQue10(11));

/*
    14. Escreva um programa que receba um número e diga se ele está 
    no intervalo entre 100 e 200.
*/

function estaEntre(numero) {
     const estaEntre =
          numero > 100 && numero < 200
               ? "Sim, esse número está entre 100 à 200."
               : "Não, esse número não está entre 100 à 200.";

     return estaEntre;
}

console.log(estaEntre(101));

/*
    15. Escreva um programa que conceda um aumento de 10% ao salário 
    dos funcionários de uma empresa, os quais recebem até R$1.000,00.
*/

function mereceAumento(salario) {
     let salarioInput = salario;
     let frase;
     if (salarioInput <= 1000) {
          const acrecimo = (10 / 100) * salarioInput;
          const salarioNovo = salarioInput + acrecimo;
          frase = `Boa guerreiro(a) seu salário a partir de hoje é R$${salarioNovo.toFixed(2)}`;
     } else {
          frase = `Que pena você não se encaixa pra receber o aumento`;
     }

     return frase;
}

console.log(mereceAumento(870));

/*
     16. Desenhe um algoritmo que calcule a amplitude 
     total (AT) de uma série de cinco números, considerando 
     que AT = maior valor – menor valor.
*/

function amplitudeTotal(numero1, numero2, numero3, numero4, numero5) {
     const qualEMaior = Math.max(numero1, numero2, numero3, numero4, numero5);
     const qualEMenor = Math.min(numero1, numero2, numero3, numero4, numero5);
     const amplitudeTotal = qualEMaior - qualEMenor;
     return amplitudeTotal;
}

console.log(amplitudeTotal(30, 40, 60, 70, 80));
