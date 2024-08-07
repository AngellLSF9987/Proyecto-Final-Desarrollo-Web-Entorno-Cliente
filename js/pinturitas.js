//alert("Diviértete coloreando!")

let numCols = 16;
let numFils = 16;


el('#btnAzul' ).onclick = color;
el('#btnRojo' ).onclick = color;
el('#btnVerde').onclick = color;
el('#btnAmari').onclick = color;
el('#btnBlanc').onclick = color;

let btnSel = el('#btnAzul');  // Selección Btn
let pincel = btnSel.className; // Color del Btn

btnSel.classList.add('seleccion');

el('section').appendChild( creaTabla(numCols, numFils) );

// Selecciona botón y color del pincel
function color() {
    btnSel.classList.remove('seleccion');
    btnSel = this;
    pincel = this.className;
    btnSel.classList.add('seleccion');
}

// Pone el color del pincel en la celda
function pinta() { this.className = pincel; }

// Crea una tabla y la devuelve
function creaTabla(numCols, numFils) {
    let table, tbody, tr, td;
    tbody = creaEl('tbody');
    for (let i = 1; i <= numFils; i++) {
        tr = creaEl('tr');
        for (let i = 1; i <= numCols; i++) {
            td = creaEl('td');
            td.classList.add('blanc');
            td.onclick = pinta; // ¡Magia!
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table = creaEl('table');
    table.appendChild(tbody);
    return table;
}

// Obtiene un elemento por su selector
function el(el) { return document.querySelector(el); }

// Crea un elemento nuevo
function creaEl(el) { return document.createElement(el); }