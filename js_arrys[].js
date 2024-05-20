/*
let devs = [
    "Diego",//   indice 0
    "Alex",//    indice 1
    "Maria",//   indice 2
    "Cristian"// indice 3
];

console.log( devs,' ',devs[2],' Indice 2');
console.log(devs[5]);

let notas_bimestre = [
    6,
    8,
    9,
    5
];

let notas_total = notas_bimestre.length;//Diz o tamanho do array, conta seus indices

let notas_soma = notas_bimestre[0] + 
                 notas_bimestre[1] + 
                 notas_bimestre[2] + 
                 notas_bimestre[3];
                 
let notas_media = notas_soma / notas_total;

let aproRepro = (notas_media >= 7) ? 'Aprovado' : 'Reprovado';

console.log('Total da soma das notas é: ', notas_soma, 'sua media foi: ', notas_media, '' ,aproRepro);

console.log('Usando o LENGTH em uma string, ele retorna a quantidade de caracteres obtidos nela');



let nome = 'Joao';

let quantidadeLetrasNome = nome.length;

console.log(nome, ' tem ', quantidadeLetrasNome, ' letras');


console.log('Trocando o valor do indice 0 do array devs');

console.log(devs[0]);

devs[0] = "Bruno_Dev";

console.log(devs[0]);

console.log(devs);




let pessoas = [];

pessoas[0] = 'Diogenes Oliveira';
pessoas[1] = 'Juliana Araujo';
pessoas[2] = 'Alex Oliva';

console.log(pessoas);

let trocarPessoas = [
    'Bilu Boigoes',
    'Javeiro Javando'
]

console.log('Pessoas alteradas de um array para outro, de ->', pessoas)

pessoas[0] = trocarPessoas[0];
pessoas[2] = trocarPessoas[1];

console.log(pessoas.length)//retorna o tamanho do array(o tando de indices que ele tem)// 3, começando do 0, 1, 2

console.log(' para ', pessoas);



let letras = [

    'a'

];

console.log(letras.length, letras[0]);



let funcionarios = [
    'Carla',
    'Luana',
    'Rodrigo'
];

console.log(funcionarios);



let n = 9; console.log(++n);

var url = "https://api.com.br/usuarios";

url = "https://api.com.br/registos";

console.log(url);


const aula = "JavaScript";
aula = "JS"

console.log(aula);



const nome_completo = "Carlos Arantes Melo";

console.log(nome_completo);
console.log(nome_completo.length);//conta tb os espaços



var nome = null;
console.log(nome.length);



var programadores = [
    "Ramon",
    "Lucas",
    "Cleiton",
    "Laércio",
    "Josué"
];

console.log(programadores[0]);

programadores[0] = "Ricardo";

console.log(programadores[0]);


console.log(programadores[3]);



var alunos_turma_a = [
    "Jorge",
    "Maurício",
    "Fabiana"
];

var alunos_turma_b = [
    "Sônia",
    "Luciane",
    "Jônatas"
];

alunos_turma_a[0] = alunos_turma_b[1]
;

console.log(alunos_turma_a);




var nome;
console.log(nome);

var materia = null;
console.log(materia);

var soma = 10 + null;
console.log(soma);

var parcela = "90";

var juros = "5";

var total = parcela + juros;
console.log(total);


var numero_1 = 10, numero_2 = 15;

console.log(numero_1 != numero_2);



console.log(5 + null);

console.log(null + false);

console.log(true + null);


let letras = ['a','b','c','d'];

let contador = 0;

while (contador < letras.length) {
    console.log(letras[contador])
    contador++
}





let nums = [12,2,43,564,5,100], numP = [], numI = [];

let total_Imp = 0, total_Par = 0;

let contador = 0, contNums = 0;

while (contador < nums.length) {
    
    if (nums[contador] % 2 == 0) {
        
        numP.push(nums[contador]);

        total_Par++;
        contNums++;

        nums[contador];

    } else {
        
        numI.push(nums[contador]);

        total_Imp++;
        contNums++;

    }

    contador++;

}

console.log("Total de pares -> " + total_Par, 'e os pares são -> ', numP);

console.log("Total de impares -> " + total_Imp, 'e os Impares são -> ', numI);




let mult = 2;

console.log("Tabuada de Multiplicação " + mult)

 for (let contador = 1; contador <= 10; contador++) {
    
    let resultado = mult * contador;

    console.log(mult, " X " , contador, " = ", + resultado)
    
 }
 

 

 let meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

 for (let index = 0; index < meses.length; index++) {
    const element = meses[index];
    console.log(element);
 }

 


let funcionarios = [
    {id:1, nome:'Cezar Filho', habilitdo:false},
    {id:2, nome:'Jessica Parbetoli', habilitdo:false},
    {id:3, nome:'Renan Oliveira', habilitdo:false},
    {id: 4, nome: "Marlon Araújo", habilitado:true},
    {id: 5, nome: "Ana Paula", habilitado:false},    
];

let encontradoHabilitado = false;

for (let contador = 0; contador < funcionarios.length; contador++) {
    
    let funcionario = funcionarios[contador];

    if (funcionario.habilitado == true) {

        console.log('Funcionario Habilitado encontrado -> ',funcionario.nome);
        encontradoHabilitado = true;
        break;

    } 
    
}

if (!encontradoHabilitado){

    console.log('Nenhum Funcionario Habilitado encontrado');
}




let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
   ];

for (let contador = 0; contador < alunos.length; contador++) {
    
    const aluno = alunos[contador];
    
    if (aluno.media < 6) {
        continue;
    }

    let aprovado = 'Aprovado';
    console.log(aprovado,'\n', 'Id: ',aluno.id, '\n', 'Nome: ', aluno.nome, '\n', 'Media:', aluno.media);

}  





let notas_trimestrais = [7, 8, 6, 5];

let soma_notas = 0;
const quantidade_notas = 4;

for ( let contador = 0; contador < quantidade_notas; contador++ ) {

    soma_notas = soma_notas + notas_trimestrais[contador];

}

let media = soma_notas / quantidade_notas;

if ( media >= 6 ) {
    console.log("Aprovado com media: ",media, 'e soma de notas de: ',soma_notas);
} else {
    console.log("Reprovado");
}



let funcionarios = [
    {id: 1, nome: "César", habilitado: false},
    {id: 2, nome: "Jéssica", habilitado: false},
    {id: 3, nome: "Renan", habilitado: true},
    {id: 4, nome: "Marlon", habilitado: false},
    {id: 5, nome: "Ana", habilitado: false},
];

let contador = 0;
let encontrouHabilitado = false;

do {

    let funcionario = funcionarios[contador];

    if( funcionario.habilitado == true ){
        console.log("Funcionário habilitado encontrado: " + funcionario.nome);
        encontrouHabilitado = true;
        break;
    }

    contador++;
} while ( contador < funcionarios.length );

if (!encontrouHabilitado) {
    console.log("Nenhum funcionário habilitado encontrado");
}

// Funcionário habilitado encontrado: Renan



let alunos = [
    {id: 1, nome: "Bruna", media: 8},
    {id: 2, nome: "Laura", media: 7},
    {id: 3, nome: "José", media: 5},
    {id: 4, nome: "Guilherme", media: 4},
    {id: 5, nome: "Rafael", media: 10},
];

let contador = 0;

do {

    let aluno = alunos[contador];

    contador++;

    if ( aluno.media < 6 ) {
        continue;
    }

    console.log("Id: " + aluno.id);
    console.log("Nome: " + aluno.nome);
    console.log("Média: " + aluno.media);
    console.log("\n");

} while ( contador < alunos.length );


// Id: 1
// Nome: Bruna
// Média: 8


// Id: 2
// Nome: Laura
// Média: 7


// Id: 5
// Nome: Rafael
// Média: 10



let valor_mensalidade = 100;
let taxa_multa = 0.02; // 2%
let total_dias = 10;
let contador = 1;

do {

    let dias_atraso = contador;

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

    let novo_valor_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");

    contador++;

} while( contador < total_dias );

// Dia(s) de atraso: 1 - mensalidade atualizada: R$102,00
// Dia(s) de atraso: 2 - mensalidade atualizada: R$104,00
// Dia(s) de atraso: 3 - mensalidade atualizada: R$106,00
// Dia(s) de atraso: 4 - mensalidade atualizada: R$108,00
// Dia(s) de atraso: 5 - mensalidade atualizada: R$110,00
// Dia(s) de atraso: 6 - mensalidade atualizada: R$112,00
// Dia(s) de atraso: 7 - mensalidade atualizada: R$114,00
// Dia(s) de atraso: 8 - mensalidade atualizada: R$116,00
// Dia(s) de atraso: 9 - mensalidade atualizada: R$118,00



let aluno = { nome: "Marcos", email: "marcos@email.com", idade: 25 };

// let dados; ou

for (let dados in aluno ) {
    console.log(aluno[dados]);
}

// Marcos
// marcos@email.com
// 25





let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };

let percentual_desconto = 5;

for ( let propriedade in carro ) {

    if ( propriedade == "preco" ) {

        let preco = propriedade;

        let desconto = ( carro[preco] * percentual_desconto ) / 100;

        let novo_preco = carro[preco] - desconto;

        console.log("novo preço: R$" + novo_preco + ",00");

    } else {

        console.log(propriedade + ": " + carro[propriedade]);

    }

}

// nome: Argo
// marca: Fiat
// Novo preço: R$47500,00
// ano: 2020




let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for ( let contador = 0; contador < produtos.length; contador++ ){

    let produto = produtos[contador];

    for ( let propriedade in produto ){

        if ( propriedade == "preco" ) {

            let preco = propriedade;

            let novo_preco = produto[preco] - desconto;

            console.log("preço atualizado: R$" + novo_preco + ",00");

        } else {

            console.log(propriedade + ": " + produto[propriedade]);
        }

    }

    console.log("\n");
}

// id: 1
// nome: pizza
// preço atualizado: R$45,00


// id: 2
// nome: macarronada
// preço atualizado: R$20,00


// id: 3
// nome: lasanha
// preço atualizado: R$40,00


// id: 4
// nome: nhoque
// preço atualizado: R$25,00

*/


let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

for ( let propriedade of produtos ) {

    console.log("Email: " + propriedade[1].nome);

}

//------------------------------------------------------------

let emails_alunos = [
    "danilo@email.com",
    "jessica@email.com",
    "luana@email.com",
    "gustavo@email.com"
];

for ( let email of emails_alunos ) {

    console.log("Email: " + email);

}
