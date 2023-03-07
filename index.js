var agora = new Date();
var hora = agora.getHours();
var minuto = agora.getMinutes();
var data = agora.getDate();
var mes1 = agora.getMonth();
var mes2 = mes1 += 1;
var diasemana1 = agora.getDay();


var div1 = window.document.getElementById('div1');
div1.innerHTML = `${hora}:${minuto}`;
var mes = window.document.getElementById('mes');
mes.innerHTML = `${data}/ ${mes2}`;
var diasemana2 = window.document.getElementById('diasemana');
diasemana2.innerHTML = `${diasemana1}`;


bom1 = window.document.getElementById('bom')
if(hora < 12){
    bom1.innerHTML = 'BOM DIA';
}
else if(hora >= 12 && hora < 18){
    bom1.innerHTML = 'Boa tarde';
}
else if (hora >= 18 && hora <= 5){
    bom1.innerHTML = 'Boa Noite';
}

switch(minuto){
    case 0:
    div1.innerHTML = `${hora}:00`;
    break
    case 1:
    div1.innerHTML = `${hora}:01`;
    break
    case 2:
    div1.innerHTML = `${hora}:02`;
    break
    case 3:
    div1.innerHTML = `${hora}:03`;
    break
    case 4:
    div1.innerHTML = `${hora}:04`;
    break
    case 5:
    div1.innerHTML = `${hora}:05`;
    break
    case 6:
    div1.innerHTML = `${hora}:06`;
    break
    case 7:
    div1.innerHTML = `${hora}:07`;
    break
    case 8:
    div1.innerHTML = `${hora}:08`;
    break
    case 9:
    div1.innerHTML = `${hora}:09`;
    break

}
switch(diasemana1){
    case 0:
    diasemana2.innerHTML = 'Domingo';
    break
    case 1:
    diasemana2.innerHTML = 'Segunda-feira';
    break
    case 2:
    diasemana2.innerHTML = 'Terça-feira';
    break
    case 3:
    diasemana2.innerHTML = 'Quarta-feira';
    break
    case 4:
    diasemana2.innerHTML = 'Quinta-feira';
    break
    case 5:
    diasemana2.innerHTML = 'Sexta-feira';
    break
    case 6:
    diasemana2.innerHTML = 'Sábado';
    break
    default:
    diasemana2.innerHTML = 'erro no codigo';
}

if(mes2 == 1){
    mes.innerHTML = `${data} de Janeiro`;
}
else if(mes2 == 2){
    mes.innerHTML = `${data} de Fevereiro`;
}
else if(mes2 == 3){
    mes.innerHTML = `${data} de Março`;
}
else if(mes2 == 4){
    mes.innerHTML = `${data} de Abril`;
}
else if(mes2 == 5){
    mes.innerHTML = `${data} de Maio`;
}
else if (mes2 == 6){
    mes.innerHTML = `${data} de Junho`;
}
else if(mes2 == 7){
    mes.innerHTML = `${data} de Julho`;
}
else if (mes2 == 8){
    mes.innerHTML = `${data} de Agosto`;
}
else if (mes2 == 9){
    mes.innerHTML = `${data} de Setembro`;
}
else if(mes2 == 10){
    mes.innerHTML = `${data} de Outubro`;
}
else if (mes2 == 11){
    mes.innerHTML = `${data} de Novembro`
}
else if (ems2 == 12){
    mes.innerHTML = `${data} de Dezembro`;
}