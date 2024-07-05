let diasMañana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

    function crearFilaDias () {
        let diasFila = "<tr><th>Horas</th>";
        for (let i = 0; i < diasMañana.length; i++) {
            let celda = "<td>"+diasMañana[i]+"</td>";
            diasFila += celda;      
    }

    h1 = new Date("2022-12-04T07:00");
    h2 = new Date("2022-12-04T09:00");

    for (let i = 0; i < 3; i++) {
        h1.setMinutes(h1.getMinutes() + 120);
        h2.setMinutes(h2.getMinutes() + 120);
        document.write(h1.getHours() + ":" + ("0" + h1.getMinutes()) + "-" + h2.getHours() + ":" + ("0" + h2.getMinutes())+"<br><br>");  
    }

    return diasFila+"</tr>";;

}

document.getElementById("tablaM").innerHTML = crearFilaDias();
