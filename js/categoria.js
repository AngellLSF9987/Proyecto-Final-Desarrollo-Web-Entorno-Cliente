function categoria(){
    let edad=document.getElementById("edad").value;
    let resultado;

    if(edad==0){
        
        resultado="Edad incorrecta. Introduzca una edad entre 1 y 85";

        return resultado;

    }else{

    if (edad <= 0 || edad <= 10) {
            resultado="Junior";
        }else if (edad == 10 || edad <= 17) {
            resultado="Adolescente";
        } else if (edad == 18 || edad <= 24) {
            resultado="Adulto Junior";
        } else if (edad == 25 || edad <= 49) {
            resultado="Adulto Medio";
        } else if (edad == 50 || edad <= 64) {
            resultado="Senior Junior";
        } else if (edad == 65 || edad <= 75) {
            resultado="Senior Medio";
        } else if (edad == 76 || edad <= 85) {
            resultado="Senior";
        } else {
            resultado="No existen indicaciones para esa edad";
        }

    return "Su categoría es: "+resultado;
}

}
