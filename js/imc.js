function imc(){

let imc;
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;

if(peso<=0 || altura<=0){

    alert("El peso o la altura que has indicado son incorrectos");
}else{
    let multiplicacion = (altura*altura);
    imc = peso /multiplicacion;

    resultado="Tu índice de masa corporal es del " +imc.toFixed(2)+"%.";

    if(imc<16.00){
        resultado+=" Peso bajo necesitas Valorar signos desnutrición.";
    }else if(imc <= 16.00 || imc <= 16.09){
        resultado+=" Masa corporal baja.";
    }else if(imc <= 17.00 || imc <= 18.49){
        resultado+=" Masa corporal cercana a valores estables.";
    }else if(imc <= 18.50 || imc <= 24.99){
        resultado+=" Masa corporal estable.";
    }else if(imc <= 25.00 || imc <= 29.99){
        resultado+=" Masa corporal por encima de valores estables.";
    }else if(imc <= 30.00 || imc <= 35.99){
        resultado+=" Masa corporal elevada.";
    }else if(imc <= 36.00 || imc <=40.00){
        resultado+=" Masa corporal demasiado elevada. Puede que sufras de obesidad.";
    }else{
        resultado+=" No existen indicaciones para ese valor.";
    }
    
    return "Su IMC es "+resultado;
}

}