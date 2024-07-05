function fcmax(){

let resultadoFCMAX=0;

let edad1 = document.getElementById("edad").value;
let sexo1 = document.getElementById("sexo").value.toUpperCase();


        if(edad1<=0 || edad1>85 || (sexo1!="HOMBRE" && sexo1!="MUJER")){

            alert("La edad o el sexo que has indicado no es correcto");

        }else{
            //FCmax = 220 – edad
            //    Para mujeres, como suelen tener la frecuencia cardíaca más alta se recomienda restar la edad a 225

            if (sexo1 == "HOMBRE"){
                resultadoFCMAX+= (220 - edad1);
                }
            if (sexo1 == "MUJER"){
                    resultadoFCMAX+= (225 - edad1);
                }

        return "SU FC MÁXIMA ES: "+Math.round(resultadoFCMAX)+"</p><br>"
                + "<p>UMBRAL DE RECUPERACIÓN: "+Math.round(resultadoFCMAX*0.70) +"-"+ Math.round(resultadoFCMAX*0.60)+"</p><br>"
                + "<p>UMBRAL AERÓBICO: " + Math.round(resultadoFCMAX*0.70) +"-"+ Math.round(resultadoFCMAX*0.80)+"</p><br>"
                + "<p>UMBRAL ANAERÓBICO: " + Math.round(resultadoFCMAX*0.80) +"-"+ Math.round(resultadoFCMAX*0.90)+"</p><br>"
                + "<p>LINEAROJA: " + Math.round(resultadoFCMAX*0.90) +"-"+ Math.round(resultadoFCMAX);


        }



}



