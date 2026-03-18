function Evaluar(){
    let nombre =
    document.getElementById("nombre").value;
    let cal1 =
    parseFloat(document.getElementById("cal1").value);
    let cal2 =
    parseFloat(document.getElementById("cal2").value);
    let cal3 =
    parseFloat(document.getElementById("cal3").value);
    let promedio = (cal1 + cal2 + cal3) / 3;
    
    let mensaje = "";
    if(promedio <6){
        mensaje = nombre + " reprobo con promedio " + promedio.toFixed(2);
    }
    else if(promedio >= 6 && promedio < 9)
    {
        mensaje = nombre + " aprobo con promedio " + promedio.toFixed(2);
    }
    else if(promedio >= 9){
        mensaje = nombre + " ¡Buen trabajo! Promedio: " + promedio.toFixed(2);
    }
    document.getElementById("resultado").innerText = mensaje;
}