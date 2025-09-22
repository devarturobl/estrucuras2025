function llenarLista() {
    document.getElementById("idea1").innerHTML = "Entender el problema";
    document.getElementById("idea2").innerHTML = "Dividir el problema en partes más pequeñas";
    document.getElementById("idea3").innerHTML = "Resolver cada parte por separado";
    document.getElementById("idea4").innerHTML = "Combinar las soluciones para resolver el problema completo";
    document.getElementById("idea5").innerHTML = "Probar y ajustar la solución según sea necesario";
    document.getElementById("idea6").innerHTML = "ahora si ya entendí!";
}

function saludar() {
   let nombre = document.getElementById("nombre");
   document.getElementById("miSaludo").innerHTML = "Hola " + nombre.value + ", bienvenido a la clase de programación!";
}

