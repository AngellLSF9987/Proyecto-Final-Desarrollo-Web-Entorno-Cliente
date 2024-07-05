let diasTardes= ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    function crearFilaDias () {
        let diasFila = "<tr><th>Horas</th>";
        for (let i = 0; i < diasTardes.length; i++) {
            let celda1 = "<td>"+diasTardes[i]+"</td>";
            diasFila += celda1;      
    }

        h1 = new Date("2022-12-04T15:00");
        h2 = new Date("2022-12-04T16:00");
            for (let i = 0; i < 5; i++) {
                h1.setMinutes(h1.getMinutes() + 60);
                h2.setMinutes(h2.getMinutes() + 60);
                document.write(h1.getHours() + ":" + ("0" + h1.getMinutes()) + "-" + h2.getHours() + ":" + ("0" + h2.getMinutes())+"<br><br>");  
            }
    return diasFila+"</tr>";

}

document.getElementById("tablaT").innerHTML = crearFilaDias();