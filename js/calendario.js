

let listaMeses = ['ENERO', 'FEBRERO', 'MARZO', 'ABRIL', 'MAYO', 'JUNIO', 'JULIO', 'AGOSTO', 'SEPTIEMBRE', 'OCTUBRE', 'NOVIEMBRE', 'DICIEMBRE'];

//creamos objeto fecha y calculamos los días que tiene el mes, al usar fechaActual.getFullYear() ya tendremos correcto el año bisiesto
let fechaActual = new Date();
let diaActual = fechaActual.getDate();
let mesNum = fechaActual.getMonth();
let anioActual = fechaActual.getFullYear();

/*alert("Bienvenido a la Asociación Deportiva CESUR.")
alert("Hoy es: "   +diaActual + " de " + listaMeses[mesNum] + " de " + anioActual);*/

let dias = document.getElementById('dias');
let mes = document.getElementById('mes');
let anio = document.getElementById('anio');

let mesPrev = document.getElementById('mesPrev');
let mesPost = document.getElementById('mesPost');

mes.textContent = listaMeses[mesNum];
anio.textContent = anioActual.toString();

mesPrev.addEventListener('click', () => prevMes());
mesPost.addEventListener('click', () => postMes());

escribeMes(mesNum);

function escribeMes(mes) {

    for (let i = iniDia(); i > 0; i--) {
        dias.innerHTML += ` <div class="calen_fecha calen_item otro">
            ${totalDias(mesNum - 1) - (i-1)}
            </div> `;
    }

    for (let i = 1; i <= totalDias(mes); i++) {

        if (i === diaActual) {
            dias.innerHTML += ` <div class="calen_fecha calen_item today">${i}</div> `;
        } else {
            dias.innerHTML += ` <div class="calen_fecha calen_item">${i}</div> `;
        }
    }
}
function totalDias(mes) {
    if (mes === -1) mes = 11;

    if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11) {
        return 31;
    } else if (mes == 3 || mes == 5 || mes == 8 || mes == 10) {
        return 30;
    } else {
        return isLeap() ? 29 : 28;
    }

}

function isLeap() {  // COMPROBAR SI EL AÑO ES BISIESTO O NO
    return ((anioActual % 100 !== 0) && (anioActual % 4 === 0) || (anioActual % 400 === 0));
}

function iniDia() {  // CREAR UNA NUEVA NUEVA PARA SABER QUE DÍA DE LA SEMANA CAE EL DÍA 1 DEL MES
    let ini = new Date(anioActual, mesNum, 1);
    return ((ini.getDay() - 1) === -1) ? 6 : ini.getDay() - 1;
}

function prevMes() {
    if (mesNum !== 0) {
        mesNum--;
    } else {
        mesNum = 11;
        anioActual--;
    }
    setNuevaFecha();
}

function postMes() {
    if (mesNum !== 11) {
        mesNum++;
    } else {
        mesNum = 0;
        anioActual++;
    }
    setNuevaFecha();
}

function setNuevaFecha() {
    fechaActual.setFullYear(anioActual, mesNum, diaActual);
    mes.textContent = listaMeses[mesNum];
    anio.textContent = anioActual.toString();

    dias.textContent = '';
    escribeMes(mesNum);
}



