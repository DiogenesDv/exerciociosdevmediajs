const dataUltimosAcsso = new Date('2019/01/01 13:00:00');

const formatoDataAtual = {

    dia: 'long',
    ano:'numeric',
    mes: 'long',
    diaData: 'numeric'

};

const dataAtual = new Date();

const hora = dataAtual.getHours();

const timeUltimoAcesso = dataUltimosAcsso.getTime();
const timeAtual = dataAtual.getTime();

const diferencaTime = timeAtual - timeUltimoAcesso;

const milissegundosHora = 1000 * 60 * 60;
const milissegundosDia = milissegundosHora * 24;

let msg = "";
 
if (hora < 6 || hora >= 18) {
    msg = 'Boa Noite\n';
}else if (hora >= 6 && hora < 12){
    msg = 'Bom dia\n';
}else{
    msg = 'Boa tarde\n'
}

if (diferencaTime > milissegundosDia) {

    msg += "Voçê esta ausente ha dias!!! Quem voçê pensa que é, ChrisBumstead, Cbum??"

} else if (diferencaTime > milissegundosHora) {

    msg += "Voçê esta ausente há horas!!! Não é mesmo rapaz!!!"
    
} else{

    msg += "Que bom que ainda esta aqui!!!"

}

console.log(msg, 'Seu ultimo acesso foi' ,dataUltimosAcsso.toLocaleDateString('pt', formatoDataAtual));
