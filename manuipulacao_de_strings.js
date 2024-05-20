//------------------------------------------------Lendo uma STRING e sua posicoes

 console.clear();

// let variavel = 'String';

// console.log(`Esta é uma ${variavel}`);

// console.log(variavel[0]);
// console.log(variavel[1]);
// console.log(variavel[2]);
// console.log(variavel[3]);
// console.log(variavel[4]);
// console.log(variavel[5]);
// console.log(variavel[6]);


//--------------------------------Lendo o tamanho total com LENGTH

// let cep = '63500-610';

// if(cep.length != 9){
//     console.log('O cep deve conter exatamente 8 digitos')
// }else{
//     console.log(cep);
// }



// let nome = 'Diogenes';


// console.log(`O nome ${nome} tem ${nome.length} letras`);


// let nome = 'Diogenes';
// let frase = nome + "esta aprendendo manipular strings em js";

// let tamanho_nome = nome.length;
// let tamanho_frase = frase.length;

// console.log(tamanho_nome);
// console.log(tamanho_frase);


//-------------------Letras em maiusculas e minusculas com funcoes nativas toUpercase() e toLowercase()

// let nome = 'Diogenes';
// let frase = 'É MUITO LEGAL';

// console.log(nome.toUpperCase());
// console.log(frase.toLowerCase());

// //O js diferencia letras maiusculas de minusculas, por isso as variaveis abaixo sao diferentes

// let programador_1 = "Flávia";
// let programador_2 = "flávia";

// if ( programador_1 == programador_2 ){
//     console.log("iguais");
// } else {
//     console.log("diferentes");
// }


// let email_cadastrado = 'dogene@gmail.com';
// let email_acesso = 'Diogenes@gmail.com';

// if (email_acesso.toLowerCase == email_cadastrado.toLowerCase) {
//     console.log('Mensagem enviada')
// }else{
//     console.log('Email invalido')
// }



//--------------------------Remove espaços das strings funcao nativa trin()

// let brinquedo = '  bola';

// console.log(brinquedo)
// console.log(brinquedo.trim());


// let telefone_1 = "(99) 99999-9999";
// let telefone_2 = "    (99) 99999-9999    ";

// // if (telefone_1 == telefone_2) {
// //     console.log("Os telefones são iguais");
// // } else {
// //     console.log("Os telefones são diferentes, pois tem espaços");
// //     console.log(telefone_1); // (99) 99999-9999
// //     console.log(telefone_2); //    (99) 99999-9999
// // }

// if (telefone_1.trim() == telefone_2.trim()) {
//     console.log('telefones Iguais, pois os sistema retirou os espaços')

//     let novotel1 = telefone_1.trim();
//     let novotel2 = telefone_2.trim();
//     console.log(novotel1); // (99) 99999-9999
//     console.log(novotel2); // (99) 99999-9999
// }

//mesmo sendo iguais o js considera diferentes por causa dos espaços, por isso o metodo trin() tem q ser ultilizado esses cassos de validacao



//-------------funcoes nativas que geram conteudo na string - padStar() e padEnd()--------------

// let label_aluno = 'Aluno';
// let valor_aluno = 'Diogenes';

// let label_grau = 'Grau de escolaridade';
// let valor_grau = 'Ensino medio completo';

// console.log(label_aluno.padStart(7,"-") + ";" + valor_aluno);//Ele completa o numero de caracters (mesmo os espaço, no caso o -) dentro da string
// console.log(label_grau.padEnd(24, '-')+ ":" + valor_grau)//O padEnd coloca no fim



// let label_nome = "Nome:";
// let valor_nome = "Jorge Luiz";

// let label_profissao = "Profissão:";
// let valor_profissao = "Professor";

// let label_endereco = "Endereço:";
// let valor_endereco = "Rua Cruzeiro do Sul";

// console.log(label_nome.padEnd(25, '.') + valor_nome);
// console.log(label_profissao.padEnd(25, '.') + valor_profissao);
// console.log(label_endereco.padEnd(25, '.') + valor_endereco);





// -Aluno:Diogenes - 5 caracters(Aluno) e + 1 sendo o -
// Grau de escolaridade: Ensino Médio Completo

// //    Outro exemplo

// let label_nome = "Nome:";
// let valor_nome = "Jorge Luiz";

// let label_profissao = "Profissão:";
// let valor_profissao = "Professor";

// let label_endereco = "Endereço:";
// let valor_endereco = "Rua Cruzeiro do Sul";

// console.log("Antes")
// console.log( label_nome + valor_nome );
// console.log( label_profissao + valor_profissao );
// console.log( label_endereco + valor_endereco );

// console.log("Depois")
// console.log( label_nome.padEnd(25, '.') + valor_nome );
// console.log( label_profissao.padEnd(25, '.') + valor_profissao );
// console.log( label_endereco.padEnd(25, '.') + valor_endereco );


//------------------------------------funcao replace(), muda conteudo de uma subtring numa string



// let texto = "A linguagem PHP é muito poderosa";
// console.log(texto)

// let resultado = texto.replace("PHP", "JavaScript");//troca PHP(primeiro encontrado), por JavaScript
// console.log(resultado); // A linguagem JavaScript é muito poderosa


//------------------------------------------FUNCOES substring() e subsstr()------------AQUI

// let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

// let tamanho = conteudo.length;
// let resumo = "";

// if( tamanho > 100 ){

//     resumo = conteudo.substr(0, 97);//NAO SE ULTILIZA MAIS O SUBSTR()
//     resumo += "...";

// } else {

//     resumo = conteudo;

// }

//console.log(resumo);


// let frase1 = "Estou aprendendo JavaScript na DevMedia";

// let resultado1 = frase1.substr(17, 10);

// console.log(resultado1); // JavaScript

// let frase = "Eu sou programador JavaScript";

// let resultado = frase.substring(7, 18);

// console.log(resultado); // programador


//-------------------------------------------metodo nativo indexof() ACHA A POSICAO DO 1 CARACTERE DA FRASE -----

// let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
// let posicao = frase.indexOf("sonho");

// console.log(posicao); // 14, ele acha a posicao do primeiro caractere da palavra que queira, e se nao existe, ele diz retorna -1



// let expressao_proibida = "passaporte falso";

// let comentario = "   venda de PASSAPORTE FALSO";

// comentario = comentario.trim();
// comentario = comentario.toLowerCase();

// if ( comentario.indexOf(expressao_proibida) > -1 ){

//     console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

// } else {

//     console.log("Seu comentário foi aprovado");

// }

// console.log(comentario); // venda de passaporte falso



//-----------------------------------------------------metodo nativo split()

// let paises_string = "Brasil Espanha Canadá Irlanda Suíça";

// let paises_array = paises_string.split(" ");//ele ira separar cada palavra, depois de cada espaço, criando um array

// console.log(paises_array); // (5) ["Brasil", "Espanha", "Canadá", "Irlanda", "Suíça"]



// let cores_string = "vermelho,azul,branco,cinza,roxo";

// let cores_array = cores_string.split(",");// pode tb passar uma virgula para separar!

// console.log(cores_array);



// let nome_completo = "Ana Mendes da Silva";

// let array = nome_completo.split(" ");//separa com espaços cara nome

// let nome = array[0];//apos separados, pelo indice se encontra o primeiro nome

// console.log(array);
// console.log("Olá " + nome + ", seja bem vindo(a)");

// let nome_completo = "Jorge Luis de Oliveira Ramos";

// let array = nome_completo.split(" ");

// let nome = array[0] + " " + array[4];

// console.log(nome);





//CHUVA DE METEORIOS


// const chuvas_meteoros = [
//     { nome: "Alfa Centaurídeos",            pico: "Fev 8",   velocidade: "56 km/s"},
//     { nome: "Gama Normídeos",                pico: "Mar 14",  velocidade: "56 km/s"},
//     { nome: "Pi Pupídeos",                               pico: "Abr 23",  velocidade: "18 km/s"},
//     { nome: "Eta Aquáridas",                       pico: "Mai 5",   velocidade: "66 km/s"},
//     { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
//     { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
//     { nome: "Piscis Austrinídeos",                         pico: "Jul 28",  velocidade: "35 km/s"},
//     { nome: "Fenícidas",                    pico: "Dez 6",   velocidade: "18 km/s"},
//     { nome: "Pupidas-Velidas",                   pico: "Dez 12",  velocidade: "40 km/s"}
// ];

// let titulo = '--- chuva de meteorios - hemisferio sul ---';
// console.log(titulo.toUpperCase());
// console.log('\n');

// for (const chuva of chuvas_meteoros) {

//     let nomeChuva = chuva.nome;
//     let picoChuva = chuva.pico;
//     let velChuva = chuva.velocidade;

//     let picoMesDia = picoChuva.split(',');

//     let picoDia = picoMesDia[1];
//     let picoMes = picoMesDia[0];

//     let picoMesNome = '';

//     switch (picoMes) {
//         case 'Jan': picoMesNome = 'Janeiro'; break;
//         case "Fev":     pico_mes_nome = "Fevereiro";     break;
//         case "Mar":     pico_mes_nome = "Março";     break;
//         case "Abr":     pico_mes_nome = "Abril";     break;
//         case "Mai":     pico_mes_nome = "Maio";     break;
//         case "Jun":     pico_mes_nome = "Junho";     break;
//         case "Jul":     pico_mes_nome = "Julho";     break;
//         case "Ago":     pico_mes_nome = "Agosto";     break;
//         case "Set":     pico_mes_nome = "Setembro";     break;
//         case "Out":     pico_mes_nome = "Outubro";     break;
//         case "Nov":     pico_mes_nome = "Novembro";     break;
//         case "Dez":     pico_mes_nome = "Dezembro";     break;

//         default: picoMesNome = " Mês invalido"; break;
//     }

//     let picoDataChuvaFormatada = picoDia + " de " + picoMesNome;

//     let velocidadeFormatada = velChuva.replace("Km/s" , " quilometros por segundo");

//     console.log("Nome: ".padEnd(30, "." + nomeChuva));
//     console.log("Pico: ".padEnd(30, ".") + picoDataChuvaFormatada);
//     console.log("Velocidade: ".padEnd(30, ".") + velocidadeFormatada);
//     console.log("\n");

// }
// let frase = "Aprender JavaScript é gratificante! A linguagem JavaScript é bastante requisitada no mercado de trabalho";

// frase = frase.replace('JavaScript','JS');
// console.log(frase);

//let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

// let tamanho = conteudo.length;
// let resumo = "";

// if( tamanho > 100 ){

//     resumo = conteudo.substring(0, 97);
//     resumo += "...";

// } else {

//     resumo = conteudo;

// }

// // console.log(resumo);

// let tecnologia = "JavaScript";

// console.log(tecnologia[1]);

// console.log(tecnologia[8]);

// console.log(tecnologia[5]);





// let cores = 'verde azul branco amarelo preto';
// let array_cores = cores.split(' ');
// for (const cor of array_cores) {
//     if (cor.length > 5) {
//         console.log('A cor', cor ,' tem mais de 5 caracteres.');
//     } else {
//         console.log('A cor', cor ,'nao tem mais de 5 caracteres.');
//     }
// }





// let conteudo = "entao, Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

// let tamanho = conteudo.length;
// let resumo = "";

// if (tamanho > 100) {

//     resumo = conteudo.substring(0, 97);
//     resumo += "...";

// }
// else {

//     resumo = conteudo;

// }


// console.log(resumo);







// const chuvas_meteoros = [
//     { nome: "Alfa Centaurídeos",	        pico: "Fev 8",   velocidade: "56 km/s"},
//     { nome: "Gama Normídeos",	            pico: "Mar 14",  velocidade: "56 km/s"},
//     { nome: "Pi Pupídeos",	                pico: "Abr 23",  velocidade: "18 km/s"},
//     { nome: "Eta Aquáridas",	            pico: "Mai 5",   velocidade: "66 km/s"},
//     { nome: "Alfa Capricornídeos",          pico: "Jul 30",  velocidade: "23 km/s"},
//     { nome: "Delta Aquáridas do Sul",       pico: "Jul 28",  velocidade: "41 km/s"},
//     { nome: "Piscis Austrinídeos",	        pico: "Jul 28",  velocidade: "35 km/s"},
//     { nome: "Fenícidas",	                pico: "Dez 6",   velocidade: "18 km/s"},
//     { nome: "Pupidas-Velidas",	            pico: "Dez 12",  velocidade: "40 km/s"}
// ];

// let titulo = "=== chuvas de meteoros - hemisfério sul ===";
// console.log(titulo.toUpperCase());
// console.log("\n");

// for ( const chuva of chuvas_meteoros ){

//     let nome_chuva = chuva.nome;
//     let pico_chuva = chuva.pico;
//     let velocidade_chuva = chuva.velocidade;

//     let pico_mes_dia = pico_chuva.split(" ");

//     let pico_dia = pico_mes_dia[1];
//     let pico_mes = pico_mes_dia[0];

//     let pico_mes_nome = "";

//     switch (pico_mes) {

//         case "Jan":     pico_mes_nome = "Janeiro";     break;
//         case "Fev":     pico_mes_nome = "Fevereiro";     break;
//         case "Mar":     pico_mes_nome = "Março";     break;
//         case "Abr":     pico_mes_nome = "Abril";     break;
//         case "Mai":     pico_mes_nome = "Maio";     break;
//         case "Jun":     pico_mes_nome = "Junho";     break;
//         case "Jul":     pico_mes_nome = "Julho";     break;
//         case "Ago":     pico_mes_nome = "Agosto";     break;
//         case "Set":     pico_mes_nome = "Setembro";     break;
//         case "Out":     pico_mes_nome = "Outubro";     break;
//         case "Nov":     pico_mes_nome = "Novembro";     break;
//         case "Dez":     pico_mes_nome = "Dezembro";     break;

//         default:        pico_mes_nome = "Mês inválido";    break;

//     }

//     let pico_data_chuva_formatada = pico_dia + " de " + pico_mes_nome;

//     let velocidade_formatada = velocidade_chuva.replace("km/s", "quilômetros por segundo");

//     console.log("Nome: ".padEnd(30, ".") + nome_chuva);
//     console.log("Pico: ".padEnd(30, ".") + pico_data_chuva_formatada);
//     console.log("Velocidade: ".padEnd(30, ".") + velocidade_formatada);
//     console.log("\n");

// }


// let frase = "JavaScript é uma linguagem muito boa";

// let nova_frase = frase.replace("boa","poderosa")

// console.log(nova_frase);