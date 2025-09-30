document.addEventListener("DOMContentLoaded", function(){

    // Declaramos una variable en js que representa el boton en html
    var btncalculo= document.getElementById("btn-calculo")
   
    // Declaramos un evento click a ese boton
    btncalculo.addEventListener("click", function(){
        // agarramos el valor o contenido de la caja de texto input
        //El cual retorna un tipo string
       
        var cliente = document.getElementById("input-name")
        var valueancho= parseFloat(document.getElementById("input-Largo-piso").value)
        var valuelargo = parseFloat(document.getElementById("input-Ancho-piso").value)
        var valueprecio = parseFloat(document.getElementById("input-precio").value)
        
        //isNaN => is Not a Number
        //alert es un mensaje para el usuario
        //console es mensaje para el desarrollador
        if (isNaN(valuelargo) || isNaN(valueancho)||isNaN(valueprecio)){
            alert("Por favor ingrese numeros validos y en metros ")
            console.error("Se ingreso un valor no numerico")
            return
        }
            var areaSuperficie = (valueancho *100)* (valuelargo*100)

            var cantidadAzulejos = (areaSuperficie/625)
           
            var precioTotal= (cantidadAzulejos * valueprecio)
           
            var desglose = alert("PARA EL CLIENTE" + cliente+"✨"+
                "✨EL ÁREA DE lA SUPERFICIE EN cm^2 : " + areaSuperficie
                +"✨LA CANTIDAD DE AZULEJOS : " + cantidadAzulejos +
                "✨EL PRECIO TOTAL ES DE $"+precioTotal
            )

    })
})